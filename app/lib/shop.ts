import { type Artwork, type ArtworkPrintSize } from '../data/artworks'
import { getArtworks, getAvailableOriginals, getCommercialStatusLabel } from './artworks'
import { formatPrice } from './money'

export type ProductCategory = 'original' | 'print' | 'object' | 'book' | 'catalogue'

export type ShopProduct = {
  id: string
  slug: string
  artworkSlug: string
  title: string
  category: ProductCategory
  year: string
  medium: string
  size: string
  image?: string
  mockupImage?: string
  price: number
  priceLabel: string
  availability: string
  description: string
  editionSize?: number
  printsSold?: number
  remainingEdition?: number
  paper?: string
  signed?: boolean
  certificate?: boolean
  shippingWeight?: number
  sizes?: ArtworkPrintSize[]
  soldOut?: boolean
}

const fallbackOriginalPrices: Record<string, number> = {
  'linea-organica-i': 1200,
  'red-field-study': 1450,
  'atmospheric-current': 1600,
  'memory-triptych': 1350,
  'magenta-silence': 1900,
  'silver-red-architecture': 1750,
  'green-ribbon': 2100,
  'olive-pink-interruption': 1500,
  'psychedelic-landscape': 1800,
  'turquoise-coral-depth': 2300,
  'neon-contour': 1650,
  'central-spiral': 1950,
  'blue-surface-current': 1400,
  'ochre-fold': 2250,
  'turquoise-fragment': 1700,
  'expanded-fragment': 2500,
}

const printPrice = 180

function parsePrice(value?: string) {
  if (!value) {
    return undefined
  }

  const numeric = Number(value.replace(/[^\d.,]/g, '').replace(',', '.'))
  return Number.isFinite(numeric) ? numeric : undefined
}

function originalProductFromArtwork(artwork: Artwork): ShopProduct {
  const price = parsePrice(artwork.price) || fallbackOriginalPrices[artwork.slug] || 1200

  return {
    id: `original:${artwork.slug}`,
    slug: artwork.slug,
    artworkSlug: artwork.slug,
    title: artwork.title,
    category: 'original',
    year: artwork.year,
    medium: artwork.medium,
    size: artwork.dimensions,
    image: artwork.image,
    mockupImage: artwork.mockup,
    price,
    priceLabel: formatPrice(price),
    availability: getCommercialStatusLabel(artwork),
    description: artwork.description,
  }
}

export function isPrintEnabled(artwork: Artwork) {
  return artwork.print?.enabled === true
}

export function getRemainingEdition(artwork: Artwork) {
  const editionSize = artwork.print?.editionSize || 0
  const printsSold = artwork.print?.printsSold || 0

  return Math.max(editionSize - printsSold, 0)
}

export function isPrintSoldOut(artwork: Artwork) {
  return isPrintEnabled(artwork) && getRemainingEdition(artwork) <= 0
}

export function getPrintSizes(artwork: Artwork) {
  return artwork.print?.sizes?.filter((size) => size.label && size.price) || []
}

export function getPrintStartingPrice(artwork: Artwork) {
  const sizePrices = getPrintSizes(artwork)
    .map((size) => size.price)
    .filter((price) => Number.isFinite(price))

  if (sizePrices.length > 0) {
    return Math.min(...sizePrices)
  }

  return artwork.print?.price || printPrice
}

function printProductFromArtwork(artwork: Artwork): ShopProduct | null {
  if (!artwork.image || !isPrintEnabled(artwork)) {
    return null
  }

  const price = getPrintStartingPrice(artwork)
  const sizes = getPrintSizes(artwork)
  const remainingEdition = getRemainingEdition(artwork)
  const soldOut = remainingEdition <= 0

  return {
    id: `print:${artwork.slug}`,
    slug: `${artwork.slug}-print`,
    artworkSlug: artwork.slug,
    title: artwork.title,
    category: 'print',
    year: artwork.year,
    medium: `Fine art print${artwork.print?.paper ? ` on ${artwork.print.paper}` : ''}`,
    size: sizes.length > 0 ? sizes.map((size) => size.label).join(' / ') : 'Sizes available on request',
    image: artwork.image,
    mockupImage: artwork.mockup,
    price,
    priceLabel: formatPrice(price),
    availability: soldOut ? 'Sold Out' : 'Available',
    description: `Fine art print edition based on ${artwork.title}.`,
    editionSize: artwork.print?.editionSize,
    printsSold: artwork.print?.printsSold || 0,
    remainingEdition,
    paper: artwork.print?.paper,
    signed: artwork.print?.signed,
    certificate: artwork.print?.certificate,
    shippingWeight: artwork.print?.shippingWeight,
    sizes,
    soldOut,
  }
}

export async function getOriginalProducts() {
  const originals = await getAvailableOriginals()
  return originals.filter((artwork) => artwork.image).map(originalProductFromArtwork)
}

export async function getPrintProducts() {
  const artworks = await getArtworks()
  return artworks
    .map(printProductFromArtwork)
    .filter(Boolean) as ShopProduct[]
}

export async function getShopProducts() {
  const [originals, prints] = await Promise.all([getOriginalProducts(), getPrintProducts()])
  return [...originals, ...prints]
}

export async function getShopProduct(slug: string) {
  const products = await getShopProducts()
  return products.find((product) => product.slug === slug)
}

export async function getPrintProductForArtwork(artworkSlug: string) {
  const artworks = await getArtworks()
  const artwork = artworks.find((item) => item.slug === artworkSlug)

  return artwork ? printProductFromArtwork(artwork) : null
}

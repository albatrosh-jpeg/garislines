import { groq } from 'next-sanity'
import {
  artworks as fallbackArtworks,
  type Artwork,
  getCommercialStatus,
  getCommercialStatusLabel,
} from '../data/artworks'
import { isSanityConfigured, sanityClient } from './sanity'

type SanityArtwork = {
  title?: string
  slug?: string
  year?: string
  medium?: string
  size?: string
  description?: string
  mainImage?: string
  mockupImage?: string
  availabilityStatus?: 'available' | 'sold' | 'private-collection'
  showInPaintings?: boolean
  showInShop?: boolean
  shopCategory?: 'original' | 'print' | 'object'
  price?: string
  order?: number
}

const artworkFields = groq`
  title,
  "slug": slug.current,
  year,
  medium,
  size,
  description,
  "mainImage": mainImage.asset->url,
  "mockupImage": mockupImage.asset->url,
  availabilityStatus,
  showInPaintings,
  showInShop,
  shopCategory,
  price,
  order
`

const allArtworksQuery = groq`
  *[_type == "artwork"] | order(coalesce(order, 9999) asc, _createdAt asc) {
    ${artworkFields}
  }
`

function normalizeArtwork(item: SanityArtwork): Artwork | null {
  if (!item.title || !item.slug) {
    return null
  }

  return {
    title: item.title,
    slug: item.slug,
    collection: 'Paintings 2024-2026',
    year: item.year || '',
    medium: item.medium || '',
    dimensions: item.size || '',
    description: item.description || '',
    image: item.mainImage,
    mockup: item.mockupImage,
    availableForInquiry: item.availabilityStatus === 'available',
    commercialStatus: item.availabilityStatus || 'unavailable',
    showInPaintings: item.showInPaintings ?? true,
    showInShop: item.showInShop ?? false,
    shopCategory: item.shopCategory || 'original',
    price: item.price,
    order: item.order,
    palette: '',
  }
}

async function fetchSanityArtworks() {
  if (!isSanityConfigured) {
    return []
  }

  try {
    const sanityArtworks = await sanityClient.fetch<SanityArtwork[]>(allArtworksQuery, {}, {
      next: { revalidate: 60 },
    })

    return sanityArtworks.map(normalizeArtwork).filter(Boolean) as Artwork[]
  } catch {
    return []
  }
}

export async function getArtworks() {
  const sanityArtworks = await fetchSanityArtworks()
  return sanityArtworks.length > 0 ? sanityArtworks : fallbackArtworks
}

export async function getPaintings() {
  const artworks = await getArtworks()
  return artworks.filter((artwork) => artwork.showInPaintings !== false)
}

export async function getArtwork(slug: string) {
  const artworks = await getArtworks()
  return artworks.find((artwork) => artwork.slug === slug)
}

export async function getAvailableOriginals() {
  const artworks = await getArtworks()
  return artworks.filter((artwork) => {
    const showInShop = artwork.showInShop ?? getCommercialStatus(artwork) === 'available'
    const shopCategory = artwork.shopCategory || 'original'

    return showInShop && shopCategory === 'original' && getCommercialStatus(artwork) === 'available'
  })
}

export async function getShopArtwork(slug: string) {
  const originals = await getAvailableOriginals()
  return originals.find((artwork) => artwork.slug === slug)
}

export { getCommercialStatus, getCommercialStatusLabel }

export type ArtworkOriginal = {
  available: boolean
  sold: boolean
}

export type ArtworkPrintSize = {
  label: string
  width: number
  height: number
  price: number
}

export type ArtworkPrint = {
  enabled: boolean
  price?: number
  editionSize?: number
  printsSold?: number
  paper?: string
  signed?: boolean
  certificate?: boolean
  shippingWeight?: number
  masterPrintFile?: string
  sizes?: ArtworkPrintSize[]
}

export type Artwork = {
  slug: string
  title: string
  collection: string
  year: string
  medium: string
  dimensions: string
  image?: string
  mockup?: string
  detailImages?: string[]
  studioImages?: string[]
  original?: ArtworkOriginal
  print?: ArtworkPrint
  featured?: boolean
  availableForInquiry?: boolean
  commercialStatus?: 'available' | 'sold' | 'private-collection' | 'unavailable'
  showInPaintings?: boolean
  showInShop?: boolean
  shopCategory?: 'original' | 'print' | 'object'
  price?: string
  order?: number
  palette: string
  description: string
}

export const defaultPrintSettings: ArtworkPrint = {
  enabled: true,
  price: 180,
  editionSize: 30,
  printsSold: 0,
  paper: 'Hahnemuhle Photo Rag 308 gsm',
  signed: true,
  certificate: true,
  shippingWeight: 0.4,
  sizes: [
    {
      label: '50 x 70 cm',
      width: 50,
      height: 70,
      price: 180,
    },
    {
      label: '70 x 100 cm',
      width: 70,
      height: 100,
      price: 280,
    },
  ],
}

export const artworks: Artwork[] = [
  {
    slug: 'linea-organica-i',
    title: 'Solar Ravine',
    collection: 'Line Studies',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '120 x 90 cm',
    image: '/artworks/art1.jpeg',
    mockup: '/mockups/mockup2.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    featured: true,
    availableForInquiry: true,
    palette: 'Monochrome, vermilion, ivory',
    description:
      'An orange field opens around dense black and white currents, where line gathers into a charged, almost topographic movement.',
  },
  {
    slug: 'red-field-study',
    title: 'Red Knot Field',
    collection: 'Chromatic Fields',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '140 x 100 cm',
    image: '/artworks/art2.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    featured: true,
    availableForInquiry: true,
    palette: 'Crimson, black, white',
    description:
      'Crimson forms press through a compact field of black, white and grey, creating a knotted rhythm of enclosure and release.',
  },
  {
    slug: 'atmospheric-current',
    title: 'Terrain of White Currents',
    collection: 'Soft Structures',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '150 x 110 cm',
    image: '/artworks/art3.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    featured: true,
    availableForInquiry: true,
    palette: 'Earth, graphite, white',
    description:
      'White lines travel across bands of brown, green and ochre, turning the surface into a landscape of movement and suspended pressure.',
  },
  {
    slug: 'memory-triptych',
    title: 'Blue Apparitions',
    collection: 'Figure Signals',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '130 x 95 cm',
    image: '/artworks/art4.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Electric blue, black, white',
    description:
      'Pale figures emerge from a blue ornamental ground, appearing and disappearing inside a field of mirrored linework.',
  },
  {
    slug: 'magenta-silence',
    title: 'Magenta Aperture',
    collection: 'Chromatic Fields',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '160 x 120 cm',
    image: '/artworks/art5.jpeg',
    mockup: '/mockups/mockup10.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Magenta, ochre, white',
    description:
      'A vivid magenta centre is held by looping yellow, white and pink forms, creating a controlled opening inside a decorative pressure field.',
  },
  {
    slug: 'silver-red-architecture',
    title: 'Crimson Scaffold',
    collection: 'Line Studies',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '150 x 100 cm',
    image: '/artworks/art6.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Silver, red, black',
    description:
      'A red and grey structure sits inside a quiet architectural setting, emphasizing the painting as both object and spatial presence.',
  },
  {
    slug: 'green-ribbon',
    title: 'Grey Red Conduit',
    collection: 'Chromatic Fields',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '180 x 120 cm',
    image: '/artworks/art7.jpeg',
    mockup: '/mockups/mockup1.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Green, black, white',
    description:
      'Red channels move across a grey field like a circuit, balancing industrial restraint with a nervous organic pulse.',
  },
  {
    slug: 'olive-pink-interruption',
    title: 'Green Signal Field',
    collection: 'Soft Structures',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '140 x 100 cm',
    image: '/artworks/art8.jpeg',
    mockup: '/mockups/mockup5.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Pink, olive, black',
    description:
      'Electric greens and deep black curves create a dense optical field, where repeated line becomes signal, vibration and structure.',
  },
  {
    slug: 'psychedelic-landscape',
    title: 'Black Vine, Violet Ground',
    collection: 'Chromatic Fields',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '160 x 110 cm',
    image: '/artworks/art9.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Multicolor, black, white',
    description:
      'A sweeping black form cuts through violet and green linework, giving the composition the tension of growth, shadow and interruption.',
  },
  {
    slug: 'turquoise-coral-depth',
    title: 'Nocturne With Copper Lines',
    collection: 'Figure Signals',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '200 x 140 cm',
    image: '/artworks/art10.jpeg',
    mockup: '/mockups/mockup3.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Turquoise, coral, black',
    description:
      'Copper, violet and white lines gather around a dark central movement, forming a nocturnal surface of rhythm and compression.',
  },
  {
    slug: 'neon-contour',
    title: 'White Channel',
    collection: 'Line Studies',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '150 x 100 cm',
    image: '/artworks/art11.jpeg',
    mockup: '/mockups/mockup11.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Black, white, neon accents',
    description:
      'A broad white channel moves through a dense field of patterned colour, opening a pause inside an otherwise restless surface.',
  },
  {
    slug: 'central-spiral',
    title: 'Rose Circuit',
    collection: 'Line Studies',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '170 x 120 cm',
    image: '/artworks/art12.jpeg',
    mockup: '/mockups/mockup4.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    featured: true,
    availableForInquiry: true,
    palette: 'Gold, red, black, white',
    description:
      'Pink and blue circuits fold around sweeping black and white forms, creating a bright field of friction and visual acceleration.',
  },
  {
    slug: 'blue-surface-current',
    title: 'Golden Spiral Field',
    collection: 'Soft Structures',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '130 x 90 cm',
    image: '/artworks/art13.jpeg',
    mockup: '/mockups/mockup9.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Blue, black, white',
    description:
      'A white spiral crosses a warm gold ground, holding a crowded field of colour in a single decisive gesture.',
  },
  {
    slug: 'ochre-fold',
    title: 'Blue Drift',
    collection: 'Soft Structures',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '190 x 130 cm',
    image: '/artworks/art14.jpeg',
    mockup: '/mockups/mockup13.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Ochre, peach, black, white',
    description:
      'Blue and black forms drift through a compact horizontal field, where small bursts of colour punctuate the movement like signals.',
  },
  {
    slug: 'turquoise-fragment',
    title: 'Ochre Cellular Study',
    collection: 'Figure Signals',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '150 x 110 cm',
    image: '/artworks/art15.jpeg',
    mockup: '/mockups/mockup16.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    availableForInquiry: true,
    palette: 'Turquoise, pastel, monochrome',
    description:
      'Ochre, cream and black shapes cluster inside a square field, suggesting cells, folds and small internal systems.',
  },
  {
    slug: 'expanded-fragment',
    title: 'Turquoise Fold',
    collection: 'Figure Signals',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '200 x 150 cm',
    image: '/artworks/art16.jpeg',
    mockup: '/mockups/mockup8.jpeg',
    original: { available: true, sold: false },
    print: defaultPrintSettings,
    featured: true,
    availableForInquiry: true,
    palette: 'Turquoise, rose, black, white',
    description:
      'Turquoise folds move through grey, coral and black linework, giving the painting a bodily rhythm and sculptural density.',
  },
  {
    slug: 'archive-study-17',
    title: 'Archive Study 17',
    collection: 'Upcoming Works',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: 'Dimensions pending',
    availableForInquiry: false,
    palette: 'Neutral archive placeholder',
    description:
      'Catalog placeholder reserved for a forthcoming work. The artwork image can be added later without changing the page structure.',
  },
  {
    slug: 'archive-study-18',
    title: 'Archive Study 18',
    collection: 'Upcoming Works',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: 'Dimensions pending',
    availableForInquiry: false,
    palette: 'Neutral archive placeholder',
    description:
      'Catalog placeholder reserved for a forthcoming work. The layout intentionally treats absence as archive material.',
  },
  {
    slug: 'archive-study-19',
    title: 'Archive Study 19',
    collection: 'Upcoming Works',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: 'Dimensions pending',
    availableForInquiry: false,
    palette: 'Neutral archive placeholder',
    description:
      'Catalog placeholder reserved for a forthcoming work. This neutral surface will hold final photography when available.',
  },
]

export const collections = [
  {
    name: 'Line Studies',
    summary:
      'Works where line behaves as movement, structure and pulse across dense abstract fields.',
  },
  {
    name: 'Chromatic Fields',
    summary:
      'Paintings led by saturated color, optical rhythm and controlled chromatic pressure.',
  },
  {
    name: 'Soft Structures',
    summary:
      'Quieter surfaces where organic forms, atmosphere and spatial pauses become the main material.',
  },
  {
    name: 'Figure Signals',
    summary:
      'Compositions where fragments of bodies, faces and symbolic traces appear inside abstract systems.',
  },
  {
    name: 'Upcoming Works',
    summary:
      'Reserved archive entries prepared for forthcoming pieces and future documentation.',
  },
]

export function getArtwork(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug)
}

export function getArtworksByCollection(collection: string) {
  return artworks.filter((artwork) => artwork.collection === collection)
}

export function getCommercialStatus(artwork: Artwork) {
  if (artwork.original) {
    if (artwork.original.sold) {
      return 'sold'
    }

    if (artwork.original.available && artwork.image) {
      return 'available'
    }
  }

  if (artwork.commercialStatus) {
    return artwork.commercialStatus
  }

  if (artwork.availableForInquiry && artwork.image) {
    return 'available'
  }

  return 'unavailable'
}

export function getCommercialStatusLabel(artwork: Artwork) {
  const status = getCommercialStatus(artwork)

  if (status === 'available') {
    return 'Available'
  }

  if (status === 'sold') {
    return 'Sold'
  }

  if (status === 'private-collection') {
    return 'Private collection'
  }

  return 'Not currently available'
}

export function getAvailableOriginals() {
  return artworks.filter((artwork) => getCommercialStatus(artwork) === 'available')
}

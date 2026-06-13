export type Artwork = {
  slug: string
  title: string
  collection: string
  year: string
  medium: string
  dimensions: string
  image?: string
  mockup?: string
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

export const artworks: Artwork[] = [
  {
    slug: 'linea-organica-i',
    title: 'Linea Organica I',
    collection: 'Line Studies',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '120 x 90 cm',
    image: '/artworks/art1.jpeg',
    mockup: '/mockups/mockup2.jpeg',
    featured: true,
    availableForInquiry: true,
    palette: 'Monochrome, vermilion, ivory',
    description:
      'A dense movement of white linework crosses a field of orange and black, building a visual rhythm between organic growth and graphic tension.',
  },
  {
    slug: 'red-field-study',
    title: 'Red Field Study',
    collection: 'Chromatic Fields',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '140 x 100 cm',
    image: '/artworks/art2.jpeg',
    mockup: '/mockups/mockup2.jpeg',
    featured: true,
    availableForInquiry: true,
    palette: 'Crimson, black, white',
    description:
      'Dark structures and fluid contours inhabit a crimson surface, suggesting enclosure, velocity and suspended architectural fragments.',
  },
  {
    slug: 'atmospheric-current',
    title: 'Atmospheric Current',
    collection: 'Soft Structures',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '150 x 110 cm',
    image: '/artworks/art3.jpeg',
    mockup: '/mockups/mockup10.jpeg',
    featured: true,
    availableForInquiry: true,
    palette: 'Earth, graphite, white',
    description:
      'Earth tones dissolve under floating lines, creating a quieter composition where motion appears as atmosphere rather than force.',
  },
  {
    slug: 'memory-triptych',
    title: 'Memory Triptych',
    collection: 'Figure Signals',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '130 x 95 cm',
    image: '/artworks/art4.jpeg',
    mockup: '/mockups/mockup1.jpeg',
    availableForInquiry: true,
    palette: 'Electric blue, black, white',
    description:
      'Fragmented faces emerge through intricate linework, where identity is treated as a field of repetition, interruption and recall.',
  },
  {
    slug: 'magenta-silence',
    title: 'Magenta Silence',
    collection: 'Chromatic Fields',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '160 x 120 cm',
    image: '/artworks/art5.jpeg',
    mockup: '/mockups/mockup10.jpeg',
    availableForInquiry: true,
    palette: 'Magenta, ochre, white',
    description:
      'A luminous center is held by looping forms, balancing chromatic intensity with a deliberate area of pause.',
  },
  {
    slug: 'silver-red-architecture',
    title: 'Silver Red Architecture',
    collection: 'Line Studies',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '150 x 100 cm',
    image: '/artworks/art6.jpeg',
    mockup: '/mockups/mockup6.jpeg',
    availableForInquiry: true,
    palette: 'Silver, red, black',
    description:
      'Layered crimson paths cross a metallic ground with a sense of constructed pressure and controlled movement.',
  },
  {
    slug: 'green-ribbon',
    title: 'Green Ribbon',
    collection: 'Chromatic Fields',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '180 x 120 cm',
    image: '/artworks/art7.jpeg',
    mockup: '/mockups/mockup1.jpeg',
    availableForInquiry: true,
    palette: 'Green, black, white',
    description:
      'Bright ribbons and black curves create a charged surface, emphasizing contrast, pulse and visual acceleration.',
  },
  {
    slug: 'olive-pink-interruption',
    title: 'Olive Pink Interruption',
    collection: 'Soft Structures',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '140 x 100 cm',
    image: '/artworks/art8.jpeg',
    mockup: '/mockups/mockup5.jpeg',
    availableForInquiry: true,
    palette: 'Pink, olive, black',
    description:
      'Heavy forms interrupt a network of flowing lines, creating a composition that moves between pattern and rupture.',
  },
  {
    slug: 'psychedelic-landscape',
    title: 'Psychedelic Landscape',
    collection: 'Chromatic Fields',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '160 x 110 cm',
    image: '/artworks/art9.jpeg',
    mockup: '/mockups/mockup9.jpeg',
    availableForInquiry: true,
    palette: 'Multicolor, black, white',
    description:
      'A vivid field of color meets intricate monochrome textures, balancing exuberance with a precise internal order.',
  },
  {
    slug: 'turquoise-coral-depth',
    title: 'Turquoise Coral Depth',
    collection: 'Figure Signals',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '200 x 140 cm',
    image: '/artworks/art10.jpeg',
    mockup: '/mockups/mockup3.jpeg',
    availableForInquiry: true,
    palette: 'Turquoise, coral, black',
    description:
      'Fluid forms move across geometric color, opening a study of perception, distortion and layered depth.',
  },
  {
    slug: 'neon-contour',
    title: 'Neon Contour',
    collection: 'Line Studies',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '150 x 100 cm',
    image: '/artworks/art11.jpeg',
    mockup: '/mockups/mockup11.jpeg',
    availableForInquiry: true,
    palette: 'Black, white, neon accents',
    description:
      'Curved monochrome structures weave through vivid details, making repetition feel optical and physical at once.',
  },
  {
    slug: 'central-spiral',
    title: 'Central Spiral',
    collection: 'Line Studies',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '170 x 120 cm',
    image: '/artworks/art12.jpeg',
    mockup: '/mockups/mockup12.jpeg',
    featured: true,
    availableForInquiry: true,
    palette: 'Gold, red, black, white',
    description:
      'A spiral form expands through warm chromatic layers, giving the work a sense of rotation, emergence and transformation.',
  },
  {
    slug: 'blue-surface-current',
    title: 'Blue Surface Current',
    collection: 'Soft Structures',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '130 x 90 cm',
    image: '/artworks/art13.jpeg',
    mockup: '/mockups/mockup9.jpeg',
    availableForInquiry: true,
    palette: 'Blue, black, white',
    description:
      'Electric blues and wave-like contours form a high-contrast composition inspired by motion beneath the surface.',
  },
  {
    slug: 'ochre-fold',
    title: 'Ochre Fold',
    collection: 'Soft Structures',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '190 x 130 cm',
    image: '/artworks/art14.jpeg',
    mockup: '/mockups/mockup14.jpeg',
    availableForInquiry: true,
    palette: 'Ochre, peach, black, white',
    description:
      'Organic black and white forms fold through warm tones, balancing softness with graphic intensity.',
  },
  {
    slug: 'turquoise-fragment',
    title: 'Turquoise Fragment',
    collection: 'Figure Signals',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '150 x 110 cm',
    image: '/artworks/art15.jpeg',
    mockup: '/mockups/mockup15.jpeg',
    availableForInquiry: true,
    palette: 'Turquoise, pastel, monochrome',
    description:
      'Ribbons and concentric forms cross a glowing field, where fragmentation becomes both structure and motion.',
  },
  {
    slug: 'expanded-fragment',
    title: 'Expanded Fragment',
    collection: 'Figure Signals',
    year: '2026',
    medium: 'Acrylic on canvas',
    dimensions: '200 x 150 cm',
    image: '/artworks/art16.jpeg',
    mockup: '/mockups/mockup16.jpeg',
    featured: true,
    availableForInquiry: true,
    palette: 'Turquoise, rose, black, white',
    description:
      'A broader field of gestural ribbons and optical forms turns the image into an expanded map of rhythm and spatial tension.',
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

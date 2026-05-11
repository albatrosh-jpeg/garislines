'use client'

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
const artworks = [
  {
    id: 1,
    title: 'Artwork 01',
    image: '/artworks/art1.jpeg',
    mockup: '/mockups/mockup2.jpeg',
    price: '€1,200',
    size: '120 × 90 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Interwoven monochrome currents collide with vivid orange forms, creating a dense landscape of movement and tension. A layered abstract composition balancing organic chaos with rhythmic precision.'
  },
  {
    id: 2,
    title: 'Artwork 02',
    image: '/artworks/art2.jpeg',
    mockup: '/mockups/mockup2.jpeg',
    price: '€1,450',
    size: '140 × 100 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Bold black structures and flowing white contours drift across a deep crimson field. A striking abstract work exploring contrast, confinement and visual momentum.'
  },
  {
    id: 3,
    title: 'Artwork 03',
    image: '/artworks/art3.jpeg',
    mockup: '/mockups/mockup10.jpeg',
    price: '€1,600',
    size: '150 × 110 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Soft earth tones dissolve beneath floating white linear forms that resemble tangled currents of energy. A fluid composition inspired by motion, atmosphere and organic growth.'
  },
  {
    id: 4,
    title: 'Artwork 04',
    image: '/artworks/art4.jpeg',
    mockup: '/mockups/mockup1.jpeg',
    price: '€1,350',
    size: '130 × 95 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Three fragmented faces emerge through intricate white linework against electric blue depths. A hypnotic triptych examining identity, memory and interconnected thought.'
  },
  {
    id: 5,
    title: 'Artwork 05',
    image: '/artworks/art5.jpeg',
    mockup: '/mockups/mockup10.jpeg',
    price: '€1,900',
    size: '160 × 120 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Vibrant magenta tones are framed by looping golden and white forms that pulse around an empty centre. A luminous abstract piece exploring balance, space and repetition.'
  },
  {
    id: 6,
    title: 'Artwork 06',
    image: '/artworks/art6.jpeg',
    mockup: '/mockups/mockup6.jpeg',
    price: '€1,750',
    size: '150 × 100 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Layered crimson pathways weave across metallic silver surfaces with architectural precision. A contemporary abstract painting merging structure, flow and spatial tension.'
  },
  {
    id: 7,
    title: 'Artwork 07',
    image: '/artworks/art7.jpeg',
    mockup: '/mockups/mockup1.jpeg',
    price: '€2,100',
    size: '180 × 120 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Bright green ribbons and bold black curves intertwine across a luminous surface full of movement. A rhythmic abstract composition charged with energy and contrast.'
  },
  {
    id: 8,
    title: 'Artwork 08',
    image: '/artworks/art8.jpeg',
    mockup: '/mockups/mockup5.jpeg',
    price: '€1,500',
    size: '140 × 100 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Heavy black forms cut through vivid pink and olive patterns in a dense network of flowing lines. A bold visual study of movement, disruption and layered abstraction.'
  },
  {
    id: 9,
    title: 'Artwork 09',
    image: '/artworks/art9.jpeg',
    mockup: '/mockups/mockup9.jpeg',
    price: '€1,800',
    size: '160 × 110 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Psychedelic colour fields and intricate monochrome textures collide in an explosive abstract landscape. A dynamic composition balancing controlled pattern with visual intensity.'
  },
  {
    id: 10,
    title: 'Artwork 10',
    image: '/artworks/art10.jpeg',
    mockup: '/mockups/mockup3.jpeg',
    price: '€2,300',
    size: '200 × 140 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Fluid black and white forms emerge from vibrant geometric patterns in turquoise and coral tones. A contemporary abstract work exploring perception, depth and distortion.'
  },
  {
    id: 11,
    title: 'Artwork 11',
    image: '/artworks/art11.jpeg',
    mockup: '/mockups/mockup11.jpeg',
    price: '€1,650',
    size: '150 × 100 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Curved monochrome structures weave through vivid neon details against a richly textured background. A hypnotic painting driven by rhythm, repetition and optical movement.'
  },
  {
    id: 12,
    title: 'Artwork 12',
    image: '/artworks/art12.jpeg',
    mockup: '/mockups/mockup12.jpeg',
    price: '€1,950',
    size: '170 × 120 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'A central spiral form unfolds across vibrant geometric layers and warm golden tones. A striking abstract composition evoking expansion, motion and transformation.'
  },
  {
    id: 13,
    title: 'Artwork 13',
    image: '/artworks/art13.jpeg',
    mockup: '/mockups/mockup9.jpeg',
    price: '€1,400',
    size: '130 × 90 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Deep electric blues and flowing monochrome contours create a dense, wave-like visual rhythm. A high-contrast abstract work inspired by movement beneath the surface.'
  },
  {
    id: 14,
    title: 'Artwork 14',
    image: '/artworks/art14.jpeg',
    mockup: '/mockups/mockup14.jpeg',
    price: '€2,250',
    size: '190 × 130 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Organic black and white forms twist through warm peach and ochre tones in a tightly layered composition. A fluid abstract painting balancing softness with graphic intensity.'
  },
  {
    id: 15,
    title: 'Artwork 15',
    image: '/artworks/art15.jpeg',
    mockup: '/mockups/mockup15.jpeg',
    price: '€1,700',
    size: '150 × 110 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Turquoise ribbons and concentric monochrome forms intertwine across glowing pastel fields. A surreal abstract composition exploring depth, fragmentation and organic motion.'
  },
  {
    id: 16,
    title: 'Artwork 16',
    image: '/artworks/art16.jpeg',
    mockup: '/mockups/mockup16.jpeg',
    price: '€2,500',
    size: '200 × 150 cm',
    medium: 'Acrylic on canvas',
    year: '2026',
    status: 'Available',
    description:
'Turquoise ribbons and concentric monochrome forms intertwine across glowing pastel fields. A surreal abstract composition exploring depth, fragmentation and organic motion.'
  },
]

  export default function HomePage() {
    const [selectedArtwork, setSelectedArtwork] = useState<any>(null)
  const currentIndex = artworks.findIndex(
  (art) => art.id === selectedArtwork?.id
)

const goToNext = () => {
  const nextIndex = (currentIndex + 1) % artworks.length
  setSelectedArtwork(artworks[nextIndex])
}

const goToPrev = () => {
  const prevIndex =
    (currentIndex - 1 + artworks.length) % artworks.length

  setSelectedArtwork(artworks[prevIndex])
}
    return (
    <main className="min-h-screen bg-[#f7f6f2] text-black">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-[#f7f6f2]/80 backdrop-blur-sm">

        <h1 className="text-2xl tracking-wide">
          AwalRadzi
        </h1>

        <div className="flex items-center gap-8">

  <a
    href="#works"
    className="text-sm uppercase tracking-[0.2em] hover:opacity-50 transition"
  >
    Works
  </a>

  <a
    href="https://www.instagram.com/awal_radzi"
    target="_blank"
    className="text-sm uppercase tracking-[0.2em] hover:opacity-50 transition"
  >
    Instagram
  </a>

</div>

      </nav>

      {/* HERO */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">

  <motion.div
    initial={{ opacity: 0, scale: 1.05 }}
    animate={{ opacity: 0.06, scale: 1 }}
    transition={{ duration: 2 }}
    className="absolute inset-0"
  >

    <Image
      src="/artworks/art3.jpeg"
      alt="Background artwork"
      fill
      className="object-cover"
    />

  </motion.div>

  <div className="relative z-10 text-center px-6">

<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="relative w-[320px] md:w-[520px] h-[320px] md:h-[520px]"
>

  <Image
    src="/awalradzi logo.jpeg"
    alt="Awal Radzi"
    fill
    className="object-contain"
    priority
  />

</motion.div>

 <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 1.2 }}
  className="mt-2 text-xs md:text-sm uppercase tracking-[0.35em] text-neutral-700"
>
  Contemporary Abstract Artist
</motion.p>   

  </div>

</section>

{/* WORKS */}
<section
  id="works"
  className="px-6 md:px-16 pb-40"
>
  <div className="columns-1 md:columns-2 gap-8 space-y-8">

    {artworks.map((art) => (
      <motion.div
        key={art.id}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="break-inside-avoid"
      >

        <div
  className="overflow-hidden bg-white cursor-pointer"
  onClick={() => setSelectedArtwork(art)}
>

          <Image
            src={art.image}
            alt={art.title}
            width={1200}
            height={1600}
            className="w-full h-auto transition duration-[1600ms] ease-out hover:scale-[1.02]"
          />

        </div>

      </motion.div>
    ))}

  </div>

</section>

<footer className="px-6 md:px-16 py-16 border-t border-black/10 mt-20">

  <div className="flex flex-col md:flex-row justify-between items-center gap-6">

    <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
      Awal Radzi
    </p>

    <div className="flex gap-8 text-sm uppercase tracking-[0.15em]">

      <a
        href="https://www.instagram.com/awal_radzi"
        target="_blank"
        className="hover:opacity-50 transition"
      >
        Instagram
      </a>

      <a
        href="mailto:hello@garislines.art"
        className="hover:opacity-50 transition"
      >
        Email
      </a>

    </div>

  </div>

</footer>
<AnimatePresence>

  {selectedArtwork && (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md overflow-y-auto"
    >

      <button
        onClick={() => setSelectedArtwork(null)}
        className="fixed top-8 right-8 z-50 text-white text-sm uppercase tracking-[0.3em] hover:opacity-50 transition"
      >
        Close
      </button>

      <button
        onClick={goToPrev}
        className="fixed left-6 md:left-10 top-1/2 -translate-y-1/2 z-50 text-white text-sm uppercase tracking-[0.3em] hover:opacity-50 transition"
      >
        Prev
      </button>

      <button
        onClick={goToNext}
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-50 text-white text-sm uppercase tracking-[0.3em] hover:opacity-50 transition"
      >
        Next
      </button>

      <div className="max-w-[1800px] mx-auto px-6 md:px-20 py-32">

        <motion.div
          key={selectedArtwork.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5 }}
        >

          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

            {/* MAIN ARTWORK */}
            <div className="relative aspect-[3/4]">

              <Image
                src={selectedArtwork.image}
                alt={selectedArtwork.title}
                fill
                className="object-contain bg-[#111]"
              />

            </div>

            {/* MOCKUP */}
            <div className="relative aspect-[3/4]">

              <Image
                src={selectedArtwork.mockup}
                alt="Mockup"
                fill
                className="object-contain bg-[#111]"
              />

            </div>

          </div>

          <div className="mt-16">

            <h2 className="text-white text-3xl md:text-5xl tracking-wide">
              {selectedArtwork.title}
            </h2>

            <div className="mt-6 space-y-3 text-neutral-300">

  <p>
    {selectedArtwork.medium}
  </p>

  <p>
    {selectedArtwork.size}
  </p>

  <p>
    {selectedArtwork.year}
  </p>
<p className="text-neutral-400 leading-relaxed max-w-2xl pt-6 text-[15px]">
  {selectedArtwork.description}
</p>

<p className="text-white text-3xl md:text-4xl tracking-wide pt-4">
  {selectedArtwork.price}
</p>

<p className="inline-block mt-4 border border-green-400 text-green-400 px-4 py-2 uppercase tracking-[0.2em] text-xs">
  {selectedArtwork.status}
</p>
</div>
<a
  href={`mailto:awalradzis23@gmail.com?subject=${selectedArtwork.title}`}
  className="inline-flex items-center justify-center mt-10 border border-white px-10 py-5 text-sm uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition duration-500"
>
  Enquire
</a>
<p className="text-neutral-500 text-xs uppercase tracking-[0.2em] mt-6">
  Shipping and framing available upon request
</p>

          </div>

        </motion.div>

      </div>

    </motion.div>

  )}

</AnimatePresence>
    </main>
  )
}
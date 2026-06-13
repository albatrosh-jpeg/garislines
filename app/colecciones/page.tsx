import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getPaintings } from '../lib/artworks'

export const metadata: Metadata = {
  title: 'Paintings',
  description:
    'Recent paintings and original works by Awal Radzi.',
}

const interiorMockups = [
  '/mockups/mockup7.jpeg',
  '/mockups/mockup15.jpeg',
  '/mockups/mockup16.jpeg',
]

export default async function CollectionsPage() {
  const artworks = await getPaintings()

  return (
    <main className="paintings-gallery">
      <section className="paintings-masonry" aria-label="Paintings 2024 to 2026">
        {artworks.map((artwork, index) => (
          <div key={artwork.slug}>
            <Link
              href={`/obra/${artwork.slug}`}
              className={`masonry-artwork ${
                index % 7 === 0 ? 'is-tall' : index % 5 === 0 ? 'is-square' : ''
              }`}
            >
              <figure>
                <div className="masonry-media">
                  {artwork.image ? (
                    <Image
                      src={artwork.image}
                      alt={artwork.title}
                      fill
                      priority={index < 3}
                      sizes="(max-width: 760px) 100vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="placeholder-surface">
                      <span>{artwork.title}</span>
                    </div>
                  )}
                </div>
                <figcaption>
                  <span>{artwork.title}</span>
                  <small>{artwork.year}</small>
                </figcaption>
              </figure>
            </Link>

            {(index + 1) % 7 === 0 ? (
              <figure className="masonry-interior">
                <div className="masonry-interior-media">
                  <Image
                    src={interiorMockups[Math.floor(index / 7) % interiorMockups.length]}
                    alt="Selected interior with Awal Radzi artwork"
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ) : null}
          </div>
        ))}
      </section>
    </main>
  )
}

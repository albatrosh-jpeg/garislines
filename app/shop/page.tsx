import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAvailableOriginals, getCommercialStatusLabel } from '../lib/artworks'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Available original works and future fine art prints by Awal Radzi.',
}

export default async function ShopPage() {
  const originals = await getAvailableOriginals()

  return (
    <main>
      <section className="selected-interiors">
        <p className="eyebrow">Selected Interiors</p>
        <div className="selected-interiors-grid">
          {['/mockups/mockup7.jpeg', '/mockups/mockup15.jpeg', '/mockups/mockup16.jpeg'].map(
            (mockup) => (
              <div className="selected-interior-image" key={mockup}>
                <Image
                  src={mockup}
                  alt="Selected interior with Awal Radzi artwork"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            )
          )}
        </div>
      </section>

      <section className="shop-intro">
        <p className="eyebrow">Shop</p>
        <h1>Original works and future editions.</h1>
        <p>
          A quiet acquisition space for available paintings. Details are shared privately
          by the studio.
        </p>
      </section>

      <section className="shop-section" id="original-works">
        <div className="shop-section-heading">
          <p className="eyebrow">Original Works</p>
          <h2>Available paintings</h2>
        </div>

        <div className="shop-grid">
          {originals.map((artwork) => (
            <Link href={`/shop/${artwork.slug}`} className="shop-card" key={artwork.slug}>
              <div className="shop-card-image">
                {artwork.image ? (
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="placeholder-surface">
                    <span>{artwork.title}</span>
                  </div>
                )}
              </div>
              <div className="shop-card-meta">
                <div>
                  <h3>{artwork.title}</h3>
                  <p>{artwork.year}</p>
                </div>
                <span>{getCommercialStatusLabel(artwork)}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="shop-section prints-section" id="prints">
        <div className="shop-section-heading">
          <p className="eyebrow">Fine Art Prints</p>
          <h2>Limited editions and selected reproductions coming soon.</h2>
        </div>
        <p>
          Print editions are being prepared with the same quiet approach as the original
          archive. No print products are currently available.
        </p>
      </section>
    </main>
  )
}

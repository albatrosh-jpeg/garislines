import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { AddToCart } from '../../components/AddToCart'
import {
  getArtworks,
  getArtwork,
  getCommercialStatus,
  getCommercialStatusLabel,
} from '../../lib/artworks'
import { formatPrice } from '../../lib/money'
import { getPrintProductForArtwork } from '../../lib/shop'

type ArtworkPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const artworks = await getArtworks()

  return artworks.map((artwork) => ({
    slug: artwork.slug,
  }))
}

export async function generateMetadata({ params }: ArtworkPageProps): Promise<Metadata> {
  const { slug } = await params
  const artwork = await getArtwork(slug)

  if (!artwork) {
    return {
      title: 'Obra',
    }
  }

  return {
    title: artwork.title,
    description: artwork.description,
    openGraph: {
      title: artwork.title,
      description: artwork.description,
      images: artwork.image ? [artwork.image] : undefined,
    },
  }
}

export default async function ArtworkPage({ params }: ArtworkPageProps) {
  const { slug } = await params
  const artwork = await getArtwork(slug)
  const artworks = await getArtworks()
  const printProduct = await getPrintProductForArtwork(slug)

  if (!artwork) {
    notFound()
  }

  const visibleArtworks = artworks.filter((item) => item.showInPaintings !== false)
  const artworkIndex = visibleArtworks.findIndex((item) => item.slug === artwork.slug)
  const previousArtwork =
    visibleArtworks.length > 1
      ? artworkIndex > 0
        ? visibleArtworks[artworkIndex - 1]
        : visibleArtworks.at(-1)
      : undefined
  const nextArtwork =
    visibleArtworks.length > 1
      ? artworkIndex >= 0 && artworkIndex < visibleArtworks.length - 1
        ? visibleArtworks[artworkIndex + 1]
        : visibleArtworks[0]
      : undefined
  const relatedArtworks = visibleArtworks
    .filter((item) => item.slug !== artwork.slug && item.image)
    .slice(0, 3)
  const commercialStatus = getCommercialStatus(artwork)
  const commercialStatusLabel = getCommercialStatusLabel(artwork)
  const acquisitionHref =
    commercialStatus === 'available' ? `/shop/${artwork.slug}` : '/shop#prints'
  const artworkImage = artwork.image
  const detailImages =
    artwork.detailImages && artwork.detailImages.length > 0
      ? artwork.detailImages
      : artworkImage
        ? [artworkImage, artworkImage, artworkImage]
        : []

  return (
    <main className="artwork-story">
      <section className="artwork-story-hero">
        {artwork.image ? (
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        ) : (
          <div className="placeholder-surface">
            <span>{artwork.title}</span>
          </div>
        )}
      </section>

      <section className="artist-statement">
        <p className="eyebrow">Artist statement</p>
        <p>
          Line behaves as pressure, interval and trace. Colour enters as atmosphere,
          while the surface holds the tension between movement and stillness.
        </p>
      </section>

      <section className="artwork-story-description">
        <p className="eyebrow">{artwork.collection}</p>
        <h1>{artwork.title}</h1>
        <p>{artwork.description}</p>
        <div className="artwork-catalogue-meta">
          <span>{artwork.year}</span>
          <span>{artwork.medium}</span>
          <span>{artwork.dimensions}</span>
          <span>{commercialStatusLabel}</span>
        </div>
        <div className="artwork-action-row">
          {artwork.mockup ? (
            <Link href="#view-in-space" className="text-link">
              View in Space -&gt;
            </Link>
          ) : null}
          <Link href={acquisitionHref} className="text-link">
            Acquire -&gt;
          </Link>
        </div>
      </section>

      {printProduct ? (
        <section className="artwork-print-section" id="prints">
          <div>
            <p className="eyebrow">Fine Art Prints</p>
            <h2>Limited edition after {artwork.title}.</h2>
          </div>
          <div className="artwork-print-details">
            <div className="meta-grid">
              {printProduct.editionSize ? (
                <div>
                  <span>Edition</span>
                  <span>{`${printProduct.printsSold || 0} / ${printProduct.editionSize}`}</span>
                </div>
              ) : null}
              {typeof printProduct.remainingEdition === 'number' ? (
                <div>
                  <span>Remaining</span>
                  <span>{printProduct.remainingEdition}</span>
                </div>
              ) : null}
              {printProduct.paper ? (
                <div>
                  <span>Paper</span>
                  <span>{printProduct.paper}</span>
                </div>
              ) : null}
              <div>
                <span>Signed</span>
                <span>{printProduct.signed ? 'Yes' : 'No'}</span>
              </div>
              <div>
                <span>Certificate</span>
                <span>{printProduct.certificate ? 'Included' : 'Not included'}</span>
              </div>
              <div>
                <span>Price</span>
                <span>{`From ${printProduct.priceLabel}`}</span>
              </div>
            </div>
            {printProduct.sizes && printProduct.sizes.length > 0 ? (
              <div className="print-size-list">
                {printProduct.sizes.map((size) => (
                  <div className="print-size-row" key={`${size.label}-${size.price}`}>
                    <span>{size.label}</span>
                    <span>{`${size.width} x ${size.height} cm`}</span>
                    <span>{formatPrice(size.price)}</span>
                  </div>
                ))}
              </div>
            ) : null}
            {printProduct.soldOut ? (
              <p className="print-sold-out">Sold Out</p>
            ) : (
              <AddToCart product={printProduct} />
            )}
          </div>
        </section>
      ) : null}

      {artwork.mockup ? (
        <section className="artwork-story-space" id="view-in-space">
          <div className="artwork-story-mockup">
            <Image
              src={artwork.mockup}
              alt={`${artwork.title} installed in an interior`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="space-inquiry">
            <p>Interested in this work?</p>
            <div>
              <Link href={`/shop/${artwork.slug}`} className="text-link">
                Acquire Original -&gt;
              </Link>
              <Link href="/shop#prints" className="text-link">
                View Print Editions -&gt;
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {detailImages.length > 0 ? (
        <section className="artwork-surface-study" aria-label="Surface details">
          {detailImages.slice(0, 3).map((image, index) => (
            <figure className="surface-detail" key={`${image}-${index}`}>
              <Image
                src={image}
                alt={`${artwork.title} surface detail`}
                fill
                sizes="(max-width: 980px) 100vw, 33vw"
                className="object-cover"
                style={{ objectPosition: `${28 + index * 22}% ${28 + index * 22}%` }}
              />
            </figure>
          ))}
        </section>
      ) : null}

      {relatedArtworks.length > 0 ? (
        <section className="related-artworks">
          <div className="section-heading-row">
            <p className="eyebrow">Related artworks</p>
          </div>
          <div className="related-artwork-grid">
            {relatedArtworks.map((related) => (
              <Link href={`/obra/${related.slug}`} className="related-artwork" key={related.slug}>
                <figure>
                  <div className="related-artwork-image">
                    {related.image ? (
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 980px) 50vw, 33vw"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <figcaption>
                    <span>{related.title}</span>
                    <small>{related.year}</small>
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <nav className="artwork-pagination" aria-label="Artwork navigation">
        {previousArtwork ? (
          <Link href={`/obra/${previousArtwork.slug}`}>
            <span>Previous</span>
            {previousArtwork.title}
          </Link>
        ) : null}
        {nextArtwork ? (
          <Link href={`/obra/${nextArtwork.slug}`}>
            <span>Next</span>
            {nextArtwork.title}
          </Link>
        ) : null}
      </nav>
    </main>
  )
}

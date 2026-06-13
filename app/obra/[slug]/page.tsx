import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  getArtworks,
  getArtwork,
  getCommercialStatus,
  getCommercialStatusLabel,
} from '../../lib/artworks'

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

  if (!artwork) {
    notFound()
  }

  const commercialStatus = getCommercialStatus(artwork)
  const commercialStatusLabel = getCommercialStatusLabel(artwork)

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

      <section className="artwork-story-description">
        <Link href="/colecciones" className="text-link">
          Back to paintings
        </Link>
        <p className="eyebrow">{artwork.collection}</p>
        <h1>{artwork.title}</h1>
        <p>{artwork.description}</p>
      </section>

      {artwork.mockup ? (
        <section className="artwork-story-mockup">
          <Image
            src={artwork.mockup}
            alt={`${artwork.title} installed in an interior`}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </section>
      ) : null}

      <section className="artwork-story-meta">
        <div className="meta-grid">
          <div>
            <span>Year</span>
            <span>{artwork.year}</span>
          </div>
          <div>
            <span>Medium</span>
            <span>{artwork.medium}</span>
          </div>
          <div>
            <span>Size</span>
            <span>{artwork.dimensions}</span>
          </div>
          {artwork.palette ? (
            <div>
              <span>Palette</span>
              <span>{artwork.palette}</span>
            </div>
          ) : null}
        </div>
        <div className="artwork-commerce-note">
          <p>{commercialStatusLabel}</p>
          {commercialStatus === 'available' ? (
            <Link href={`/shop/${artwork.slug}`} className="text-link">
              View in Shop -&gt;
            </Link>
          ) : commercialStatus === 'sold' ? (
            <Link href="/shop#prints" className="text-link">
              View related prints -&gt;
            </Link>
          ) : null}
        </div>
      </section>
    </main>
  )
}

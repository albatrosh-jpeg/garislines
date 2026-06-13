import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  getAvailableOriginals,
  getShopArtwork,
  getCommercialStatusLabel,
} from '../../lib/artworks'

type ShopArtworkPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const originals = await getAvailableOriginals()

  return originals.map((artwork) => ({
    slug: artwork.slug,
  }))
}

export async function generateMetadata({ params }: ShopArtworkPageProps): Promise<Metadata> {
  const { slug } = await params
  const artwork = await getShopArtwork(slug)

  if (!artwork) {
    return {
      title: 'Shop',
    }
  }

  return {
    title: `${artwork.title} | Shop`,
    description: `Private inquiry for ${artwork.title} by Awal Radzi.`,
  }
}

export default async function ShopArtworkPage({ params }: ShopArtworkPageProps) {
  const { slug } = await params
  const artwork = await getShopArtwork(slug)

  if (!artwork) {
    notFound()
  }

  return (
    <main className="shop-product">
      <div className="shop-product-media">
        {artwork.image ? (
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            priority
            sizes="(max-width: 980px) 100vw, 56vw"
            className="object-contain"
          />
        ) : (
          <div className="placeholder-surface">
            <span>{artwork.title}</span>
          </div>
        )}
      </div>

      <aside className="shop-product-copy">
        <Link href="/shop" className="text-link">
          Back to Shop
        </Link>
        <div>
          <p className="eyebrow">Original Work</p>
          <h1>{artwork.title}</h1>
        </div>
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
          <div>
            <span>Status</span>
            <span>{getCommercialStatusLabel(artwork)}</span>
          </div>
        </div>
        <p className="artwork-description">
          Original painting available by private inquiry. Acquisition details, shipping,
          framing and documentation are shared directly by the studio.
        </p>
        <a
          href={`mailto:awalradzis23@gmail.com?subject=Inquiry about ${encodeURIComponent(
            artwork.title
          )}`}
          className="text-link"
        >
          Request details
        </a>
      </aside>
    </main>
  )
}

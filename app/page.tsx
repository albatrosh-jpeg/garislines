import Image from 'next/image'
import Link from 'next/link'
import { getPaintings } from './lib/artworks'

export default async function HomePage() {
  const paintings = await getPaintings()
  const heroArtwork = paintings.find((artwork) => artwork.featured && artwork.image) || paintings.find((artwork) => artwork.image)
  const heroImage = heroArtwork?.image || '/artworks/art12.jpeg'

  return (
    <main className="landing-entrance">
      <Image
        src={heroImage}
        alt={heroArtwork?.title || 'Awal Radzi artwork'}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <Link href="/colecciones" className="entrance-seal" aria-label="Enter paintings archive">
        <span>GARISLINES</span>
        <small>Enter</small>
      </Link>
    </main>
  )
}

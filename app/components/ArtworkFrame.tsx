import Image from 'next/image'
import Link from 'next/link'
import type { Artwork } from '../data/artworks'

type ArtworkFrameProps = {
  artwork: Artwork
  priority?: boolean
  tall?: boolean
}

export function ArtworkFrame({ artwork, priority = false, tall = false }: ArtworkFrameProps) {
  return (
    <Link href={`/obra/${artwork.slug}`} className="group block">
      <figure className="artwork-figure">
        <div className={`artwork-media ${tall ? 'aspect-[4/5]' : 'aspect-[5/6]'}`}>
          {artwork.image ? (
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.015]"
            />
          ) : (
            <div className="placeholder-surface">
              <span>{artwork.title}</span>
            </div>
          )}
        </div>
        <figcaption className="artwork-caption">
          <span>{artwork.title}</span>
          <span>{artwork.year}</span>
        </figcaption>
      </figure>
    </Link>
  )
}

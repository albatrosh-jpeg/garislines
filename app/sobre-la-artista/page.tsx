import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Awal Radzi, contemporary abstract painter.',
}

const milestones = [
  ['2024', 'Development of the current line-based abstract language.'],
  ['2025', 'Studio works expand into larger chromatic fields and interior contexts.'],
  ['2026', 'Selected paintings prepared for exhibitions, commissions and collector acquisition.'],
]

const studioImages = [
  '/artist-studio-01.webp',
  '/artist-studio-02.webp',
  '/artist-studio-03.webp',
  '/artist-studio-04.webp',
]

export default function AboutPage() {
  return (
    <main className="about-editorial">
      <section className="about-hero">
        <div className="about-hero-image">
          <Image
            src="/awal-radzi-studio.webp"
            alt="Awal Radzi working in the studio"
            fill
            priority
            sizes="(max-width: 980px) 100vw, 60vw"
            className="object-cover"
          />
        </div>
        <div className="about-hero-copy">
          <p className="eyebrow">Artist profile</p>
          <h1>AWAL RADZI</h1>
          <div className="about-lines">
            <p>Painting is not representation.</p>
            <p>It is accumulation.</p>
            <p>Movement.</p>
            <p>Memory.</p>
            <p>Silence.</p>
          </div>
          <a href="#artist-statement" className="text-link">
            Read the artist statement
          </a>
        </div>
      </section>

      <section className="about-artist-statement" id="artist-statement">
        <p className="eyebrow">Artist Statement</p>
        <div>
          <p>
            Awal Radzi works through accumulation: line over line, pressure over
            colour, gesture over memory. The paintings do not describe a single
            image. They gather movement until a surface begins to hold its own
            internal weather.
          </p>
          <p>
            His compositions move between organic growth and graphic tension.
            Black and white structures act as rhythm, interruption and pulse,
            while colour appears as atmosphere, heat or residue. Each work is
            built slowly, allowing forms to overlap, resist and settle into a
            visual language that feels both bodily and architectural.
          </p>
          <p>
            The result is a painting practice concerned with density, silence
            and sensation. Rather than offering representation, the work opens a
            space where memory, movement and surface become inseparable.
          </p>
        </div>
      </section>

      <section className="studio-strip" aria-label="Studio photography">
        {studioImages.map((image) => (
          <figure className="studio-strip-image" key={image}>
            <Image
              src={image}
              alt="Awal Radzi studio detail"
              fill
              sizes="(max-width: 980px) 100vw, 33vw"
              className="object-cover"
            />
          </figure>
        ))}
      </section>

      <section className="about-timeline">
        <p className="eyebrow">Timeline</p>
        <div>
          {milestones.map(([year, text]) => (
            <article key={year}>
              <span>{year}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-contact">
        <p className="eyebrow">Contact</p>
        <p>For exhibitions, acquisitions and commissions.</p>
        <Link href="/contacto" className="text-link">
          Contact the studio
        </Link>
      </section>
    </main>
  )
}

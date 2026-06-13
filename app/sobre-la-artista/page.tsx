import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Awal Radzi, contemporary abstract painter.',
}

export default function AboutPage() {
  return (
    <main className="about-editorial">
      <section className="about-portrait-section">
        <div className="about-portrait">
          <Image
            src="/awalradzi logo.jpeg"
            alt="Awal Radzi editorial portrait mark"
            fill
            sizes="(max-width: 980px) 100vw, 62vw"
            className="object-cover"
          />
        </div>
        <div className="about-statement">
          <p className="eyebrow">About</p>
          <h1>Awal Radzi</h1>
          <p>
            Contemporary abstract painting built through line, rhythm and quiet spatial
            tension.
          </p>
        </div>
      </section>
    </main>
  )
}

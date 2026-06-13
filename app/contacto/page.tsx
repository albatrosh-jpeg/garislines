import type { Metadata } from 'next'
import { PageIntro } from '../components/PageIntro'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Awal Radzi for original works, exhibitions and commissions.',
}

export default function ContactPage() {
  return (
    <main>
      <PageIntro eyebrow="Contact" title="Studio inquiries">
        <p>
          For original works, commissions, exhibitions, press and private inquiries.
        </p>
      </PageIntro>

      <section className="contact-section">
        <div className="body-copy">
          <p>
            Original paintings are handled through private inquiry. Availability,
            shipping, framing and documentation can be discussed directly with the studio.
          </p>
          <p>
            Site-responsive commissions for interiors, hospitality and commercial
            spaces are also available by request.
          </p>
        </div>
        <div className="contact-links">
          <a href="mailto:awalradzis23@gmail.com">Email</a>
          <a href="https://www.instagram.com/awal_radzi" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </section>
    </main>
  )
}

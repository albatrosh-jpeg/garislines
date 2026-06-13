import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: {
    default: 'Awal Radzi',
    template: '%s | Awal Radzi',
  },
  description:
    'Contemporary abstract paintings, exhibitions and commissions by Awal Radzi.',
  keywords: [
    'Awal Radzi',
    'visual artist',
    'contemporary art',
    'abstract painting',
    'artist portfolio',
  ],
  openGraph: {
    title: 'Awal Radzi',
    description:
      'Contemporary abstract paintings, exhibitions and commissions by Awal Radzi.',
    url: 'https://awalradzi.art',
    siteName: 'Awal Radzi',
    images: [
      {
        url: '/artworks/art3.jpeg',
        width: 1200,
        height: 1600,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#f6f3ed] text-stone-950`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
})

export const metadata = {
  title: 'Awal Radzi | Contemporary Abstract Artist',
  description:
    'Contemporary abstract paintings by Awal Radzi. Original artworks exploring movement, rhythm and organic structures.',

  keywords: [
    'Awal Radzi',
    'abstract artist',
    'contemporary art',
    'abstract painting',
    'modern art',
    'canvas art',
    'garislines',
  ],

  openGraph: {
    title: 'Awal Radzi',
    description:
      'Contemporary abstract paintings by Awal Radzi.',
    url: 'https://garislines.art',
    siteName: 'Awal Radzi',
    images: [
      {
        url: '/artworks/art3.jpeg',
        width: 1200,
        height: 1600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} bg-[#f7f6f2] text-black`}
      >
        {children}
      </body>
    </html>
  )
}
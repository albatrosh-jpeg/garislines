import './globals.css'
import type { Metadata } from 'next'
import { Inter, Bodoni_Moda } from 'next/font/google'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { CartProvider } from './components/CartProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/awal-radzi-logo.webp', type: 'image/webp' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
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
        className={`${inter.variable} ${display.variable}`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}

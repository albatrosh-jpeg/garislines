'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { CartButton } from './CartButton'

const navItems = [
  ['Paintings', '/colecciones'],
  ['Exhibitions', '/exposiciones'],
  ['About', '/sobre-la-artista'],
  ['Shop', '/shop'],
  ['Contact', '/contacto'],
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Awal Radzi home">
        <Image
          src="/awal-radzi-logo.webp"
          alt=""
          width={72}
          height={60}
          className="brand-mark"
          priority
        />
        <span>AWAL RADZI</span>
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => {
          const isPaintingRoute = href === '/colecciones' && pathname.startsWith('/obra/')
          const isActive = pathname === href || pathname.startsWith(`${href}/`) || isPaintingRoute

          return (
            <Link key={href} href={href} aria-current={isActive ? 'page' : undefined}>
              {label}
            </Link>
          )
        })}
        <CartButton />
      </nav>
    </header>
  )
}

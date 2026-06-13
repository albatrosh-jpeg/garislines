'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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
      </nav>
    </header>
  )
}

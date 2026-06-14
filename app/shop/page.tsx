import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { AddToCart } from '../components/AddToCart'
import { getOriginalProducts, getPrintProducts } from '../lib/shop'
import type { ShopProduct } from '../lib/shop'

export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Original paintings and fine art prints by Awal Radzi.',
}

export default async function ShopPage() {
  const [originals, prints] = await Promise.all([getOriginalProducts(), getPrintProducts()])

  return (
    <main className="shop-landing">
      <section className="shop-intro">
        <p className="eyebrow">Shop</p>
        <h1>Original works and fine art prints.</h1>
        <p>
          A collector-focused shop for paintings and selected print editions.
        </p>
      </section>

      <section className="shop-section prints-section" id="prints">
        <div className="shop-section-heading">
          <p className="eyebrow">Fine Art Prints</p>
          <h2>Limited editions</h2>
        </div>
        <div className="shop-grid">
          {prints.map((product) => (
            <ShopCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="shop-section" id="original-works">
        <div className="shop-section-heading">
          <p className="eyebrow">Original Works</p>
          <h2>Paintings</h2>
        </div>
        <div className="shop-grid">
          {originals.map((product) => (
            <ShopCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  )
}

function ShopCard({ product }: { product: ShopProduct }) {
  const title = product.title
  const categoryLabel = product.category === 'print' ? 'Fine Art Print' : 'Original Work'
  const editionLabel =
    product.category === 'print' && product.editionSize
      ? `Edition of ${product.editionSize}`
      : product.availability
  const sizeLabel =
    product.category === 'print' && product.sizes && product.sizes.length > 0
      ? product.sizes.map((size) => size.label).join(' / ')
      : product.size
  const displayImage = product.image

  return (
    <article className="shop-card">
      <Link href={`/shop/${product.slug}`} className="shop-card-image">
        {displayImage ? (
          <Image
            src={displayImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        ) : null}
      </Link>
      <div className="shop-card-meta">
        <h3>{title}</h3>
        <p>{categoryLabel}</p>
        <p>{editionLabel}</p>
        <p>{sizeLabel}</p>
        <span>{product.category === 'print' ? `From ${product.priceLabel}` : product.priceLabel}</span>
      </div>
      {product.soldOut ? (
        <p className="shop-card-status">Sold Out</p>
      ) : (
        <AddToCart product={product} />
      )}
    </article>
  )
}

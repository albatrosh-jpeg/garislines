import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { AddToCart } from '../../components/AddToCart'
import { formatPrice } from '../../lib/money'
import { getShopProduct, getShopProducts } from '../../lib/shop'

type ShopProductPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const products = await getShopProducts()

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ShopProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getShopProduct(slug)

  if (!product) {
    return {
      title: 'Shop',
    }
  }

  return {
    title: `${product.title} | Shop`,
    description: product.description,
  }
}

export default async function ShopProductPage({ params }: ShopProductPageProps) {
  const { slug } = await params
  const product = await getShopProduct(slug)

  if (!product) {
    notFound()
  }

  const displayImage =
    product.category === 'print' ? product.mockupImage || product.image : product.image

  return (
    <main className="shop-product">
      <div className="shop-product-media">
        {displayImage ? (
          <Image
            src={displayImage}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 980px) 100vw, 56vw"
            className="object-contain"
          />
        ) : (
          <div className="placeholder-surface">
            <span>{product.title}</span>
          </div>
        )}
      </div>

      <aside className="shop-product-copy">
        <Link href="/shop" className="text-link">
          Back to Shop
        </Link>
        <div>
          <p className="eyebrow">{product.category === 'print' ? 'Fine Art Print' : 'Original Work'}</p>
          <h1>{product.title}</h1>
        </div>
        <p className="shop-product-price">{product.priceLabel}</p>
        <div className="meta-grid">
          <div>
            <span>Status</span>
            <span>{product.availability}</span>
          </div>
          <div>
            <span>Year</span>
            <span>{product.year}</span>
          </div>
          <div>
            <span>Medium</span>
            <span>{product.medium}</span>
          </div>
          <div>
            <span>Size</span>
            <span>{product.size}</span>
          </div>
          {product.category === 'print' && product.editionSize ? (
            <div>
              <span>Edition</span>
              <span>{`${product.printsSold || 0} / ${product.editionSize}`}</span>
            </div>
          ) : null}
          {product.category === 'print' && typeof product.remainingEdition === 'number' ? (
            <div>
              <span>Remaining</span>
              <span>{product.remainingEdition}</span>
            </div>
          ) : null}
          {product.category === 'print' && product.paper ? (
            <div>
              <span>Paper</span>
              <span>{product.paper}</span>
            </div>
          ) : null}
          {product.category === 'print' ? (
            <>
              <div>
                <span>Signed</span>
                <span>{product.signed ? 'Yes' : 'No'}</span>
              </div>
              <div>
                <span>Certificate</span>
                <span>{product.certificate ? 'Included' : 'Not included'}</span>
              </div>
            </>
          ) : null}
        </div>
        {product.category === 'print' && product.sizes && product.sizes.length > 0 ? (
          <div className="print-size-list">
            {product.sizes.map((size) => (
              <div className="print-size-row" key={`${size.label}-${size.price}`}>
                <span>{size.label}</span>
                <span>{`${size.width} x ${size.height} cm`}</span>
                <span>{formatPrice(size.price)}</span>
              </div>
            ))}
          </div>
        ) : null}
        <p className="artwork-description">{product.description}</p>
        {product.soldOut ? (
          <p className="print-sold-out">Sold Out</p>
        ) : (
          <AddToCart product={product} />
        )}
      </aside>
    </main>
  )
}

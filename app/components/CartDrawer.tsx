'use client'

import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '../lib/money'
import { useCart } from './CartProvider'

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    setQuantity,
    totalPrice,
    clearCart,
  } = useCart()

  const checkoutBody = encodeURIComponent(
    [
      'Hello, I would like to purchase the following items:',
      '',
      ...items.map(
        (item) =>
          `${item.quantity} x ${item.title} (${item.category}) - ${formatPrice(
            item.price * item.quantity
          )}`
      ),
      '',
      `Estimated total: ${formatPrice(totalPrice)}`,
    ].join('\n')
  )

  return (
    <div className={`cart-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <button className="cart-backdrop" type="button" onClick={closeCart} aria-label="Close cart" />
      <aside className="cart-panel" aria-label="Shopping cart">
        <div className="cart-header">
          <p className="eyebrow">Cart</p>
          <button type="button" onClick={closeCart}>
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty.</p>
            <Link href="/shop" onClick={closeCart}>
              Go to Shop
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => {
                const displayImage =
                  item.category === 'print' ? item.mockupImage || item.image : item.image

                return (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-image">
                      {displayImage ? (
                        <Image src={displayImage} alt={item.title} fill sizes="96px" className="object-cover" />
                      ) : null}
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <span>{item.priceLabel}</span>
                      <div className="cart-quantity">
                        <button type="button" onClick={() => setQuantity(item.id, item.quantity - 1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => setQuantity(item.id, item.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="cart-footer">
              <div>
                <span>Total</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <a href={`mailto:awalradzis23@gmail.com?subject=Artwork order&body=${checkoutBody}`}>
                Checkout
              </a>
              <button type="button" onClick={clearCart}>
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

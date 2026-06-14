'use client'

import type { ShopProduct } from '../lib/shop'
import { useCart } from './CartProvider'

export function AddToCart({
  product,
  disabled = false,
  label = 'Acquire',
}: {
  product: ShopProduct
  disabled?: boolean
  label?: string
}) {
  const { addItem } = useCart()

  return (
    <button
      className="cart-action"
      type="button"
      disabled={disabled}
      onClick={() => addItem(product)}
    >
      {label}
    </button>
  )
}

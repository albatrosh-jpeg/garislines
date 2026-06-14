'use client'

import { useCart } from './CartProvider'

export function CartButton() {
  const { openCart, totalQuantity } = useCart()

  return (
    <button className="nav-cart" type="button" onClick={openCart}>
      Cart
      {totalQuantity > 0 ? <span>{totalQuantity}</span> : null}
    </button>
  )
}

'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { ShopProduct } from '../lib/shop'

export type CartItem = {
  id: string
  slug: string
  title: string
  category: ShopProduct['category']
  price: number
  priceLabel: string
  image?: string
  mockupImage?: string
  quantity: number
}

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: ShopProduct) => void
  removeItem: (id: string) => void
  setQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  totalQuantity: number
  totalPrice: number
}

const CartContext = createContext<CartContextValue | undefined>(undefined)
const storageKey = 'awal-radzi-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem(storageKey)
    if (stored) {
      setItems(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(items))
  }, [items])

  const value = useMemo<CartContextValue>(() => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return {
      items,
      isOpen,
      addItem: (product) => {
        setItems((current) => {
          const existing = current.find((item) => item.id === product.id)

          if (existing) {
            return current.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          }

          return [
            ...current,
            {
              id: product.id,
              slug: product.slug,
              title: product.title,
              category: product.category,
              price: product.price,
              priceLabel: product.priceLabel,
              image: product.image,
              mockupImage: product.mockupImage,
              quantity: 1,
            },
          ]
        })
        setIsOpen(true)
      },
      removeItem: (id) => {
        setItems((current) => current.filter((item) => item.id !== id))
      },
      setQuantity: (id, quantity) => {
        setItems((current) =>
          current
            .map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
            .filter((item) => item.quantity > 0)
        )
      },
      clearCart: () => setItems([]),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      totalQuantity,
      totalPrice,
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}

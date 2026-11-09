'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import type { Product } from '@/lib/products'

type CartItem = Product & { quantity: number }
type CartContextValue = { items: CartItem[]; itemCount: number; total: number; addItem: (product: Product) => void; removeItem: (id: string) => void; updateQuantity: (id: string, quantity: number) => void }
const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const value = useMemo(() => ({ items, itemCount: items.reduce((sum, item) => sum + item.quantity, 0), total: items.reduce((sum, item) => sum + item.price * item.quantity, 0), addItem: (product: Product) => setItems((current) => { const found = current.find((item) => item.id === product.id); return found ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }] }), removeItem: (id: string) => setItems((current) => current.filter((item) => item.id !== id)), updateQuantity: (id: string, quantity: number) => setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item)) }), [items])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart debe usarse dentro de CartProvider'); return context }

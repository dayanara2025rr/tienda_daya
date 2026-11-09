'use client'

import { useState } from 'react'
import { Check, ShoppingBag } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useCart } from './cart-context'

export function AddToCartButton({ product }: { product: Product }) { const { addItem } = useCart(); const [added, setAdded] = useState(false); return <button onClick={() => { addItem(product); setAdded(true); setTimeout(() => setAdded(false), 1800) }} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">{added ? <><Check /> Agregado al carrito</> : <><ShoppingBag /> Agregar al carrito</>}</button> }

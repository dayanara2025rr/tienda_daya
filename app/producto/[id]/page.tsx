import Link from 'next/link'
import { ArrowLeft, Check, ShoppingBag } from 'lucide-react'
import { notFound } from 'next/navigation'
import { Header } from '@/components/storefront'
import { ProductVisual } from '@/components/product-card'
import { AddToCartButton } from '@/components/add-to-cart'
import { getProduct, products } from '@/lib/products'

export function generateStaticParams() { return products.map(({ id }) => ({ id })) }

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(id)
  if (!product) notFound()
  return <><Header /><main className="mx-auto max-w-7xl px-6 py-10 lg:px-8"><Link href="/catalogo" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft /> Volver al catálogo</Link><div className="grid gap-12 lg:grid-cols-2 lg:items-start"><ProductVisual product={product} large /><div className="pt-2"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{product.brand}</p><h1 className="mt-3 text-5xl font-semibold tracking-[-0.05em]">{product.model}</h1><p className="mt-5 text-3xl font-semibold">${product.price.toLocaleString('en-US')} <span className="text-base font-normal text-muted-foreground">USD</span></p><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{product.description}</p><div className="my-8 grid grid-cols-3 gap-3 border-y py-6"><div><p className="text-xs uppercase tracking-wider text-muted-foreground">Procesador</p><p className="mt-2 text-sm font-medium">{product.cpu}</p></div><div><p className="text-xs uppercase tracking-wider text-muted-foreground">Memoria</p><p className="mt-2 text-sm font-medium">{product.ram}</p></div><div><p className="text-xs uppercase tracking-wider text-muted-foreground">Disco</p><p className="mt-2 text-sm font-medium">{product.storage}</p></div></div><AddToCartButton product={product} /><div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Check className="text-emerald-600" /> Envío gratis y garantía incluida</div></div></div></main></>
}

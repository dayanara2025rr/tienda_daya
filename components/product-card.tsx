import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Product } from '@/lib/products'

export function ProductVisual({ product, large = false }: { product: Product; large?: boolean }) {
  return <div className={`relative flex ${large ? 'min-h-[390px]' : 'aspect-[4/3]'} items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${product.accent}`}><div className="absolute right-5 top-5 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700">{product.category}</div><div className="relative w-[70%] max-w-[300px] -rotate-3 rounded-lg bg-slate-900 p-2 shadow-2xl"><div className="flex aspect-[16/10] items-center justify-center rounded bg-gradient-to-br from-slate-700 to-slate-950 text-white/70"><span className="text-xs tracking-widest">NÚCLEO</span></div><div className="mx-auto h-2 w-1/2 rounded-b bg-slate-700" /></div></div>
}

export function ProductCard({ product }: { product: Product }) {
  return <Link href={`/producto/${product.id}`} className="group block"><ProductVisual product={product} /><div className="flex items-start justify-between gap-4 pt-4"><div><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{product.brand}</p><h3 className="mt-1 font-semibold">{product.model}</h3><p className="mt-1 text-sm text-muted-foreground">{product.ram} · {product.storage}</p></div><span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><ArrowUpRight /></span></div><p className="mt-3 font-semibold">${product.price.toLocaleString('en-US')} USD</p></Link>
}

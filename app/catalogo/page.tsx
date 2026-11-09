'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Header, PageHeader } from '@/components/storefront'
import { ProductCard } from '@/components/product-card'
import { products } from '@/lib/products'
import { bm25Search } from '@/lib/search'

export default function CatalogPage() {
  const [query, setQuery] = useState('')
  const results = bm25Search(products, query)
  return <><Header /><main><PageHeader eyebrow="Catálogo completo" title="Encuentra tu próximo equipo." description="Explora laptops para cada ritmo, presupuesto y manera de trabajar." /><div className="mx-auto max-w-7xl px-6 pb-20 lg:px-8"><div className="relative mb-10 max-w-xl"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" /><label htmlFor="catalog-search" className="sr-only">Buscar laptops</label><input id="catalog-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca por marca, modelo, uso o especificación..." className="h-13 w-full rounded-full border border-border bg-muted/40 pl-12 pr-5 outline-none transition focus:border-foreground" /></div><div className="mb-6 flex items-center justify-between"><p className="text-sm text-muted-foreground">{results.length} {results.length === 1 ? 'resultado' : 'resultados'}</p>{query && <button onClick={() => setQuery('')} className="text-sm font-medium underline underline-offset-4">Limpiar búsqueda</button>}</div>{results.length > 0 ? <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{results.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-3xl border border-dashed p-12 text-center"><p className="font-semibold">No encontramos esa laptop</p><p className="mt-2 text-sm text-muted-foreground">Prueba con otra marca, categoría o especificación.</p></div>}</div></main></>
}

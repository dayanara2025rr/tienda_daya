'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Laptop, ShoppingBag } from 'lucide-react'
import { useCart } from '@/components/cart-context'

export function Header() {
  const pathname = usePathname()
  const { itemCount } = useCart()
  return <header className="border-b border-border/70 bg-background/90 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
      <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight"><span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Laptop /></span><span className="text-lg">Núcleo<span className="text-muted-foreground">.tech</span></span></Link>
      <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Navegación principal">
        <Link className={pathname === '/' ? 'font-semibold' : 'text-muted-foreground hover:text-foreground'} href="/">Inicio</Link>
        <Link className={pathname === '/catalogo' ? 'font-semibold' : 'text-muted-foreground hover:text-foreground'} href="/catalogo">Catálogo</Link>
        <Link className="text-muted-foreground hover:text-foreground" href="/#beneficios">Por qué Núcleo</Link>
      </nav>
      <Link href="/carrito" className="relative flex items-center gap-2 text-sm font-medium"><ShoppingBag /> <span className="hidden sm:inline">Carrito</span>{itemCount > 0 && <span className="absolute -right-3 -top-3 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] text-primary-foreground">{itemCount}</span>}</Link>
    </div>
  </header>
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="mx-auto max-w-7xl px-6 pb-10 pt-14 lg:px-8"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p><h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">{title}</h1>{description && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{description}</p>}</div>
}

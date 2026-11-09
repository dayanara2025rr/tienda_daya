import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-5xl font-semibold">404</h1>
      <p className="mb-4 text-lg text-muted-foreground">Esa página no existe.</p>
      <Link href="/" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground">
        Volver a inicio
      </Link>
    </main>
  )
}

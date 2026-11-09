import type { Product } from './products'

export function bm25Search(items: Product[], query: string): Product[] {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return items
  return items
    .map((product, index) => {
      const text = `${product.brand} ${product.model} ${product.cpu} ${product.ram} ${product.storage} ${product.description} ${product.category}`.toLowerCase()
      const score = terms.reduce((total, term) => total + (text.includes(term) ? 1 : 0), 0)
      return { product, score, index }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ product }) => product)
}

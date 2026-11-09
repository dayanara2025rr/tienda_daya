import { describe, expect, it } from 'vitest'
import { products } from './products'
import { bm25Search } from './search'

describe('bm25Search', () => {
  it('returns every product for an empty query', () => {
    expect(bm25Search(products, '   ')).toEqual(products)
  })

  it('matches across model and hardware fields', () => {
    expect(bm25Search(products, 'Forge 32 GB')[0]).toBe(products[1])
  })

  it('ranks products with more matching terms first', () => {
    const results = bm25Search(products, 'gamer 32 GB')
    expect(results[0]?.id).toBe('forge-x')
    expect(results).toContain(products[8])
  })

  it('returns an empty list when nothing matches', () => {
    expect(bm25Search(products, 'cerámica')).toEqual([])
  })
})

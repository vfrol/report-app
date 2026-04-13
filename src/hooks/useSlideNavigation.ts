import { useState, useCallback, useEffect } from 'react'
import { slides } from '../data/report'

const TOTAL = slides.length

function slugToIndex(slug: string): number {
  const idx = slides.findIndex((s) => s.slug === slug)
  return idx >= 0 ? idx : 0
}

function readHash(): number {
  const hash = window.location.hash.replace('#', '')
  if (hash.startsWith('slide-')) {
    const n = parseInt(hash.replace('slide-', ''), 10)
    if (!isNaN(n) && n >= 0 && n < TOTAL) return n
  }
  return slugToIndex(hash) || 0
}

export function useSlideNavigation() {
  const [current, setCurrent] = useState<number>(readHash)

  const go = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(TOTAL - 1, index))
    setCurrent(clamped)
    window.location.hash = `slide-${clamped}`
  }, [])

  const next = useCallback(() => go(current + 1), [current, go])
  const prev = useCallback(() => go(current - 1), [current, go])

  useEffect(() => {
    const handler = () => setCurrent(readHash())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  return { current, total: TOTAL, go, next, prev }
}

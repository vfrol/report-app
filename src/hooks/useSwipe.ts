import { useEffect, useRef } from 'react'

interface UseSwipeOptions {
  onNext: () => void
  onPrev: () => void
  /** Minimum horizontal distance (px) to register a swipe. Default: 50 */
  threshold?: number
  /** Maximum vertical drift (px) before the gesture is ignored. Default: 80 */
  maxVertical?: number
}

/**
 * Attaches touch-swipe listeners to the given element ref.
 * Swipe-left → next slide, swipe-right → previous slide.
 */
export function useSwipe<T extends HTMLElement>(
  ref: React.RefObject<T>,
  { onNext, onPrev, threshold = 50, maxVertical = 80 }: UseSwipeOptions,
) {
  const startX = useRef<number>(0)
  const startY = useRef<number>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onTouchStart = (e: TouchEvent) => {
      startX.current = e.touches[0].clientX
      startY.current = e.touches[0].clientY
    }

    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX.current
      const dy = e.changedTouches[0].clientY - startY.current

      if (Math.abs(dy) > maxVertical) return   // mostly vertical — ignore
      if (Math.abs(dx) < threshold) return      // too short — ignore

      if (dx < 0) onNext()
      else onPrev()
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [ref, onNext, onPrev, threshold, maxVertical])
}

import { useEffect } from 'react'

interface UseKeyboardOptions {
  onNext: () => void
  onPrev: () => void
  onToggleSidebar?: () => void
}

export function useKeyboard({ onNext, onPrev, onToggleSidebar }: UseKeyboardOptions) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          onNext()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          onPrev()
          break
        case 'Escape':
          onToggleSidebar?.()
          break
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onNext, onPrev, onToggleSidebar])
}

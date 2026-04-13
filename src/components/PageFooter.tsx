import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProgressBar } from './ProgressBar'

interface PageFooterProps {
  current: number
  total: number
  onNext: () => void
  onPrev: () => void
}

export function PageFooter({ current, total, onNext, onPrev }: PageFooterProps) {
  return (
    <footer className="flex-shrink-0 bg-surface-page border-t border-divider z-20">
      <ProgressBar current={current} total={total} />
      <div className="flex items-center justify-between px-4 h-10">
        {/* Nav arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={onPrev}
            disabled={current === 0}
            className="w-8 h-8 rounded-full bg-primary text-ink-white flex items-center justify-center
              hover:bg-primary-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={onNext}
            disabled={current === total - 1}
            className="w-8 h-8 rounded-full bg-primary text-ink-white flex items-center justify-center
              hover:bg-primary-dark transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Следующий слайд"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Keyboard hint — desktop only */}
        <span className="hidden md:block text-caption text-ink-muted">← →</span>

        {/* Page number */}
        <span className="text-nav text-ink-caption font-medium">
          {current} / {total - 1}
        </span>
      </div>
    </footer>
  )
}

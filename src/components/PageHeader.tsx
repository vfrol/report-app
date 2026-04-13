import { Menu, Home } from 'lucide-react'
import { KmfLogo } from './KmfLogo'
import { slides } from '../data/report'

interface PageHeaderProps {
  current: number
  onToggleSidebar: () => void
}

export function PageHeader({ current, onToggleSidebar }: PageHeaderProps) {
  const slide = slides[current]

  return (
    <header className="flex-shrink-0 bg-surface-page border-b border-divider px-4 h-12 flex items-center justify-between gap-4 z-20">
      {/* Left: logo + menu */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-1.5 rounded-lg hover:bg-surface-block transition-colors text-ink-caption hover:text-ink-body"
          aria-label="Открыть меню"
        >
          <Menu size={18} />
        </button>
        <KmfLogo size="md" />
      </div>

      {/* Right: nav pills */}
      <nav className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={() => { window.location.hash = 'slide-0' }}
          className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-pill bg-surface-block text-nav text-ink-caption hover:bg-surface-subtle transition-colors"
        >
          <Home size={12} />
          <span>содержание</span>
        </button>

        <div className="hidden md:flex items-center rounded-pill bg-surface-block overflow-hidden">
          <span className="px-2 py-1 text-nav text-ink-caption">интегрированный</span>
          <span className="px-2 py-1 text-nav bg-primary text-ink-white font-bold rounded-pill">годовой отчет</span>
          <span className="px-2 py-1 text-nav text-ink-caption">2025</span>
        </div>

        <a
          href="https://kmf.kz"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block px-3 py-1 rounded-pill bg-surface-block text-nav text-ink-caption hover:bg-surface-subtle transition-colors"
        >
          kmf.kz
        </a>

        {slide && (
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-pill bg-surface-block text-nav text-ink-body font-medium max-w-[220px] truncate">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="#E8202A">
              <path d="M6 10.5C6 10.5 1.5 7.5 1.5 4.5C1.5 3 2.7 1.5 4.2 1.5C5.1 1.5 5.7 1.8 6 2.1C6.3 1.8 6.9 1.5 7.8 1.5C9.3 1.5 10.5 3 10.5 4.5C10.5 7.5 6 10.5 6 10.5Z" />
            </svg>
            <span className="truncate">{slide.section}</span>
          </div>
        )}
      </nav>
    </header>
  )
}

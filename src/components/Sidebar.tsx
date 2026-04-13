import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { slides } from '../data/report'
import { KmfLogo } from './KmfLogo'

interface SidebarProps {
  open: boolean
  current: number
  onClose: () => void
  onGo: (index: number) => void
}

// Group slides by section
const sections = slides.reduce<{ section: string; ids: number[] }[]>((acc, slide) => {
  const existing = acc.find((s) => s.section === slide.section)
  if (existing) {
    existing.ids.push(slide.id)
  } else {
    acc.push({ section: slide.section, ids: [slide.id] })
  }
  return acc
}, [])

export function Sidebar({ open, current, onClose, onGo }: SidebarProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-ink-heading/30 z-30"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', stiffness: 400, damping: 40 }}
            className="absolute left-0 top-0 bottom-0 w-64 bg-surface-page shadow-card-photo z-40 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-divider">
              <KmfLogo size="md" />
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-surface-block transition-colors text-ink-caption"
                aria-label="Закрыть"
              >
                <X size={16} />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto py-3 px-3">
              <p className="text-caption text-ink-muted font-semibold uppercase tracking-wider px-2 mb-2">
                Содержание
              </p>
              {sections.map((section) => (
                <div key={section.section} className="mb-3">
                  <p className="text-caption text-ink-caption font-medium px-2 mb-1">{section.section}</p>
                  {section.ids.map((id) => {
                    const slide = slides[id]
                    const isActive = id === current
                    return (
                      <button
                        key={id}
                        onClick={() => { onGo(id); onClose() }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-body-sm transition-colors flex items-center gap-2
                          ${isActive
                            ? 'bg-primary text-ink-white font-semibold'
                            : 'text-ink-body hover:bg-surface-block'
                          }`}
                      >
                        <span className="text-caption opacity-60 w-4 flex-shrink-0">{id}</span>
                        <span className="truncate">{slide.title}</span>
                      </button>
                    )
                  })}
                </div>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-divider">
              <p className="text-caption text-ink-muted">KMF · Годовой отчёт 2025</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

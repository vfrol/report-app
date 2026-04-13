import { useState, useRef } from 'react'
import type { ReactNode } from 'react'
import { PageHeader } from './PageHeader'
import { PageFooter } from './PageFooter'
import { Sidebar } from './Sidebar'
import { SlideTransition } from './SlideTransition'
import { useSwipe } from '../hooks/useSwipe'

interface LayoutProps {
  current: number
  total: number
  onNext: () => void
  onPrev: () => void
  onGo: (index: number) => void
  children: ReactNode
  slideKey: number
}

export function Layout({ current, total, onNext, onPrev, onGo, children, slideKey }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  useSwipe(mainRef, { onNext, onPrev })

  return (
    <div className="w-screen h-screen overflow-hidden bg-surface-page flex flex-col font-sans">
      <PageHeader current={current} onToggleSidebar={() => setSidebarOpen((o) => !o)} />

      <main ref={mainRef} className="flex-1 relative overflow-hidden">
        <Sidebar
          open={sidebarOpen}
          current={current}
          onClose={() => setSidebarOpen(false)}
          onGo={onGo}
        />
        <SlideTransition slideKey={slideKey}>
          {children}
        </SlideTransition>
      </main>

      <PageFooter current={current} total={total} onNext={onNext} onPrev={onPrev} />
    </div>
  )
}

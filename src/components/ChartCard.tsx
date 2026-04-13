import type { ReactNode } from 'react'
import { IconCircle } from './IconCircle'

interface ChartCardProps {
  title: string
  subtitle?: string
  icon?: ReactNode
  children: ReactNode
  className?: string
  footer?: ReactNode
}

export function ChartCard({ title, subtitle, icon, children, className = '', footer }: ChartCardProps) {
  return (
    <div className={`bg-surface-card rounded-card p-3 flex flex-col gap-2 shadow-kpi ${className}`}>
      <div className="flex items-start gap-2">
        {icon && (
          <IconCircle size={32} className="flex-shrink-0 mt-0.5">
            {icon}
          </IconCircle>
        )}
        <div className="min-w-0">
          <p className="text-caption font-semibold text-ink-body leading-tight">{title}</p>
          {subtitle && <p className="text-caption text-ink-caption leading-tight mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="flex-1 min-h-0">{children}</div>
      {footer && <div className="mt-1">{footer}</div>}
    </div>
  )
}

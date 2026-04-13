import { useCountUp } from '../hooks/useCountUp'

interface KPICardProps {
  label: string
  value: number
  unit?: string
  suffix?: string
  trend?: 'up' | 'down' | 'neutral'
  active?: boolean
  decimals?: number
}

export function KPICard({ label, value, unit, suffix, trend = 'up', active = true, decimals = 1 }: KPICardProps) {
  const animated = useCountUp(value, 800, active)

  const formatted = animated.toFixed(decimals).replace('.', ',')

  return (
    <div className="flex flex-col gap-0.5">
      <div className="text-caption text-ink-caption leading-tight">{label}</div>
      <div className="flex items-baseline gap-1.5">
        {unit && <span className="text-body-sm text-ink-caption">{unit}</span>}
        <span className="font-extrabold text-kpi text-ink-heading leading-none">{formatted}</span>
        {suffix && <span className="text-body-sm text-ink-caption">{suffix}</span>}
        {trend === 'up' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary flex-shrink-0">
            <path d="M7 11V3M7 3L3 7M7 3L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
        {trend === 'down' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary flex-shrink-0">
            <path d="M7 3V11M7 11L3 7M7 11L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  )
}

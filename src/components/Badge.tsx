import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'green' | 'dark' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const variantClasses = {
  primary: 'bg-primary text-ink-white',
  green: 'bg-green-esg text-ink-white',
  dark: 'bg-surface-dark text-ink-white',
  outline: 'bg-surface-block text-ink-body border border-border-light',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-[11px]',
  md: 'px-3 py-1 text-badge',
  lg: 'px-4 py-1.5 text-badge',
}

export function Badge({ children, variant = 'primary', size = 'md', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-bold rounded-badge ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  )
}

// Inline pill used to highlight a word inside a large heading
interface HeadingBadgeProps {
  children: ReactNode
  variant?: 'primary' | 'green'
}

export function HeadingBadge({ children, variant = 'primary' }: HeadingBadgeProps) {
  const bg = variant === 'green' ? 'bg-green-esg' : 'bg-primary'
  return (
    <span className={`${bg} text-ink-white rounded-badge px-3 py-1 font-black`} style={{ display: 'inline-block' }}>
      {children}
    </span>
  )
}

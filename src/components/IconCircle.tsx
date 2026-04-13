import type { ReactNode } from 'react'

interface IconCircleProps {
  children: ReactNode
  size?: number
  bgColor?: string
  iconColor?: string
  className?: string
}

export function IconCircle({
  children,
  size = 48,
  bgColor = '#E8202A',
  iconColor = '#FFFFFF',
  className = '',
}: IconCircleProps) {
  return (
    <div
      className={`flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: bgColor,
        color: iconColor,
      }}
    >
      {children}
    </div>
  )
}

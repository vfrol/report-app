interface DiamondProps {
  size?: number
  color?: string
  opacity?: number
  className?: string
  rounded?: boolean
}

export function Diamond({ size = 80, color = '#E8202A', opacity = 1, className = '', rounded = true }: DiamondProps) {
  return (
    <div
      className={`absolute pointer-events-none select-none ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        transform: 'rotate(45deg)',
        borderRadius: rounded ? Math.max(6, size * 0.08) : 0,
        flexShrink: 0,
      }}
    />
  )
}

// Heart-diamond (inverted pointing down, like ♥ made from rotated square)
export function HeartDiamond({ size = 48, color = '#E8202A', className = '' }: DiamondProps) {
  return (
    <div className={`absolute pointer-events-none ${className}`} style={{ width: size, height: size }}>
      <div
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          transform: 'rotate(45deg)',
          borderRadius: Math.max(4, size * 0.15),
        }}
      />
    </div>
  )
}

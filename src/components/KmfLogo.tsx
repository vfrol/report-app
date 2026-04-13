interface KmfLogoProps {
  size?: 'sm' | 'md' | 'lg'
  dark?: boolean
}

export function KmfLogo({ size = 'md', dark = false }: KmfLogoProps) {
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.4 : 1
  const textSize = size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-xl' : 'text-base'
  const textColor = dark ? 'text-white' : 'text-ink-heading'

  // KMF diamond cluster: 4 diamonds in 2×2 grid (red×3 + gold×1)
  const d = Math.round(10 * scale)  // diamond size
  const gap = Math.round(2 * scale)  // gap between diamonds

  const total = d * 2 + gap

  return (
    <div className={`flex items-center gap-1.5`}>
      <svg
        width={total}
        height={total}
        viewBox={`0 0 ${total} ${total}`}
        fill="none"
      >
        {/* Top-left: red */}
        <rect
          x={0}
          y={0}
          width={d}
          height={d}
          fill="#E8202A"
          transform={`rotate(45 ${d / 2} ${d / 2})`}
          rx={Math.max(1, d * 0.07)}
        />
        {/* Top-right: red */}
        <rect
          x={d + gap}
          y={0}
          width={d}
          height={d}
          fill="#E8202A"
          transform={`rotate(45 ${d + gap + d / 2} ${d / 2})`}
          rx={Math.max(1, d * 0.07)}
        />
        {/* Bottom-left: gold */}
        <rect
          x={0}
          y={d + gap}
          width={d}
          height={d}
          fill="#F5C542"
          transform={`rotate(45 ${d / 2} ${d + gap + d / 2})`}
          rx={Math.max(1, d * 0.07)}
        />
        {/* Bottom-right: red */}
        <rect
          x={d + gap}
          y={d + gap}
          width={d}
          height={d}
          fill="#E8202A"
          transform={`rotate(45 ${d + gap + d / 2} ${d + gap + d / 2})`}
          rx={Math.max(1, d * 0.07)}
        />
      </svg>

      <span className={`font-black ${textSize} ${textColor} tracking-tight`}>
        KMF
      </span>
    </div>
  )
}

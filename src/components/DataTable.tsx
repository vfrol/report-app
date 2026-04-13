import type { ReactNode } from 'react'

interface Column<T> {
  key: keyof T | string
  header: ReactNode
  render?: (row: T, index: number) => ReactNode
  align?: 'left' | 'center' | 'right'
  highlighted?: boolean
}

interface DataTableProps<T> {
  columns: Column<T>[]
  rows: T[]
  totalRow?: ReactNode
  className?: string
}

export function DataTable<T extends object>({
  columns,
  rows,
  totalRow,
  className = '',
}: DataTableProps<T>) {
  return (
    <div className={`overflow-hidden rounded-card border border-border-light ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-surface-block">
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className={`px-3 py-2 text-body-sm font-semibold text-ink-body border-b border-border-light
                  ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'}
                  ${col.highlighted ? 'bg-primary text-ink-white rounded-t-badge' : ''}
                `}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-divider last:border-b-0 hover:bg-surface-subtle">
              {columns.map((col) => (
                <td
                  key={String(col.key)}
                  className={`px-3 py-2 text-body-sm text-ink-body
                    ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'}
                  `}
                >
                  {col.render ? col.render(row, rowIdx) : String((row as Record<string, unknown>)[col.key as string] ?? '')}
                </td>
              ))}
            </tr>
          ))}
          {totalRow && (
            <tr className="bg-surface-block font-semibold border-t border-border-light">
              {totalRow}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

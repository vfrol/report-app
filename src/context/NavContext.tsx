import { createContext, useContext } from 'react'

export interface NavContextValue {
  current: number
  total: number
  go: (index: number) => void
  next: () => void
  prev: () => void
}

export const NavContext = createContext<NavContextValue | null>(null)

export function useNav(): NavContextValue {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used inside NavContext.Provider')
  return ctx
}

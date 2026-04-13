import { useSlideNavigation } from './hooks/useSlideNavigation'
import { useKeyboard } from './hooks/useKeyboard'
import { Layout } from './components/Layout'
import { slideRegistry } from './slides/index'
import { NavContext } from './context/NavContext'

export default function App() {
  const { current, total, go, next, prev } = useSlideNavigation()

  useKeyboard({ onNext: next, onPrev: prev })

  const entry = slideRegistry[current]
  if (!entry) return null

  const SlideComponent = entry.component

  return (
    <NavContext.Provider value={{ current, total, go, next, prev }}>
      <Layout
        current={current}
        total={total}
        onNext={next}
        onPrev={prev}
        onGo={go}
        slideKey={current}
      >
        <SlideComponent />
      </Layout>
    </NavContext.Provider>
  )
}

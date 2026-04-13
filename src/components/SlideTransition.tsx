import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

interface SlideTransitionProps {
  slideKey: number
  children: ReactNode
}

const variants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

export function SlideTransition({ slideKey, children }: SlideTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideKey}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute inset-0 overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

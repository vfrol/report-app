import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { HeadingBadge } from '../components/Badge'
import { useNav } from '../context/NavContext'
import { tocSections } from '../data/report'

const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }

export function TableOfContents() {
  const { go } = useNav()

  return (
    <div className="slide-container flex flex-col bg-surface-page px-8 py-4 overflow-hidden">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-page-title font-black text-ink-heading mb-4 leading-none flex-shrink-0"
      >
        <HeadingBadge>Содержание</HeadingBadge>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="text-body text-ink-caption mb-5 flex-shrink-0"
      >
        Интегрированный годовой отчёт KMF · 2025
      </motion.p>

      {/* Section cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex-1 grid grid-cols-5 gap-4 min-h-0"
      >
        {tocSections.map((section) => (
          <motion.button
            key={section.number}
            variants={item}
            onClick={() => go(section.slideId)}
            className="group relative flex flex-col bg-surface-card rounded-card-lg p-5 text-left
              shadow-kpi hover:shadow-card transition-all duration-200
              hover:bg-surface-page hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {/* Number */}
            <span
              className="text-kpi font-black leading-none mb-3 select-none transition-colors duration-200"
              style={{ color: `${section.color}20` }}
            >
              {section.number}
            </span>

            {/* Left accent bar */}
            <div
              className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-200
                group-hover:top-3 group-hover:bottom-3"
              style={{ backgroundColor: section.color }}
            />

            {/* Title */}
            <p className="text-card-title font-bold text-ink-heading leading-snug mb-2 flex-1">
              {section.title}
            </p>

            {/* Description */}
            <p className="text-caption text-ink-caption leading-relaxed mb-4">
              {section.description}
            </p>

            {/* CTA */}
            <div
              className="flex items-center gap-1.5 text-body-sm font-semibold transition-colors duration-200"
              style={{ color: section.color }}
            >
              <span>Перейти</span>
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Bottom hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="text-caption text-ink-muted text-center mt-3 flex-shrink-0"
      >
        Используйте ← → для навигации между слайдами
      </motion.p>
    </div>
  )
}

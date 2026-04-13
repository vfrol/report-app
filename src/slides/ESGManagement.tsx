import { motion } from 'framer-motion'
import { Diamond, HeartDiamond } from '../components/DiamondDecor'
import { HeadingBadge, Badge } from '../components/Badge'
import { IconCircle } from '../components/IconCircle'
import { Globe, Lightbulb } from 'lucide-react'
import { images } from '../data/report'

const fadeUp = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

export function ESGManagement() {
  return (
    <div className="slide-container flex flex-col bg-surface-page overflow-hidden">
      {/* Title row */}
      <motion.h1
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-page-title font-black text-ink-heading leading-none px-5 pt-3 pb-2 flex-shrink-0"
      >
        Управление{' '}
        <HeadingBadge variant="green">устойчивым</HeadingBadge>
        {' '}развитием
      </motion.h1>

      {/* Content row */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex-1 flex gap-5 px-5 pb-0 min-h-0 overflow-hidden"
      >
        {/* Block 1 */}
        <motion.div variants={fadeUp} className="flex-1 overflow-y-auto slide-scroll relative">
          <div className="bg-surface-block rounded-card p-4 space-y-2">
            <p className="text-body text-ink-body leading-relaxed">
              В 2024 году АО «Микрофинансовая организация{' '}
              <Badge variant="primary" size="sm">KMF (КМФ)</Badge>
              » приступило к активному внедрению принципов устойчивого развития в свои
              бизнес-процессы. Данный шаг отражает приверженность Компании ответственному ведению
              бизнеса, прозрачному взаимодействию с заинтересованными сторонами и управлению
              воздействием на экономику, общество и окружающую среду.
            </p>
          </div>
        </motion.div>

        {/* Block 2 */}
        <motion.div variants={fadeUp} className="flex-1 overflow-y-auto slide-scroll space-y-3 relative">
          {/* Decorative */}
          <Diamond size={70} color="#4CAF50" opacity={0.2} className="-top-4 right-4" />
          <HeartDiamond size={40} color="#E8202A" className="top-0 left-1/2 -translate-x-1/2" />

          <div className="flex gap-4 mt-6">
            <div className="flex flex-col gap-3 flex-shrink-0">
              <IconCircle size={44} bgColor="#4CAF50"><Globe size={20} /></IconCircle>
              <IconCircle size={44} bgColor="#4CAF50"><Lightbulb size={20} /></IconCircle>
            </div>
            <div className="space-y-2">
              <p className="text-body text-ink-body leading-relaxed">
                KMF рассматривает устойчивое развитие как неотъемлемую часть своей долгосрочной
                стратегии и ключевой фактор стабильного роста, направленного на создание
                экологически ответственного, социально значимого и экономически устойчивого
                будущего.
              </p>
              <p className="text-body font-semibold text-ink-heading leading-relaxed">
                Для внедрения принципов устойчивого развития в деятельность KMF был создан Комитет
                по стратегическому планированию и устойчивому развитию (ESG) при Совете директоров.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Block 3 — person card */}
        <motion.div variants={fadeUp} className="w-52 flex-shrink-0 flex flex-col gap-3 overflow-hidden">
          {/* Tsereteli photo */}
          <div className="flex-1 rounded-card-lg overflow-hidden relative min-h-0">
            <img
              src={images.tsereteli}
              alt="Константин Церетели"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.75) 0%, transparent 60%)' }} />

            {/* ESG card overlay at top */}
            <div className="absolute top-2 left-2 right-2 bg-white/90 rounded-card p-2.5 space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-green-esg flex items-center justify-center">
                  <span className="text-caption font-black text-ink-white text-[9px]">ESG</span>
                </div>
                <p className="text-caption text-ink-body leading-snug">
                  Председателем Комитета определен{' '}
                  <strong>независимый директор Константин Церетели.</strong>
                </p>
              </div>
            </div>

            {/* Name bottom */}
            <div className="absolute bottom-2 left-2 right-2 text-center">
              <p className="text-caption font-bold text-ink-white drop-shadow">Константин Церетели</p>
            </div>
          </div>

          {/* Description card */}
          <div className="bg-surface-card rounded-card p-3 flex-shrink-0">
            <p className="text-caption text-ink-body leading-relaxed">
              А также создано Управление стратегического развития и ESG, которое отвечает за
              разработку стратегических ESG-целей и внедрение устойчивых практик в деятельность
              Компании.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom — park photo strip */}
      <div className="h-28 flex-shrink-0 relative overflow-hidden">
        <img
          src={images.esgNature}
          alt="Природа — устойчивое развитие"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.15) 0%, transparent 100%)' }} />
      </div>
    </div>
  )
}

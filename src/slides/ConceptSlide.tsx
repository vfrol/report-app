import { motion } from 'framer-motion'
import { Diamond } from '../components/DiamondDecor'
import { HeadingBadge, Badge } from '../components/Badge'
import { KmfLogo } from '../components/KmfLogo'
import { images } from '../data/report'

const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }

export function ConceptSlide() {
  return (
    <div className="slide-container flex bg-surface-page">
      {/* Left side — photo */}
      <div className="relative w-[42%] flex-shrink-0 overflow-hidden">
        <img
          src={images.conceptBg}
          alt="Клиент KMF"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 70%, rgba(255,255,255,0.8) 100%)' }} />

        {/* Decorative diamonds */}
        <Diamond size={180} color="#E8202A" opacity={0.88} className="-top-12 -left-12" />
        <Diamond size={100} color="#E8202A" opacity={0.55} className="top-16 left-6" />
        <Diamond size={55} color="#F5C542" opacity={0.9} className="top-8 left-32" />
      </div>

      {/* Right side — content */}
      <div className="flex-1 flex flex-col justify-center px-8 py-4 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #fff 60%, #FFF4F0 100%)' }}>
        {/* Icon badge top */}
        <div className="absolute top-4 left-6 flex items-center gap-2">
          <div className="w-10 h-10 rounded-pill bg-primary flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div className="px-6 py-2 rounded-pill bg-surface-block border border-border-light">
            <span className="text-nav font-semibold text-ink-body">Концепция Отчета</span>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl mt-12"
        >
          <motion.div variants={item} className="mb-4">
            <p className="text-section-title font-extrabold text-ink-heading leading-snug">
              <HeadingBadge>Фиджитал</HeadingBadge>
              {' '}— это наша цель и это теперь наш путь!
            </p>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-body text-ink-body mb-3">
              Мы начинаем новый этап жизни и для себя, и для наших клиентов. Теперь мы будем обучать
              наших клиентов получению продуктов банка более удобными способами с использованием
              современных технологичных инструментов.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-body text-ink-body mb-3">
              В этой концепции мы уже разрабатываем отчет как цифровой документ с логистикой сайта.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-body text-ink-body mb-3">
              Много плашек, псевдо-всплывающих окон, акцентных моментов. Текст отчета становится
              еще более инфографичным и понятным для читателя из-за добавления динамики и якорей,
              позволяющих ухватить важные аспекты.
            </p>
          </motion.div>

          <motion.div variants={item} className="mb-3 flex items-center gap-2 flex-wrap">
            <p className="text-body text-ink-body">Теперь получить поддержку КМФ – это</p>
            <Badge variant="primary" size="lg" className="font-black text-badge">ПРОСТОЕ РЕШЕНИЕ!</Badge>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-body text-ink-body">
              Наряду с этим, мы все же показываем кейсы наших действующих клиентов, потому что еще
              раз хотим подчеркнуть то, что даже в современном цифровом мире всегда есть место
              настоящим человеческим эмоциям. Это скромные люди, бизнес которых очевидно понятный,
              и даже не бизнес, а <strong>ПРОСТОЕ ДЕЛО!</strong>
            </p>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-4 right-6">
          <KmfLogo size="lg" />
        </div>
      </div>
    </div>
  )
}

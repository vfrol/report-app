import { motion } from 'framer-motion'
import { Diamond, HeartDiamond } from '../components/DiamondDecor'
import { IconCircle } from '../components/IconCircle'
import { Home, Flower2 } from 'lucide-react'
import { images } from '../data/report'

const fadeUp = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

export function ClientNashirovy() {
  return (
    <div className="slide-container flex bg-surface-page">
      {/* Left — full-bleed photo */}
      <div className="relative w-[52%] flex-shrink-0 overflow-hidden">
        <img
          src={images.nashirovy}
          alt="Нуржан и Гульзинат Нашировы"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 55%, rgba(255,255,255,0.35) 100%)' }} />

        {/* Decorative diamonds */}
        <Diamond size={160} color="#E8202A" opacity={0.85} className="-top-10 -left-10" />
        <Diamond size={90} color="#E8202A" opacity={0.55} className="top-24 left-4" />
        <Diamond size={50} color="#F5C542" opacity={0.9} className="top-10 left-32" />
        <Diamond size={100} color="#C8CDD8" opacity={0.30} className="bottom-12 left-20" />
        <HeartDiamond size={52} color="#E8202A" className="top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Bottom text overlay */}
        <div className="absolute bottom-8 left-8">
          <p className="text-section-title font-black leading-none drop-shadow-lg"
            style={{ color: '#1A1A2E', textShadow: '0 1px 8px rgba(255,255,255,0.6)' }}>
            <span className="font-black">Важное</span>{' '}
            <span className="font-light opacity-70">дело</span>
          </p>
          <p className="text-section-title font-black leading-none drop-shadow-lg -mt-1"
            style={{ color: '#1A1A2E', textShadow: '0 1px 8px rgba(255,255,255,0.6)' }}>
            <span className="font-black">Простой</span>{' '}
            <span className="font-light opacity-70">подход</span>
          </p>
        </div>

        {/* Icons */}
        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          <IconCircle size={44}><Home size={20} /></IconCircle>
          <IconCircle size={44}><Flower2 size={20} /></IconCircle>
        </div>
      </div>

      {/* Right — content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col justify-center px-6 py-4 gap-4 overflow-hidden"
      >
        {/* Small inset photo */}
        <motion.div variants={fadeUp} className="flex justify-end">
          <div className="w-44 h-32 rounded-card-lg overflow-hidden shadow-card-photo flex-shrink-0">
            <img
              src={images.nashirovySmall}
              alt="Теплица Нашировых"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Quote card */}
        <motion.div
          variants={fadeUp}
          className="bg-white rounded-card-lg p-5 relative"
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
        >
          <div className="absolute -top-3 left-4 text-primary font-black text-3xl leading-none select-none">«</div>

          <p className="text-body text-ink-body leading-relaxed">
            Благодаря поддержке{' '}
            <span className="bg-primary text-ink-white font-bold px-1.5 py-0.5 rounded text-body-sm">KMF</span>
            {' '}мы увеличили площадь теплиц до{' '}
            <strong>6 тысяч квадратных метров</strong>, построили склад. Наши дети обучаются
            за границей, мы отремонтировали дом и продолжаем развивать бизнес.
            Создали рабочие места, привлекли в команду агрономов.
          </p>
          <p className="text-body text-ink-body leading-relaxed mt-2">
            В дальнейшем планируем расширить тепличное хозяйство до{' '}
            <strong>10 тысяч квадратных метров»</strong>
          </p>

          <div className="mt-3 text-right">
            <p className="text-body-sm text-ink-caption">Нуржан и Гульзинат</p>
            <p className="text-card-title font-bold text-ink-heading">Нашировы</p>
            <p className="text-caption text-ink-muted">(Алматинская область)</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

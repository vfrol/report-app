import { motion } from 'framer-motion'
import { Diamond, HeartDiamond } from '../components/DiamondDecor'
import { HeadingBadge, Badge } from '../components/Badge'
import { BarChart2, Rocket } from 'lucide-react'
import { IconCircle } from '../components/IconCircle'
import { keyStats, images } from '../data/report'

const fadeUp = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }
const stagger = { show: { transition: { staggerChildren: 0.07 } } }

export function ChairmanAddress() {
  return (
    <div className="slide-container flex bg-surface-page overflow-hidden">
      {/* Left column — photo */}
      <div className="relative w-[30%] flex-shrink-0 overflow-hidden bg-surface-dark">
        <img
          src={images.chairman}
          alt="Гульнара Шамшиева"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={{ filter: 'none' }}
        />
        {/* Overlay tint */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,26,46,0.92) 0%, rgba(26,26,46,0.3) 60%, transparent 100%)' }} />

        {/* Decorative diamonds */}
        <Diamond size={140} color="#E8202A" opacity={0.75} className="-top-8 -left-8" />
        <Diamond size={70} color="#C8CDD8" opacity={0.25} className="bottom-28 left-4" />
        <HeartDiamond size={44} color="#E8202A" className="top-[36%] left-1/2 -translate-x-1/2" />

        {/* Name overlay */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="text-body text-ink-white/70">Гульнара</p>
          <p className="text-card-title font-bold text-ink-white">Шамшиева</p>
          <p className="text-caption text-ink-white/55 px-3 leading-tight mt-1">
            Председатель Совета директоров<br/>АО «МФО «KMF (КМФ)»
          </p>
        </div>

        {/* Icons */}
        <div className="absolute right-3 top-[38%] flex flex-col gap-3">
          <IconCircle size={40}><BarChart2 size={18} /></IconCircle>
          <IconCircle size={40}><Rocket size={18} /></IconCircle>
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col px-6 py-4 overflow-hidden"
      >
        <motion.h1 variants={fadeUp} className="text-page-title font-black text-ink-heading mb-3 leading-tight">
          Обращение Председателя{' '}
          <HeadingBadge>Совета</HeadingBadge>
          {' '}директоров
        </motion.h1>

        <motion.p variants={fadeUp} className="text-card-title font-bold text-ink-heading mb-3">
          Уважаемые клиенты, партнеры, инвесторы и коллеги!
        </motion.p>

        <div className="flex-1 flex gap-5 overflow-hidden min-h-0">
          {/* Column 1 */}
          <motion.div variants={fadeUp} className="flex-1 overflow-y-auto slide-scroll space-y-3">
            <p className="text-body text-ink-body">
              Представляю вашему вниманию годовой отчет микрофинансовой организации «KMF» за 2024
              год. Он отражает не только финансовые итоги, но и наш вклад в устойчивое развитие,
              социальную ответственность и корпоративное управление.
            </p>
            <p className="text-body text-ink-body">
              Прошедший год стал для KMF периодом масштабной трансформации. Мы завершили процесс
              реорганизации в акционерное общество, сделав важный шаг на пути к получению банковской
              лицензии. Этот переход открывает новые перспективы для дальнейшего развития Компании.
            </p>
            <div className="bg-surface-block rounded-card p-4 space-y-2">
              <p className="text-body text-ink-body">
                Сегодня KMF уверенно занимает лидирующую позицию на рынке микрофинансирования
                Казахстана. По итогам года наша доля в совокупном кредитном портфеле МФО составила{' '}
                <Badge variant="primary" size="sm">{keyStats.marketShare}</Badge>
                {' '}При этом мы остаемся значимым партнером для сельскохозяйственного сектора:{' '}
                <Badge variant="primary" size="sm">{keyStats.agroPortfolioShare}</Badge>
                {' '}портфеля направлено на поддержку агропредприятий.
              </p>
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div variants={fadeUp} className="flex-1 overflow-y-auto slide-scroll space-y-3">
            <p className="text-body text-ink-body">
              2024 год ознаменовался для нас расширением международного сотрудничества. Компания
              впервые привлекла финансирование от Японского агентства международного сотрудничества,
              продолжила взаимодействие с ЕБРР и IFC, а международное агентство Fitch Ratings
              подтвердило рейтинг KMF на уровне «{keyStats.fitchRating}» со «стабильным» прогнозом.
              Национальный рейтинг также подтвержден на уровне «{keyStats.nationalRating}».
            </p>
            <p className="text-body text-ink-body">
              Особое внимание мы уделяем вопросам устойчивого развития. В начале 2025 года
              экологические, социальные и управленческие аспекты становятся неотъемлемой частью
              нашей бизнес-модели и способствуют созданию дополнительной ценности для всех
              заинтересованных сторон.
            </p>
            <p className="text-body text-ink-body">
              Благодарю наших работников за профессионализм и вовлеченность, а клиентов и
              партнеров – за доверие.
            </p>
            <p className="text-body italic text-primary font-medium leading-relaxed">
              Уверена, что совместными усилиями мы продолжим движение вперед, сохраняя лидерство
              и укрепляя вклад в устойчивое будущее страны.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

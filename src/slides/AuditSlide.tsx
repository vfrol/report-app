import { motion } from 'framer-motion'
import { Badge } from '../components/Badge'
import { IconCircle } from '../components/IconCircle'
import { ShieldCheck, Building2 } from 'lucide-react'
import { keyStats, images } from '../data/report'

const fadeUp = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }
const stagger = { show: { transition: { staggerChildren: 0.07 } } }

export function AuditSlide() {
  return (
    <div className="slide-container flex bg-surface-page overflow-hidden">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex-1 flex gap-5 px-5 py-4 overflow-hidden"
      >
        {/* Column 1 — Internal audit */}
        <motion.div variants={fadeUp} className="flex-1 overflow-y-auto slide-scroll space-y-3">
          <h2 className="text-section-title font-bold text-ink-heading">Внутренний аудит</h2>
          <Badge variant="outline" size="sm">
            <span className="text-primary font-bold">GRI</span>&nbsp;2-16
          </Badge>
          <p className="text-body text-ink-body">
            В связи с увеличением масштабов бизнеса Компании в январе 2024 года Управление внутреннего
            аудита было преобразовано в Департамент внутреннего аудита (далее ДВА).
          </p>
          <p className="text-body text-ink-body">
            ДВА является независимым структурным подразделением, подотчетным Совету директоров.
            Работники департамента регулярно проходят курсы повышения квалификации, некоторые из них
            имеют международные сертификаты CIA, CRMA, PMI-RMP, DipPIA.
          </p>
          <p className="text-body text-ink-body">
            ДВА использует риск-ориентированный подход. В отчетном году в полном объеме реализован
            Годовой аудиторский план. В числе охваченных процессов: управление КДН, закуп, кредитование
            МСБ, работа с проблемными кредитами, учет ОС, управление доступами, ИТ-инциденты.
          </p>

          {/* Big number */}
          <div className="flex items-start gap-3 pt-2">
            <div>
              <p className="text-kpi font-black text-primary leading-none">{keyStats.internalAuditMeasures}</p>
              <p className="text-card-title font-bold text-ink-heading mt-0.5">мероприятий</p>
            </div>
            <IconCircle size={36} className="mt-1">
              <ShieldCheck size={18} />
            </IconCircle>
          </div>
          <p className="text-body-sm text-ink-body">
            по совершенствованию систем управления рисками и внутреннего контроля в общей сложности
            было разработано по результатам проверок, проведенных в отчетном году.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="w-px bg-divider flex-shrink-0" />

        {/* Column 2 — External audit */}
        <motion.div variants={fadeUp} className="flex-1 overflow-y-auto slide-scroll space-y-3">
          <h2 className="text-section-title font-bold text-ink-heading">Внешний аудит</h2>
          <p className="text-body text-ink-body">
            Выбор внешнего аудитора для проведения аудита финансовой отчетности KMF проводится в
            соответствии с положениями Политики выбора и ротации внешнего аудитора.
          </p>
          <p className="text-body text-ink-body">
            Основные принципы ротации внешнего аудитора —{' '}
            <span className="text-primary font-semibold">законность, преемственность,
            транспарентность, системность</span> и{' '}
            <span className="text-primary font-semibold">независимость</span>.
          </p>
          <p className="text-body text-ink-body">
            Аудит финансовой отчетности Компании за 2024 год проводился аудиторской организацией
            ТОО «Эрнст энд Янг», которая является аудитором Компании на протяжении{' '}
            <strong>{keyStats.auditorYears}</strong>.
          </p>
          <div className="bg-surface-block rounded-card p-3 space-y-1">
            <p className="text-body-sm font-semibold text-ink-body">Вознаграждение аудитору за 2024 год:</p>
            <p className="text-body-sm text-ink-body">
              {keyStats.auditorFee} с учетом НДС, из которых{' '}
              <strong>{keyStats.auditorNonAuditShare}</strong> приходилось на неаудиторские услуги.
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-px bg-divider flex-shrink-0" />

        {/* Column 3 — Large transactions + photo */}
        <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-3 overflow-hidden">
          <div className="space-y-3 flex-1 overflow-y-auto slide-scroll">
            <h2 className="text-section-title font-bold text-ink-heading">Информация о крупных сделках</h2>
            <p className="text-body text-ink-body">
              В течение 2024 года АО «Микрофинансовая организация «KMF (КМФ)» не осуществляло
              сделок, признаваемых в соответствии с законодательством РК и Правилами листинга
              АО «KASE» крупными сделками.
            </p>
          </div>

          {/* Phygital card */}
          <div className="flex-shrink-0 bg-surface-dark rounded-card p-4 space-y-2">
            <div className="flex items-center gap-2">
              <IconCircle size={32} bgColor="#E8202A">
                <Building2 size={16} />
              </IconCircle>
              <span className="text-card-title font-bold text-ink-white">Фиджитал-Банк</span>
            </div>
            <p className="text-body-sm text-ink-white/80 leading-relaxed">
              <Badge variant="primary" size="sm" className="mr-1">Фиджитал-банк</Badge>
              — это уникальная модель банка рядом с клиентом в любом формате, онлайн или офлайн.
              Это не просто набор сервисов, а{' '}
              <span className="text-secondary font-bold">экосистема</span>, в которой клиент
              получает больше финансовых возможностей.
            </p>
          </div>

          {/* Real building photo */}
          <div className="h-28 rounded-card overflow-hidden flex-shrink-0">
            <img
              src={images.auditBuilding}
              alt="Офис KMF"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

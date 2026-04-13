import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { HeadingBadge, Badge } from '../components/Badge'
import { DataTable } from '../components/DataTable'
import { shareholdersData, shareholdersTotal, liabilitiesByCountry, keyStats, images } from '../data/report'
import type { ShareholderRow } from '../data/report'
import { Globe } from 'lucide-react'
import { IconCircle } from '../components/IconCircle'

const fadeUp = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }
const stagger = { show: { transition: { staggerChildren: 0.08 } } }

const shareholderColumns = [
  { key: 'name', header: 'Участник/акционер', align: 'left' as const },
  { key: 'share2024', header: 'Доля владения на 31 декабря 2024 года', align: 'center' as const },
  {
    key: 'share2025',
    header: (
      <span className="flex items-center justify-center gap-1">
        <span>Доля владения на 31 декабря 2025 года</span>
      </span>
    ),
    align: 'center' as const,
    highlighted: true,
  },
]

export function CorporateGovernance() {
  return (
    <div className="slide-container flex bg-surface-page overflow-hidden">
      {/* Left — capital structure */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex-1 flex flex-col px-5 py-3 overflow-hidden"
      >
        <motion.h1 variants={fadeUp} className="text-page-title font-black text-ink-heading mb-2 leading-none flex-shrink-0">
          <HeadingBadge>Корпоративное</HeadingBadge>
          {' '}управление
        </motion.h1>

        <motion.p variants={fadeUp} className="text-section-title font-bold text-ink-heading mb-3 flex-shrink-0">
          Структура капитала
        </motion.p>

        {/* Real KMF building photo */}
        <motion.div variants={fadeUp} className="relative flex-shrink-0 rounded-card-lg overflow-hidden mb-3" style={{ height: '38%' }}>
          <img
            src={images.kmfBuilding}
            alt="Здание KMF"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)' }} />

          {/* Text card overlay */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/92 backdrop-blur-sm rounded-card p-3" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
            <p className="text-body-sm text-ink-body leading-snug">
              Уставный капитал Компании на 31 декабря 2023 и 2024 года составлял{' '}
              <Badge variant="primary" size="sm">{keyStats.authorizedCapital}</Badge>.{' '}
              В процессе акционирования 50 008 939 084 простых акций были выпущены и полностью оплачены
              акционерами по номинальной стоимости 1 тенге за простую акцию.
            </p>
          </div>
        </motion.div>

        {/* Shareholders table */}
        <motion.div variants={fadeUp} className="flex-1 min-h-0 overflow-hidden">
          <DataTable<ShareholderRow>
            columns={shareholderColumns}
            rows={shareholdersData}
            totalRow={
              <>
                <td className="px-3 py-2 text-body-sm font-bold text-ink-heading">Итого</td>
                <td className="px-3 py-2 text-body-sm text-center text-ink-body">{shareholdersTotal.share2024}</td>
                <td className="px-3 py-2 text-body-sm text-center font-bold text-ink-white bg-primary rounded-b-badge">{shareholdersTotal.share2025}</td>
              </>
            }
            className="h-full"
          />
        </motion.div>
      </motion.div>

      {/* Right — liabilities */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="w-72 flex-shrink-0 flex flex-col px-4 py-3 border-l border-divider overflow-hidden"
      >
        <motion.div variants={fadeUp} className="mb-2">
          <div className="bg-surface-block rounded-card px-3 py-1.5">
            <span className="text-section-title font-bold text-ink-heading">Структура обязательств</span>
          </div>
        </motion.div>

        {/* KPI */}
        <motion.div variants={fadeUp} className="mb-3">
          <p className="text-kpi font-extrabold text-ink-heading leading-none">{keyStats.kazakhstanFundingShare}</p>
          <div className="flex items-start gap-2 mt-1">
            <IconCircle size={24} bgColor="#E8202A">
              <span className="text-caption font-bold text-ink-white text-[9px]">KZ</span>
            </IconCircle>
            <p className="text-body-sm text-ink-body leading-snug">
              составила доля казахстанского фондирования в страновой структуре обязательств KMF
              по состоянию на конец 2024 года.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <p className="text-body-sm text-ink-body mb-3 leading-relaxed">
            Наиболее значимые объемы фондирования были привлечены в Люксембурге (31,86 %)
            от совокупного объема по всем странам, Великобритании (13,20 %) и Японии (11,10 %).
          </p>
        </motion.div>

        {/* Donut chart */}
        <motion.div variants={fadeUp} className="flex-1 min-h-0 flex flex-col">
          <div className="flex items-center gap-1.5 mb-1">
            <IconCircle size={22} bgColor="#E8202A">
              <Globe size={12} />
            </IconCircle>
            <p className="text-caption text-ink-caption font-semibold">Структура обязательств KMF в разрезе стран</p>
          </div>
          <div style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={liabilitiesByCountry}
                  cx="50%"
                  cy="50%"
                  innerRadius="52%"
                  outerRadius="80%"
                  paddingAngle={2}
                  dataKey="value"
                  animationBegin={200}
                  animationDuration={800}
                >
                  {liabilitiesByCountry.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(v: number, name: string) => [`${v.toFixed(2)} %`, name]}
                  contentStyle={{ fontSize: 11, borderRadius: 8 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 overflow-y-auto slide-scroll">
            {liabilitiesByCountry.map((c) => (
              <div key={c.name} className="flex items-center gap-1">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: c.color }} />
                <span className="text-caption text-ink-caption truncate">
                  {c.name} {c.value.toFixed(2).replace('.', ',')} %
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

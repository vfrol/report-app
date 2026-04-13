import { motion } from 'framer-motion'
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Tooltip, BarChart,
} from 'recharts'
import { HeadingBadge } from '../components/Badge'
import {
  creditPortfolioData, provisioningData, nplData,
  portfolioStructureData, profitabilityData, portfolioLegend,
  issuedLoansData, activeClientsData,
  roaDeltas, roeDeltas,
} from '../data/report'
import { Users, BarChart2, PieChart, TrendingDown, ShieldAlert, Activity } from 'lucide-react'

// ── Gradient defs ─────────────────────────────────────────────
function BarGradient({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E8202A" stopOpacity={0.92} />
        <stop offset="100%" stopColor="#E8202A" stopOpacity={0.22} />
      </linearGradient>
    </defs>
  )
}

const axisStyle = { fontSize: 10, fill: '#717182' }
const labelStyle = { fontSize: 11, fontWeight: 700, fill: '#1A1A2E' }

// ── Legend row ────────────────────────────────────────────────
function ChartLegend({ bar, line }: { bar: string; line?: string }) {
  return (
    <div className="flex items-center gap-3 mt-1 flex-wrap">
      <div className="flex items-center gap-1">
        <div className="w-3 h-2.5 rounded-sm" style={{ background: 'linear-gradient(180deg,#E8202A,rgba(232,32,42,.25))' }} />
        <span className="text-caption text-ink-caption">{bar}</span>
      </div>
      {line && (
        <div className="flex items-center gap-1">
          <div className="w-5 h-0.5 bg-ink-heading" />
          <span className="text-caption text-ink-caption">{line}</span>
        </div>
      )}
    </div>
  )
}

// ── 1. Clients / Loans KPI card ───────────────────────────────
function ClientsKPIChart() {
  const loansLatest = issuedLoansData[issuedLoansData.length - 1]
  const clientsLatest = activeClientsData[activeClientsData.length - 1]

  return (
    <div className="h-full flex flex-col justify-around py-1">
      {/* Loans */}
      <div>
        <p className="text-caption text-ink-caption mb-0.5">Выданные кредиты</p>
        <div className="text-kpi font-extrabold text-ink-heading leading-none">{loansLatest.value}</div>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          {issuedLoansData.slice(0, -1).map((d) => (
            <span key={d.year} className="flex items-center gap-1 text-body-sm text-ink-body">
              {d.value} <span className="text-caption text-ink-muted">{d.year}</span>
              <svg width="9" height="9" viewBox="0 0 9 9" className="text-primary flex-shrink-0">
                <path d="M4.5 7.5V1.5M4.5 1.5L1.5 4.5M4.5 1.5L7.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          ))}
          <span className="text-caption text-ink-muted">{loansLatest.year}</span>
        </div>
      </div>

      <div className="border-t border-divider" />

      {/* Clients */}
      <div>
        <p className="text-caption text-ink-caption mb-0.5">Активные клиенты</p>
        <div className="text-kpi font-extrabold text-ink-heading leading-none">{clientsLatest.value}</div>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          {activeClientsData.slice(0, -1).map((d) => (
            <span key={d.year} className="flex items-center gap-1 text-body-sm text-ink-body">
              {d.value} <span className="text-caption text-ink-muted">{d.year}</span>
              <svg width="9" height="9" viewBox="0 0 9 9" className="text-primary flex-shrink-0">
                <path d="M4.5 7.5V1.5M4.5 1.5L1.5 4.5M4.5 1.5L7.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          ))}
          <span className="text-caption text-ink-muted">{clientsLatest.year}</span>
        </div>
      </div>
    </div>
  )
}

// ── 2. Provisioning ───────────────────────────────────────────
function ProvisioningChart() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={provisioningData} margin={{ top: 20, right: 8, bottom: 0, left: -24 }}>
            <BarGradient id="provGrad" />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.07)" vertical={false} />
            <XAxis dataKey="year" tick={axisStyle} axisLine={false} tickLine={false} />
            <YAxis yAxisId="l" hide />
            <YAxis yAxisId="r" orientation="right" hide />
            <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
            <Bar yAxisId="l" dataKey="value" fill="url(#provGrad)" radius={[4,4,0,0]} maxBarSize={44}
              label={{ position: 'top', ...labelStyle, formatter: (v: number) => v.toFixed(1).replace('.', ',') }} />
            <Line yAxisId="r" dataKey="secondary" stroke="#1A1A2E" strokeWidth={2} dot={false}
              activeDot={{ r: 4, fill: '#E8202A' }}
              label={{ position: 'top', fontSize: 10, fill: '#717182', formatter: (v: number) => `${v.toFixed(1).replace('.', ',')} %` }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend bar="Сформированные провизии" line="Покрытие провизиями" />
    </div>
  )
}

// ── 3. Portfolio structure (horizontal stacked bars) ──────────
function PortfolioStructureChart() {
  return (
    <div className="h-full flex flex-col justify-around">
      {portfolioStructureData.map((row) => (
        <div key={row.year} className="flex items-center gap-2">
          <span className="text-caption text-ink-caption w-8 flex-shrink-0">{row.year}</span>
          <div className="flex-1 flex h-7 rounded overflow-hidden gap-0.5">
            <div className="flex items-center justify-center text-caption text-ink-white font-bold"
              style={{ width: `${row.consumer}%`, background: '#E8202A' }}>
              {row.consumer > 10 ? `${row.consumer} %` : ''}
            </div>
            <div className="flex items-center justify-center text-caption text-ink-heading font-bold"
              style={{ width: `${row.retail}%`, background: '#F5C542' }}>
              {row.retail > 5 ? `${row.retail} %` : ''}
            </div>
            <div className="flex items-center justify-center text-caption text-ink-heading font-bold"
              style={{ width: `${row.agro}%`, background: '#B0B7C3' }}>
              {row.agro > 10 ? `${row.agro} %` : ''}
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-1 mt-1">
        {portfolioLegend.map((l) => (
          <div key={l.key} className="flex items-start gap-1.5">
            <div className="w-3 h-3 rounded-sm flex-shrink-0 mt-0.5" style={{ background: l.color }} />
            <span className="text-caption text-ink-caption leading-tight">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── 4. Credit portfolio ───────────────────────────────────────
function CreditPortfolioChart() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={creditPortfolioData} margin={{ top: 20, right: 8, bottom: 0, left: -24 }}>
            <BarGradient id="portGrad" />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.07)" vertical={false} />
            <XAxis dataKey="year" tick={axisStyle} axisLine={false} tickLine={false} />
            <YAxis yAxisId="l" hide />
            <YAxis yAxisId="r" orientation="right" hide />
            <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
            <Bar yAxisId="l" dataKey="value" fill="url(#portGrad)" radius={[4,4,0,0]} maxBarSize={44}
              label={{ position: 'top', ...labelStyle, formatter: (v: number) => v.toFixed(1).replace('.', ',') }} />
            <Line yAxisId="r" dataKey="secondary" stroke="#1A1A2E" strokeWidth={2} dot={false}
              activeDot={{ r: 4, fill: '#E8202A' }}
              label={{ position: 'top', fontSize: 10, fill: '#717182', formatter: (v: number) => `${v.toFixed(1).replace('.', ',')} %` }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend bar="Кредитный портфель" line="Доля KMF в совокупном портфеле МФО" />
    </div>
  )
}

// ── 5. NPL 90+ ────────────────────────────────────────────────
function NplChart() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={nplData} margin={{ top: 20, right: 8, bottom: 0, left: -24 }}>
            <BarGradient id="nplGrad" />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.07)" vertical={false} />
            <XAxis dataKey="year" tick={axisStyle} axisLine={false} tickLine={false} />
            <YAxis yAxisId="l" hide />
            <YAxis yAxisId="r" orientation="right" hide />
            <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} />
            <Bar yAxisId="l" dataKey="value" fill="url(#nplGrad)" radius={[4,4,0,0]} maxBarSize={44}
              label={{ position: 'top', ...labelStyle, formatter: (v: number) => v.toFixed(1).replace('.', ',') }} />
            <Line yAxisId="r" dataKey="secondary" stroke="#1A1A2E" strokeWidth={2} dot={false}
              activeDot={{ r: 4, fill: '#E8202A' }}
              label={{ position: 'top', fontSize: 10, fill: '#717182', formatter: (v: number) => `${v.toFixed(1).replace('.', ',')} %` }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <ChartLegend bar="NPL 90+" line="Доля NPL 90+ в кредитном портфеле" />
    </div>
  )
}

// ── 6. ROA / ROE ──────────────────────────────────────────────
const roaData = profitabilityData.map((d) => ({ year: d.year, value: d.roa }))
const roeData = profitabilityData.map((d) => ({ year: d.year, value: d.roe }))

function ProfitChart({ data, label, gradId, deltas }: {
  data: { year: string; value: number }[]
  label: string
  gradId: string
  deltas: { year: string; delta: string }[]
}) {
  return (
    <div className="flex-1 flex flex-col min-h-0">
      <p className="text-body-sm font-bold text-primary mb-1">{label}</p>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 22, right: 4, bottom: 0, left: -28 }}>
            <BarGradient id={gradId} />
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.07)" vertical={false} />
            <XAxis dataKey="year" tick={axisStyle} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip contentStyle={{ fontSize: 11, borderRadius: 8 }} formatter={(v: number) => [`${v.toFixed(1).replace('.', ',')} %`, label]} />
            <Bar dataKey="value" fill={`url(#${gradId})`} radius={[4,4,0,0]} maxBarSize={40}
              label={{ position: 'top', fontSize: 10, fontWeight: 700, fill: '#717182', formatter: (v: number) => `${v.toFixed(1).replace('.', ',')} %` }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-around mt-0.5">
        {deltas.map((d) => (
          <div key={d.year} className="flex items-center gap-0.5 text-caption text-primary">
            <span>{d.delta}</span>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
              <path d="M4 7L7 2H1L4 7Z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProfitabilityChart() {
  return (
    <div className="h-full flex gap-3">
      <ProfitChart data={roaData} label="ROA" gradId="roaGrad" deltas={roaDeltas} />
      <ProfitChart data={roeData} label="ROE" gradId="roeGrad" deltas={roeDeltas} />
    </div>
  )
}

// ── Card wrapper ──────────────────────────────────────────────
interface CardProps {
  icon: React.ReactNode
  title: string
  subtitle?: string
  children: React.ReactNode
}

function Card({ icon, title, subtitle, children }: CardProps) {
  return (
    <div className="bg-surface-card rounded-card p-3 flex flex-col gap-2 shadow-kpi h-full">
      <div className="flex items-start gap-2 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-ink-white">
          {icon}
        </div>
        <div>
          <p className="text-caption font-semibold text-ink-body leading-tight">{title}</p>
          {subtitle && <p className="text-caption text-ink-muted leading-tight">{subtitle}</p>}
        </div>
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  )
}

// ── Main dashboard ────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }
const stagger = { show: { transition: { staggerChildren: 0.06 } } }

export function KPIDashboard() {
  return (
    <div className="slide-container flex flex-col bg-surface-page px-4 pt-2 pb-1 overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-page-title font-black text-ink-heading mb-2 leading-none flex-shrink-0"
      >
        <HeadingBadge>Ключевые</HeadingBadge>
        {' '}показатели деятельности
      </motion.h1>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex-1 grid grid-cols-3 grid-rows-2 gap-2 min-h-0 overflow-hidden"
      >
        <motion.div variants={fadeUp} className="min-h-0">
          <Card icon={<Users size={16} />} title="Количество активных клиентов и выданных кредитов" subtitle="тыс. на конец периода">
            <ClientsKPIChart />
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} className="min-h-0">
          <Card icon={<ShieldAlert size={16} />} title="Уровень провизирования" subtitle="млрд тенге на конец периода">
            <ProvisioningChart />
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} className="min-h-0">
          <Card icon={<PieChart size={16} />} title="Структура кредитного портфеля по направлениям" subtitle="на конец периода">
            <PortfolioStructureChart />
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} className="min-h-0">
          <Card icon={<BarChart2 size={16} />} title="Кредитный портфель и доля на рынке">
            <CreditPortfolioChart />
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} className="min-h-0">
          <Card icon={<TrendingDown size={16} />} title="Займы с просрочкой свыше 90 дней" subtitle="млрд тенге на конец периода">
            <NplChart />
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} className="min-h-0">
          <Card icon={<Activity size={16} />} title="Динамика показателей рентабельности">
            <ProfitabilityChart />
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}

// ============================================================
// KMF Annual Report 2025 — All typed data
// Source: report.pdf — no hardcoded values in components
// ============================================================

// ── Image paths ───────────────────────────────────────────────
const base = import.meta.env.BASE_URL  // '/report-app/' in prod, '/report-app/' in dev

export const images = {
  conceptPerson: `${base}images/concept-person.jpg`,
  conceptBg: `${base}images/concept-bg.jpg`,
  nashirovy: `${base}images/nashirovy-main.jpg`,
  nashirovySmall: `${base}images/nashirovy-small.jpg`,
  chairman: `${base}images/chairman-portrait.jpg`,
  kmfBuilding: `${base}images/kmf-building.jpg`,
  auditBuilding: `${base}images/audit-building.jpg`,
  abdukhofilovBg: `${base}images/abdukhofilov-bg.jpg`,
  abdukhofilovInset: `${base}images/abdukhofilov-inset.jpg`,
  esgPark: `${base}images/esg-park.jpg`,
  esgNature: `${base}images/esg-nature.jpg`,
  tsereteli: `${base}images/tsereteli-portrait.jpg`,
}

// ── Clients / Loans ─────────────────────────────────────────
export interface YearValue {
  year: string
  value: number
}

export interface YearDualValue extends YearValue {
  secondary: number
}

export const issuedLoansData: YearValue[] = [
  { year: '2023', value: 333.2 },
  { year: '2024', value: 342 },
  { year: '2025', value: 363.9 },
]

export const activeClientsData: YearValue[] = [
  { year: '2023', value: 257.3 },
  { year: '2024', value: 265.1 },
  { year: '2025', value: 277.9 },
]

// ── Credit Portfolio ─────────────────────────────────────────
export const creditPortfolioData: YearDualValue[] = [
  { year: '2023', value: 203.5, secondary: 22.3 },
  { year: '2024', value: 245.5, secondary: 19.7 },
  { year: '2025', value: 281.6, secondary: 18.2 },
]

// ── Provisioning ─────────────────────────────────────────────
export const provisioningData: YearDualValue[] = [
  { year: '2023', value: 12.2, secondary: 169.5 },
  { year: '2024', value: 17.1, secondary: 169.5 },
  { year: '2025', value: 26.2, secondary: 161.7 },
]

// ── NPL 90+ ───────────────────────────────────────────────────
export const nplData: YearDualValue[] = [
  { year: '2023', value: 7.2, secondary: 3.5 },
  { year: '2024', value: 10.1, secondary: 4.1 },
  { year: '2025', value: 16.2, secondary: 5.8 },
]

// ── Portfolio Structure ───────────────────────────────────────
export interface PortfolioStructureRow {
  year: string
  consumer: number
  retail: number
  agro: number
}

export const portfolioStructureData: PortfolioStructureRow[] = [
  { year: '2023', consumer: 54.2, retail: 10, agro: 35.8 },
  { year: '2024', consumer: 56.8, retail: 7.6, agro: 35.5 },
  { year: '2025', consumer: 58.3, retail: 7, agro: 34.7 },
]

export const portfolioLegend = [
  { key: 'consumer', label: 'Потребительское кредитование', color: '#E8202A' },
  { key: 'retail', label: 'Кредитование розничной торговли, сектора услуг и производства', color: '#F5C542' },
  { key: 'agro', label: 'Сельскохозяйственное кредитование', color: '#B0B7C3' },
]

// ── Profitability ─────────────────────────────────────────────
export interface ProfitabilityRow {
  year: string
  roa: number
  roe: number
}

export const profitabilityData: ProfitabilityRow[] = [
  { year: '2023', roa: 6.1, roe: 27 },
  { year: '2024', roa: 5.1, roe: 23.4 },
  { year: '2025', roa: 3.5, roe: 19.1 },
]

export interface DeltaAnnotation {
  year: string
  delta: string
}

export const roaDeltas: DeltaAnnotation[] = [
  { year: '2024', delta: '−1 п. п.' },
  { year: '2025', delta: '−1,6 п. п.' },
]

export const roeDeltas: DeltaAnnotation[] = [
  { year: '2024', delta: '−3,6 п. п.' },
  { year: '2025', delta: '−4,3 п. п.' },
]

// ── Liabilities by country ────────────────────────────────────
export interface CountryShare {
  name: string
  value: number
  color: string
}

export const liabilitiesByCountry: CountryShare[] = [
  { name: 'Люксембург', value: 31.86, color: '#F5C542' },
  { name: 'Казахстан', value: 25.14, color: '#E8202A' },
  { name: 'Великобритания', value: 13.20, color: '#B0B7C3' },
  { name: 'Япония', value: 11.10, color: '#4A4A5A' },
  { name: 'США', value: 8.91, color: '#E8865A' },
  { name: 'Франция', value: 3.44, color: '#9B7FD4' },
  { name: 'Германия', value: 3.28, color: '#C4C8D0' },
  { name: 'Нидерланды', value: 2.16, color: '#D4D8E0' },
  { name: 'Филиппины', value: 0.91, color: '#EDE8E0' },
]

// ── Shareholders ──────────────────────────────────────────────
export interface ShareholderRow {
  name: string
  share2024: string
  share2025: string
}

export const shareholdersData: ShareholderRow[] = [
  { name: 'Корпоративный фонд «KMF-Демеу»', share2024: '34,7 %', share2025: '34,7 %' },
  { name: 'MultiConcept Fund Management S.A', share2024: '34,7 %', share2025: '34,7 %' },
  { name: 'KAZ Finance B.V.', share2024: '34,7 %', share2025: '34,7 %' },
  { name: 'Legal Owner Emerging Markets B.V.', share2024: '34,7 %', share2025: '34,7 %' },
  { name: 'Triodos Funds B.V.', share2024: '34,7 %', share2025: '34,7 %' },
]

export const shareholdersTotal = { share2024: '34,7 %', share2025: '34,7 %' }

// ── Key stats ─────────────────────────────────────────────────
export const keyStats = {
  marketShare: '18,2 %',
  agroPortfolioShare: '34,7 %',
  fitchRating: 'B+',
  nationalRating: 'BBB (kaz)',
  authorizedCapital: '50 008 939 084 тенге',
  kazakhstanFundingShare: '25,14 %',
  internalAuditMeasures: '>300',
  auditorFee: '73,7 тыс. тенге',
  auditorNonAuditShare: '1,5 %',
  auditorYears: '10 лет',
}

// ── Slide registry types ──────────────────────────────────────
export interface SlideInfo {
  id: number
  slug: string
  title: string
  section: string
}

export const slides: SlideInfo[] = [
  { id: 0, slug: 'concept', title: 'Концепция Отчета', section: 'Концепция' },
  { id: 1, slug: 'contents', title: 'Содержание', section: 'Навигация' },
  { id: 2, slug: 'client-nashirovy', title: 'Нашировы', section: 'О Компании' },
  { id: 3, slug: 'chairman', title: 'Обращение Председателя', section: 'О Компании' },
  { id: 4, slug: 'kpi', title: 'Ключевые показатели', section: 'Ключевые показатели' },
  { id: 5, slug: 'governance', title: 'Корпоративное управление', section: 'Корпоративное управление' },
  { id: 6, slug: 'audit', title: 'Аудит', section: 'Корпоративное управление' },
  { id: 7, slug: 'client-abdukhofilov', title: 'Абдухофизов', section: 'О Компании' },
  { id: 8, slug: 'esg-intro', title: 'Устойчивое развитие', section: 'Управление устойчивым развитием' },
  { id: 9, slug: 'esg-structure', title: 'Структура ESG', section: 'Управление устойчивым развитием' },
]

// ── Table of contents sections ────────────────────────────────
export interface TocSection {
  number: string
  title: string
  description: string
  slideId: number
  color: string
}

export const tocSections: TocSection[] = [
  {
    number: '01',
    title: 'О Компании',
    description: 'Истории клиентов и обращение Председателя Совета директоров',
    slideId: 2,
    color: '#E8202A',
  },
  {
    number: '02',
    title: 'Обращение Председателя',
    description: 'Гульнара Шамшиева — итоги 2024 года, рейтинги, перспективы',
    slideId: 3,
    color: '#E8202A',
  },
  {
    number: '03',
    title: 'Ключевые показатели деятельности',
    description: 'Кредитный портфель, клиенты, NPL, рентабельность 2023–2025',
    slideId: 4,
    color: '#E8202A',
  },
  {
    number: '04',
    title: 'Корпоративное управление',
    description: 'Структура капитала, акционеры, аудит и крупные сделки',
    slideId: 5,
    color: '#E8202A',
  },
  {
    number: '05',
    title: 'Управление устойчивым развитием',
    description: 'ESG-стратегия, комитет, организационная структура',
    slideId: 8,
    color: '#4CAF50',
  },
]

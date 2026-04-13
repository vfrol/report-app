import { motion } from 'framer-motion'
import { Badge } from '../components/Badge'

const fadeUp = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } }
const stagger = { show: { transition: { staggerChildren: 0.07 } } }

interface StructureCardProps {
  title: string
  items: string[]
  highlighted?: boolean
}

function StructureCard({ title, items, highlighted = false }: StructureCardProps) {
  return (
    <div
      className={`rounded-card p-3 space-y-1.5 ${
        highlighted
          ? 'bg-green-esg text-ink-white'
          : 'bg-surface-card border border-border-light'
      }`}
    >
      <p className={`text-body-sm font-bold ${highlighted ? 'text-ink-white' : 'text-ink-heading'}`}>
        {title}
      </p>
      <ul className="space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                highlighted ? 'bg-white' : 'bg-primary'
              }`}
            />
            <span className={`text-caption leading-relaxed ${highlighted ? 'text-white/90' : 'text-ink-body'}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ESGStructure() {
  return (
    <div className="slide-container flex bg-surface-page overflow-hidden">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex gap-4 w-full px-4 py-3 overflow-hidden"
      >
        {/* Left sidebar — title */}
        <motion.div variants={fadeUp} className="w-44 flex-shrink-0 space-y-3 overflow-y-auto slide-scroll">
          <h2 className="text-card-title font-bold text-ink-heading leading-snug">
            Организационная структура управления устойчивым развитием
          </h2>
          <Badge variant="outline" size="sm">
            <span className="text-primary font-bold">GRI</span>&nbsp;2-9, 2-12, 2-13, 2-14, 2-24
          </Badge>
          <p className="text-body-sm text-ink-body leading-relaxed">
            Для эффективного внедрения принципов устойчивого развития в KMF сформирована система
            управления, охватывающая все уровни корпоративного управления.
          </p>
          <p className="text-body-sm text-ink-body leading-relaxed">
            На стратегическом уровне Совет директоров определяет приоритетные направления и
            обеспечивает надзор за реализацией ESG-инициатив.
          </p>
        </motion.div>

        {/* 3 columns */}
        {/* Column 01 — Strategic */}
        <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-2 overflow-y-auto slide-scroll">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-kpi-sm font-black text-surface-block/40 leading-none">01.</span>
            <p className="text-card-title font-bold text-ink-heading">Стратегический уровень</p>
          </div>

          <StructureCard
            title="Совет директоров"
            items={[
              'отвечает за стратегическое руководство в области устойчивого развития',
              'утверждает цели в области ESG и стратегию Компании, ключевые внутренние нормативные документы',
              'контролирует реализацию ESG-повестки, включая управление экологическими и социальными рисками',
            ]}
          />

          <StructureCard
            title="Комитет по стратегическому развитию и ESG при Совете директоров"
            items={[
              'рассматривает проект стратегии Компании и осуществляет мониторинг исполнения',
              'рассматривает проекты внутренних нормативных документов в области устойчивого развития',
              'определяет среднесрочные и долгосрочные цели и КПЭ в области устойчивого развития',
              'осуществляет надзор за реализацией и интеграцией принципов ESG',
              'рассматривает отчетность по устойчивому развитию',
            ]}
          />
        </motion.div>

        {/* Column 02 — Management (green) */}
        <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-2 overflow-y-auto slide-scroll">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-kpi-sm font-black text-green-esg/40 leading-none">02.</span>
            <p className="text-card-title font-bold text-ink-heading">Управленческий уровень</p>
          </div>

          <StructureCard
            title="Правление"
            highlighted={true}
            items={[
              'обеспечивает внедрение ESG-стратегии',
              'принимает политики, процедуры по управлению экологическими и социальными рисками',
              'организует оценку проектов с повышенным уровнем ESG-рисков и раскрытие информации',
              'обеспечивает достоверность ESG-отчетности и функционирование системы',
            ]}
          />

          <StructureCard
            title="Комитет по управлению кредитными и операционными рисками при Правлении"
            highlighted={true}
            items={[
              'отвечает за контроль внедрения процедур оценки ESG-рисков',
              'контролирует механизмы отказа от проектов с недопустимыми уровнями рисков',
            ]}
          />
        </motion.div>

        {/* Column 03 — Operational */}
        <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-2 overflow-y-auto slide-scroll">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-kpi-sm font-black text-surface-block/40 leading-none">03.</span>
            <p className="text-card-title font-bold text-ink-heading">Операционный уровень</p>
          </div>

          <StructureCard
            title="Департамент риск-менеджмента"
            items={[
              'разрабатывает и внедряет систему управления экологическими и социальными рисками (ESDD)',
              'категоризирует и оценивает риски',
              'предоставляет заключения',
            ]}
          />

          <StructureCard
            title="Управление стратегического развития и ESG"
            items={[
              'координирует внедрение принципов устойчивого развития в деятельность Компании',
              'разрабатывает политику в области ESG, планы мероприятий',
              'обеспечивает сбор и систематизацию данных',
              'подготавливает отчетность',
              'организует мониторинг выполнения целей в области ESG',
            ]}
          />

          <StructureCard
            title="Структурные подразделения"
            items={[
              'предоставляют данные для годовой и нефинансовой отчетности',
              'реализуют корпоративные инициативы в области устойчивого развития',
              'информируют и вовлекают работников и клиентов',
            ]}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

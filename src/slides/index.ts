import type { ComponentType } from 'react'
import { ConceptSlide } from './ConceptSlide'
import { TableOfContents } from './TableOfContents'
import { ClientNashirovy } from './ClientNashirovy'
import { ChairmanAddress } from './ChairmanAddress'
import { KPIDashboard } from './KPIDashboard'
import { CorporateGovernance } from './CorporateGovernance'
import { AuditSlide } from './AuditSlide'
import { ClientAbdukhofizov } from './ClientAbdukhofizov'
import { ESGManagement } from './ESGManagement'
import { ESGStructure } from './ESGStructure'

export interface SlideRegistryEntry {
  id: number
  component: ComponentType
}

export const slideRegistry: SlideRegistryEntry[] = [
  { id: 0, component: ConceptSlide },
  { id: 1, component: TableOfContents },
  { id: 2, component: ClientNashirovy },
  { id: 3, component: ChairmanAddress },
  { id: 4, component: KPIDashboard },
  { id: 5, component: CorporateGovernance },
  { id: 6, component: AuditSlide },
  { id: 7, component: ClientAbdukhofizov },
  { id: 8, component: ESGManagement },
  { id: 9, component: ESGStructure },
]

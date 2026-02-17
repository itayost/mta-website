import { HelpCircle } from 'lucide-react'
import { CtaSection } from './CtaSection'

export function ServicesNotSureCta() {
  return (
    <CtaSection
      icon={HelpCircle}
      title="לא בטוחים איזה שירות מתאים לכם?"
      body="בפגישת ייעוץ ראשונית ללא עלות נבין יחד מה הצרכים שלכם ונתאים את הפתרון המדויק."
      primaryLabel="בואו נדבר"
    />
  )
}

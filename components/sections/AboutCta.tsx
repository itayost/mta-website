import { Calendar } from 'lucide-react'
import { CtaSection } from './CtaSection'

export function AboutCta() {
  return (
    <CtaSection
      icon={Calendar}
      title="רוצים להכיר אותנו? הפגישה הראשונה עלינו"
      body="נשמח לעמוד לרשותכם וללוות אתכם במקצועיות ובביטחון."
      primaryLabel="קבעו פגישה"
    />
  )
}

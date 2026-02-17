import { Calendar } from 'lucide-react'
import { CtaSection } from './CtaSection'

export function AboutCta() {
  return (
    <CtaSection
      icon={Calendar}
      title="רוצים להכיר אותנו? הפגישה הראשונה עלינו"
      body="בואו לשיחה קצרה ונבין יחד מה הצרכים שלכם — ללא התחייבות."
      primaryLabel="קבעו פגישה"
    />
  )
}

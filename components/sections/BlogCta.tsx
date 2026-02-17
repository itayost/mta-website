import { BookOpen } from 'lucide-react'
import { CtaSection } from './CtaSection'

export function BlogCta() {
  return (
    <CtaSection
      icon={BookOpen}
      title="רוצים ייעוץ מותאם אישית?"
      body="המאמרים שלנו נותנים מידע כללי. לפתרון מדויק למצב שלכם — בואו לפגישה חינם."
      primaryLabel="פגישת ייעוץ חינם"
    />
  )
}

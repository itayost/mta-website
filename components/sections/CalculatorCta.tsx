import { TrendingDown } from 'lucide-react'
import { CtaSection } from './CtaSection'

export function CalculatorCta() {
  return (
    <CtaSection
      icon={TrendingDown}
      title="רוצים לשלם פחות מס?"
      body="תכנון מס חכם יכול לחסוך לכם אלפי שקלים בשנה. בואו לפגישה ונבדוק יחד — ללא עלות."
      primaryLabel="פגישת ייעוץ חינם"
    />
  )
}

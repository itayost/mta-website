import { CtaSection } from './CtaSection'

export function CtaBanner() {
  return (
    <CtaSection
      title="אל תשאירו כסף על הרצפה."
      body="הצטרפו למאות עסקים שכבר נהנים מליווי פיננסי חכם, חוקי ומשתלם."
      primaryLabel="פגישת ייעוץ חינם"
      blueGradient
      headingClassName="text-3xl sm:text-4xl lg:text-5xl"
      trustItems={['ללא התחייבות', 'תוך שעתיים', 'חינם לחלוטין']}
    />
  )
}

import { CtaSection } from './CtaSection'

export function CtaBanner() {
  return (
    <CtaSection
      title="רוצים לדעת כמה אתם יכולים לחסוך?"
      body="פגישת ייעוץ ראשונית ללא עלות. נשמח ללוות אתכם בכל צורך חשבונאי או מיסויי."
      primaryLabel="פגישת ייעוץ חינם"
      blueGradient
      headingClassName="text-3xl sm:text-4xl lg:text-5xl"
      trustItems={['ללא התחייבות', 'תוך שעתיים', 'חינם לחלוטין']}
    />
  )
}

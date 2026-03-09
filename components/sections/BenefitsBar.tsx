import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { LogoMotif } from '@/components/ui/LogoMotif'

const benefits = [
  {
    title: 'ייעוץ שוטף On-line',
    body: 'לא מחכים לביקורת סוף השנה. מלווים אותך בזמן אמת, מונעים טעויות וחוסכים כסף.',
  },
  {
    title: 'מחוברים ישירות לרשויות',
    body: 'קישור ישיר למערכות מס הכנסה, מע"מ וביטוח לאומי לטיפול מזורז והחזרי מס מהירים.',
  },
  {
    title: 'מעל 57 שנות ניסיון',
    body: 'שילוב מנצח של ותק, מקצוענות ודור המשך דינמי שמכיר את כל תחומי המשק.',
  },
]

export function BenefitsBar() {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {benefits.map(({ title, body }, i) => (
            <AnimateOnScroll key={title} preset="fade-in-up" delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center sm:items-start text-center sm:text-start bg-bg-card">
                <LogoMotif opacity={0.15} className="hidden sm:block absolute top-0 end-0 w-16 h-20 -translate-y-2 translate-x-2" />
                <span className="hidden sm:block text-sm font-medium text-text-muted/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="hidden sm:block my-5 h-px bg-text-muted/10" />
                <h3 className="text-base sm:text-xl font-bold text-text-primary">{title}</h3>
                <p className="hidden sm:block mt-3 text-sm leading-relaxed text-text-muted">{body}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}

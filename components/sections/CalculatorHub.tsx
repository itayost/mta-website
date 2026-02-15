import { Receipt, Percent, Banknote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const calculators = [
  {
    icon: Receipt,
    title: 'מחשבון מע״מ',
    description: 'הוסיפו או הסירו מע״מ מכל סכום בלחיצה.',
    href: '#vat',
    color: 'text-accent bg-accent/10',
  },
  {
    icon: Percent,
    title: 'מחשבון מס הכנסה',
    description: 'חשבו מס הכנסה חודשי לפי מדרגות 2025.',
    href: '#income-tax',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: Banknote,
    title: 'מחשבון שכר נטו',
    description: 'גלו כמה תקבלו נטו אחרי כל הניכויים.',
    href: '#net-salary',
    color: 'text-gold bg-gold/10',
  },
]

export function CalculatorHub() {
  return (
    <section className="py-12 sm:py-16 bg-bg-surface">
      <Container>
        <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
          {calculators.map((calc) => (
            <StaggerItem key={calc.title}>
              <a
                href={calc.href}
                className="group flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              >
                <div className={`flex size-12 items-center justify-center rounded-xl ${calc.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  <calc.icon className="size-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                    {calc.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {calc.description}
                  </p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

import { ArrowLeftRight, Home, RefreshCcw, TrendingUp, PiggyBank } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const calculators = [
  {
    icon: RefreshCcw,
    title: 'המרת מטבעות',
    description: 'המירו בין מטבעות לפי שערים יומיים.',
    href: '#currency-converter',
    color: 'text-accent bg-accent/10',
  },
  {
    icon: ArrowLeftRight,
    title: 'שערי חליפין',
    description: 'שערי מטבע יומיים מבנק ישראל.',
    href: '#exchange-rates',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: Home,
    title: 'מחשבון משכנתא',
    description: 'חשבו החזר חודשי לפי ריבית בנק ישראל.',
    href: '#mortgage',
    color: 'text-accent bg-accent/10',
  },
  {
    icon: PiggyBank,
    title: 'מחשבון חיסכון',
    description: 'חשבו ריבית דריבית על הפקדות.',
    href: '#savings',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: TrendingUp,
    title: 'מחשבון אינפלציה',
    description: 'בדקו כמה שווה הכסף שלכם לאורך זמן.',
    href: '#inflation',
    color: 'text-accent bg-accent/10',
  },
]

export function CalculatorHub() {
  return (
    <section className="py-12 sm:py-16 bg-bg-surface">
      <Container>
        <StaggerChildren className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {calculators.map((calc) => (
            <StaggerItem key={calc.title}>
              <a
                href={calc.href}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 rounded-2xl bg-bg-card p-4 sm:p-5 text-center sm:text-start transition-all duration-300 hover:bg-primary/5 hover:-translate-y-1 h-full"
              >
                <div className={`flex size-10 sm:size-12 items-center justify-center rounded-xl ${calc.color} shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                  <calc.icon className="size-5 sm:size-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                    {calc.title}
                  </h3>
                  <p className="hidden sm:block text-xs text-text-muted leading-relaxed">
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

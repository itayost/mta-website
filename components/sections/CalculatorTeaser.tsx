import Link from 'next/link'
import { Calculator, Receipt, TrendingDown, Wallet, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const calculators = [
  {
    icon: Receipt,
    title: 'מחשבון מע״מ',
    description: 'חישוב מע״מ כולל ולא כולל בקלות',
    href: '/calculators#vat',
    color: 'text-accent bg-accent/10',
  },
  {
    icon: TrendingDown,
    title: 'מחשבון מס הכנסה',
    description: 'מדרגות מס 2025 וחישוב חבות שנתית',
    href: '/calculators#income-tax',
    color: 'text-primary bg-primary/10',
  },
  {
    icon: Wallet,
    title: 'מחשבון שכר נטו',
    description: 'ברוטו לנטו כולל כל הניכויים',
    href: '/calculators#net-salary',
    color: 'text-primary bg-primary/10',
  },
]

export function CalculatorTeaser() {
  return (
    <section className="py-16 sm:py-24 bg-bg-surface">
      <Container>
        <SectionHeading
          title="כלים חינמיים לחישובי מס"
          subtitle="חשבו, תכננו וחסכו — מחשבונים מקצועיים ללא עלות"
        />

        <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-3xl mx-auto mb-10">
          {calculators.map((calc) => (
            <StaggerItem key={calc.title}>
              <Link
                href={calc.href}
                className="group flex flex-col items-center gap-3 rounded-2xl bg-bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`flex size-12 items-center justify-center rounded-xl ${calc.color} transition-transform duration-300 group-hover:scale-110`}>
                  <calc.icon className="size-6" />
                </div>
                <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                  {calc.title}
                </h3>
                <p className="text-sm text-text-muted/70 leading-relaxed">
                  {calc.description}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="text-center">
          <Link
            href="/calculators"
            className="inline-flex items-center gap-2 rounded-full border border-text-muted/30 px-6 py-3 text-base font-semibold text-text-primary hover:bg-primary/5 transition-all"
          >
            <Calculator className="size-5" />
            <span>לכל המחשבונים</span>
            <ArrowLeft className="size-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

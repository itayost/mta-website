import Link from 'next/link'
import { Calculator, ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'

export function BlogCalculatorCrosslink() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <AnimateOnScroll preset="fade-in-up">
          <Link
            href="/calculators"
            className="group flex items-center gap-5 max-w-2xl mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
          >
            <div className="flex size-14 items-center justify-center rounded-2xl bg-gold/10 shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Calculator className="size-7 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">
                חשבתם כמה מס אתם משלמים?
              </h3>
              <p className="text-sm text-text-muted">
                נסו את המחשבונים החינמיים שלנו — מס הכנסה, שכר נטו ומע״מ, מעודכנים ל-2025.
              </p>
            </div>
            <ArrowLeft className="size-5 text-text-muted shrink-0 group-hover:text-primary transition-colors" />
          </Link>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}

import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'

interface MidPageCtaProps {
  title?: string
  body?: string
  primaryLabel?: string
  className?: string
}

export function MidPageCta({
  title = 'רוצים לשמוע איך אנחנו יכולים לעזור?',
  body = 'השאירו פרטים ונחזור אליכם תוך שעתיים עם תוכנית מותאמת.',
  primaryLabel = 'לפגישת ייעוץ חינם',
  className,
}: MidPageCtaProps) {
  return (
    <section className={className}>
      <Container>
        <AnimateOnScroll preset="fade-in-up">
          <div className="rounded-2xl bg-bg-card px-6 py-8 sm:px-12 sm:py-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-text-primary">
              {title}
            </h2>
            <p className="mt-3 text-base font-light leading-relaxed text-text-muted max-w-lg mx-auto">
              {body}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                <span>{primaryLabel}</span>
                <ArrowLeft className="size-5" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-text-muted/20 px-6 py-3 text-base font-semibold text-text-primary hover:bg-bg-surface transition-colors"
              >
                <Phone className="size-5" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}

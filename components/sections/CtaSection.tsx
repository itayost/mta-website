import { Fragment } from 'react'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'
import { cn } from '@/lib/utils'

interface CtaSectionProps {
  icon?: LucideIcon
  title: string
  body: string
  primaryLabel: string
  trustItems?: string[]
  blueGradient?: boolean
  headingClassName?: string
  sectionClassName?: string
}

export function CtaSection({
  icon: Icon,
  title,
  body,
  primaryLabel,
  trustItems,
  blueGradient,
  headingClassName = 'text-3xl sm:text-4xl',
  sectionClassName = 'py-16 sm:py-24',
}: CtaSectionProps) {
  return (
    <section className={sectionClassName}>
      <Container>
        <AnimateOnScroll preset="fade-in">
          <div className="relative overflow-hidden rounded-3xl bg-bg-surface px-8 py-12 sm:px-16 sm:py-16 text-center">
            <div
              className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-primary/5 blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative">
              {Icon && (
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="size-8 text-primary" />
                </div>
              )}

              <h2
                className={cn(
                  'font-extrabold',
                  headingClassName,
                  blueGradient
                    ? 'text-gradient-blue'
                    : 'bg-gradient-to-l from-text-primary to-text-muted bg-clip-text text-transparent'
                )}
              >
                {title}
              </h2>
              <p className="mt-4 font-light text-lg text-text-muted max-w-xl mx-auto">
                {body}
              </p>

              {trustItems && trustItems.length > 0 && (
                <div className="mt-6 flex justify-center gap-6 text-sm text-text-muted/60">
                  {trustItems.map((item, i) => (
                    <Fragment key={item}>
                      {i > 0 && <span className="text-text-muted/20">|</span>}
                      <span>{item}</span>
                    </Fragment>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <span>{primaryLabel}</span>
                  <ArrowLeft className="size-5" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-text-muted/30 px-6 py-3.5 text-base font-semibold text-text-primary hover:bg-primary/5 transition-all"
                >
                  <Phone className="size-5" />
                  <span>{contactInfo.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}

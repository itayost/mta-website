import { Fragment } from 'react'
import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'
import { cn } from '@/lib/utils'
import { LogoMotif } from '@/components/ui/LogoMotif'

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
          <div className="relative overflow-hidden rounded-3xl bg-bg-surface px-5 py-10 sm:px-16 sm:py-16 text-center">
            <LogoMotif opacity={0.1} className="absolute top-1/4 start-0 w-48 h-64 -rotate-12" />
            <LogoMotif opacity={0.08} className="absolute bottom-1/4 end-0 w-40 h-56 rotate-6" />

            <div className="relative">
              {Icon && (
                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="size-8 text-primary" />
                </div>
              )}

              <h2
                className={cn(
                  'font-extrabold tracking-tight leading-tight',
                  headingClassName,
                  blueGradient
                    ? 'text-gradient-blue'
                    : 'bg-gradient-to-l from-text-primary to-text-muted bg-clip-text text-transparent'
                )}
              >
                {title}
              </h2>
              <p className="mt-4 font-light text-lg leading-relaxed text-text-muted max-w-xl mx-auto">
                {body}
              </p>

              {trustItems && trustItems.length > 0 && (
                <div className="mt-5 flex justify-center gap-3 sm:gap-6 text-sm text-text-muted/60">
                  {trustItems.map((item, i) => (
                    <Fragment key={item}>
                      {i > 0 && <span className="text-text-muted/20">|</span>}
                      <span>{item}</span>
                    </Fragment>
                  ))}
                </div>
              )}

              <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all"
                >
                  <span>{primaryLabel}</span>
                  <ArrowLeft className="size-5" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border border-text-muted/30 px-5 py-3 text-sm sm:px-6 sm:py-3.5 sm:text-base font-semibold text-text-primary hover:bg-primary/5 transition-all"
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

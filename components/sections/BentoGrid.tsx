'use client'

import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'
import { featuredServices } from '@/data/services'

/* Bento span overrides per card index (6 featured services).
   Row 1: card 0 spans 2 cols, card 1 spans 1 col
   Row 2: card 2 spans 1 col, card 3 spans 2 cols
   Row 3: card 4 spans 2 cols, card 5 spans 1 col */
const bentoSpans: Record<number, string> = {
  0: 'sm:col-span-2',
  3: 'sm:col-span-2',
  4: 'sm:col-span-2 lg:col-span-1',
  5: 'lg:col-span-2',
}

export function BentoGrid() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="השירותים שלנו"
          subtitle="מגוון שירותים מקצועיים לעצמאים, שכירים וחברות"
          id="services-heading"
        />

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          aria-labelledby="services-heading"
        >
          {featuredServices.map((service, i) => (
            <AnimateOnScroll
              key={service.id}
              preset="fade-in-up"
              delay={i * 0.08}
              className={bentoSpans[i] ?? ''}
            >
              <div className="rounded-2xl p-8 h-full flex flex-col bg-bg-card text-text-primary">
                <span className="text-sm font-medium text-text-muted/50">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="my-5 h-px bg-text-muted/10" />

                <h3 className="text-xl font-bold">{service.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cn } from '@/lib/utils'
import { featuredServices } from '@/data/services'
import { LogoMotif } from '@/components/ui/LogoMotif'

/* Bento span overrides per card index (6 featured services).
   sm (2-col): card 0 spans full width
   lg (3-col): cards 0 & 3 span 2 cols, card 5 spans 2 cols */
const bentoSpans: Record<number, string> = {
  0: 'sm:col-span-2 lg:col-span-2',
  3: 'lg:col-span-2',
  5: 'lg:col-span-2',
}

export function BentoGrid() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <Container>
        <SectionHeading
          title="הפתרון הפיננסי המלא לעסק שלך"
          subtitle="בין אם אתה יזם בתחילת הדרך או חברה ותיקה, אנחנו מתאימים את השירות בדיוק למידות שלך."
          id="services-heading"
        />

        <div
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3"
          aria-labelledby="services-heading"
        >
          {featuredServices.map((service, i) => (
            <AnimateOnScroll
              key={service.id}
              preset="fade-in-up"
              delay={i * 0.08}
              className={bentoSpans[i] ?? ''}
            >
              <Link href={`/services/${service.id}`} className="block h-full">
                <div className="relative overflow-hidden rounded-2xl p-4 sm:p-8 h-full flex flex-col items-center sm:items-start text-center sm:text-start bg-bg-card text-text-primary hover:bg-bg-surface transition-all duration-300">
                  <LogoMotif opacity={0.15} className="hidden sm:block absolute top-0 end-0 w-16 h-20 -translate-y-2 translate-x-2" />
                  <span className="hidden sm:block text-sm font-medium text-text-muted/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="hidden sm:block my-5 h-px bg-text-muted/10" />

                  <h3 className="text-base sm:text-xl font-bold">{service.title}</h3>

                  <p className="hidden sm:block mt-3 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            <span>לכל השירותים</span>
            <ArrowLeft className="size-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

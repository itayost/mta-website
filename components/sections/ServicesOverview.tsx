import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { ServiceCard } from './ServiceCard'
import { featuredServices, services } from '@/data/services'

export function ServicesOverview() {
  const primaryServices = featuredServices.slice(0, 3)
  const remainingServices = services.filter(
    (s) => !primaryServices.some((p) => p.id === s.id)
  )

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <AnimateOnScroll preset="fade-in-up">
          <SectionHeading
            title="השירותים שלנו"
            subtitle="מגוון רחב של שירותי חשבונאות, מיסוי וייעוץ פיננסי"
          />
        </AnimateOnScroll>

        {/* Primary 3 services -- large cards */}
        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {primaryServices.map((service) => (
            <StaggerItem key={service.id}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Remaining services as compact pills */}
        <AnimateOnScroll preset="fade-in">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {remainingServices.map((service) => (
              <span
                key={service.id}
                className="inline-flex items-center rounded-full bg-bg-surface px-3.5 py-1.5 text-sm text-text-muted hover:bg-bg-card hover:text-text-primary transition-colors"
              >
                {service.title}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll preset="fade-in">
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-text-muted/30 px-6 py-3 text-base font-semibold text-text-primary hover:bg-primary/5 transition-all"
            >
              <span>לכל 17 השירותים</span>
              <ArrowLeft className="size-5" />
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}

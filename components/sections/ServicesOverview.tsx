import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from './ServiceCard'
import { featuredServices } from '@/data/services'

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="השירותים שלנו"
          subtitle="מגוון רחב של שירותי חשבונאות, מיסוי וייעוץ פיננסי"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <span>לכל השירותים</span>
            <ArrowLeft className="size-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

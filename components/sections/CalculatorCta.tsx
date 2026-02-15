import Link from 'next/link'
import { TrendingDown, ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'

export function CalculatorCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <AnimateOnScroll preset="fade-in">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-navy-700 via-navy-800 to-navy-900 px-8 py-12 sm:px-16 sm:py-16 text-center">
            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
                <TrendingDown className="size-8 text-primary" />
              </div>

              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                רוצים לשלם פחות מס?
              </h2>
              <p className="mt-4 font-light text-lg text-text-muted max-w-xl mx-auto">
                תכנון מס חכם יכול לחסוך לכם אלפי שקלים בשנה. בואו לפגישה ונבדוק יחד — ללא עלות.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-bg-main shadow-lg shadow-primary/25 hover:bg-primary-dark hover:text-white transition-all active:scale-[0.98]"
                >
                  <span>פגישת ייעוץ חינם</span>
                  <ArrowLeft className="size-5" />
                </Link>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-text-primary hover:bg-white/10 transition-all"
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

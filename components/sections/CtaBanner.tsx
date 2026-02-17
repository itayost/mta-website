import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-bg-surface px-8 py-12 sm:px-16 sm:py-16 text-center">
          {/* Radial glow */}
          <div
            className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-primary/5 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <AnimateOnScroll preset="fade-in">
            <div className="relative">
              <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                <span className="text-gradient-blue">רוצים לדעת כמה אתם יכולים לחסוך?</span>
              </h2>
              <p className="mt-4 text-lg text-text-muted max-w-xl mx-auto">
                פגישת ייעוץ ראשונית ללא עלות. נשמח ללוות אתכם בכל צורך חשבונאי או מיסויי.
              </p>

              <div className="mt-6 flex justify-center gap-6 text-sm text-text-muted/60">
                <span>ללא התחייבות</span>
                <span className="text-text-muted/20">|</span>
                <span>תוך שעתיים</span>
                <span className="text-text-muted/20">|</span>
                <span>חינם לחלוטין</span>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3.5 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-all active:scale-[0.98]"
                >
                  <span>פגישת ייעוץ חינם</span>
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
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}

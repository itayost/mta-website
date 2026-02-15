import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-navy-700 via-navy-800 to-navy-900 px-8 py-12 sm:px-16 sm:py-16 text-center">
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <AnimateOnScroll preset="fade-in">
            <div className="relative">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
                רוצים לדעת כמה אתם יכולים לחסוך?
              </h2>
              <p className="mt-4 font-light text-lg text-text-muted max-w-xl mx-auto">
                פגישת ייעוץ ראשונית ללא עלות. נשמח ללוות אתכם בכל צורך חשבונאי או מיסויי.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-bg-main shadow-lg shadow-primary/25 hover:bg-primary-dark hover:text-white transition-all active:scale-[0.98] backdrop-blur-sm"
                >
                  <span>צרו קשר</span>
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
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  )
}

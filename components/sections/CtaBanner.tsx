import Link from 'next/link'
import { ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { contactInfo } from '@/data/contact'

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-bl from-primary-700 via-primary-800 to-primary-900 px-8 py-12 sm:px-16 sm:py-16 text-center">
          {/* Dot pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
              רוצים לדעת כמה אתם יכולים לחסוך?
            </h2>
            <p className="mt-4 font-light text-lg text-primary-100 max-w-xl mx-auto">
              פגישת ייעוץ ראשונית ללא עלות. נשמח ללוות אתכם בכל צורך חשבונאי או מיסויי.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent-500/25 hover:bg-accent-600 transition-all active:scale-[0.98] backdrop-blur-sm"
              >
                <span>צרו קשר</span>
                <ArrowLeft className="size-5" />
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                <Phone className="size-5" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

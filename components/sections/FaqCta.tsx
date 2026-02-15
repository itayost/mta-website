import Link from 'next/link'
import { MessageCircle, ArrowLeft, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'

export function FaqCta() {
  return (
    <section className="py-16 sm:py-20 bg-bg-surface">
      <Container>
        <AnimateOnScroll preset="fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-5">
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10">
                <MessageCircle className="size-8 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
              לא מצאתם תשובה?
            </h2>
            <p className="text-text-muted mb-8 max-w-md mx-auto">
              צוות המשרד ישמח לענות על כל שאלה. פנו אלינו ונחזור אליכם תוך שעתיים.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-bg-main shadow-lg shadow-primary/25 hover:bg-primary-dark hover:text-white transition-all active:scale-[0.98]"
              >
                <span>השאירו פרטים</span>
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
      </Container>
    </section>
  )
}

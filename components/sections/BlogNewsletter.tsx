'use client'

import { Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { AnimateOnScroll } from '@/components/ui/motion'

export function BlogNewsletter() {
  return (
    <section className="py-12 sm:py-16 bg-bg-surface">
      <Container>
        <AnimateOnScroll preset="fade-in">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                <Mail className="size-7 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl font-extrabold text-text-primary mb-2">
              טיפים לחיסכון במס — ישירות למייל
            </h2>
            <p className="text-text-muted mb-6 text-sm">
              הצטרפו למאות לקוחות שמקבלים עדכונים על שינויי חקיקה, מועדי הגשה וטיפים פרקטיים.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                dir="ltr"
                className="flex-1 rounded-full border border-text-muted/10 bg-bg-card px-4 py-3 text-text-primary placeholder:text-text-muted/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 text-base font-semibold text-bg-main hover:bg-primary-dark hover:text-white transition-all active:scale-[0.98] shrink-0"
              >
                הרשמו
              </button>
            </form>
            <p className="text-xs text-text-muted/40 mt-3">ללא ספאם. ביטול בכל עת.</p>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}

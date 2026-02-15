import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { PageTransition } from '@/components/ui/motion'

export default function NotFound() {
  return (
    <PageTransition>
      <Container className="py-24 sm:py-32 text-center">
        <h1 className="text-8xl font-black text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-text-primary mb-4">העמוד לא נמצא</h2>
        <p className="text-lg text-text-muted mb-8 max-w-md mx-auto">
          העמוד שחיפשתם אינו קיים או שהקישור שגוי. אנא חזרו לדף הבית.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-bg-main shadow-md hover:bg-primary-dark hover:text-white hover:shadow-lg transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-bg-main"
        >
          חזרה לדף הבית
        </Link>
      </Container>
    </PageTransition>
  )
}

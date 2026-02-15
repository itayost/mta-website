import Link from 'next/link'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32 text-center">
      <h1 className="text-8xl font-black text-primary-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-neutral-900 mb-4">העמוד לא נמצא</h2>
      <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
        העמוד שחיפשתם אינו קיים או שהקישור שגוי. אנא חזרו לדף הבית.
      </p>
      <Link
        href="/"
        className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary-700 hover:shadow-lg transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      >
        חזרה לדף הבית
      </Link>
    </Container>
  )
}

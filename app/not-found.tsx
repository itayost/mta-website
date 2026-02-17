import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { PageTransition } from '@/components/ui/motion'

const helpfulLinks = [
  { href: '/services', label: 'שירותים' },
  { href: '/contact', label: 'צור קשר' },
  { href: '/about', label: 'אודות' },
  { href: '/blog', label: 'מרכז הידע' },
]

export default function NotFound() {
  return (
    <PageTransition>
      <section className="relative overflow-hidden bg-bg-main py-24 sm:py-32">
        <Container className="relative text-center">
          <h1 className="text-8xl font-black text-primary mb-4 animate-float">404</h1>
          <h2 className="text-3xl font-bold text-text-primary mb-4">העמוד לא נמצא</h2>
          <p className="text-lg text-text-muted mb-10 max-w-md mx-auto">
            העמוד שחיפשתם אינו קיים או שהקישור שגוי. אנא חזרו לדף הבית.
          </p>

          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-bg-main hover:bg-primary-dark hover:text-white transition-all active:scale-[0.98] mb-12"
          >
            חזרה לדף הבית
          </Link>

          {/* Helpful links */}
          <Card className="max-w-md mx-auto">
            <p className="text-sm font-medium text-text-muted mb-4">אולי חיפשתם:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full bg-bg-surface px-4 py-2 text-sm font-semibold text-text-primary hover:bg-primary/5 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Card>
        </Container>
      </section>
    </PageTransition>
  )
}

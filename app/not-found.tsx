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
      <section className="relative overflow-hidden bg-gradient-to-bl from-navy-900 via-navy-800 to-navy-950 py-24 sm:py-32">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        <Container className="relative text-center">
          <h1 className="text-8xl font-black text-primary mb-4 animate-float">404</h1>
          <h2 className="text-3xl font-bold text-text-primary mb-4">העמוד לא נמצא</h2>
          <p className="text-lg text-text-muted mb-10 max-w-md mx-auto">
            העמוד שחיפשתם אינו קיים או שהקישור שגוי. אנא חזרו לדף הבית.
          </p>

          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-base font-semibold text-bg-main shadow-md shadow-primary/20 hover:bg-primary-dark hover:text-white hover:shadow-lg transition-all active:scale-[0.98] btn-shimmer mb-12"
          >
            חזרה לדף הבית
          </Link>

          {/* Helpful links */}
          <Card glass className="max-w-md mx-auto">
            <p className="text-sm font-medium text-text-muted mb-4">אולי חיפשתם:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-text-primary hover:bg-white/10 transition-all"
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

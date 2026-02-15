import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { mainNavItems } from '@/data/navigation'
import { contactInfo } from '@/data/contact'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-l from-primary-600 via-accent-500 to-primary-600" />

      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">משרד מזון</h3>
            <p className="text-neutral-400 leading-relaxed">
              משרד רואי חשבון ויועצי מס ותיק בחיפה. מעל 40 שנות ניסיון בליווי עצמאים,
              שכירים וחברות בכל תחומי המיסוי והחשבונאות.
            </p>
            <p className="mt-4 text-sm text-neutral-500">
              רישיון רואה חשבון מס&apos; 7890 | חבר לשכת רואי חשבון בישראל
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">קישורים</h3>
            <nav className="flex flex-col gap-2" aria-label="ניווט תחתון">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors hover:translate-x-[-2px] inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">צרו קשר</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-neutral-800 group-hover:bg-primary-600 transition-colors">
                  <Phone className="size-4" />
                </div>
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors group"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-neutral-800 group-hover:bg-primary-600 transition-colors">
                  <Mail className="size-4" />
                </div>
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-400">
                <div className="flex size-9 items-center justify-center rounded-lg bg-neutral-800 shrink-0">
                  <MapPin className="size-4" />
                </div>
                <span>{contactInfo.address.full}</span>
              </div>
              <div className="mt-2 text-sm text-neutral-500">
                {contactInfo.hours.map((h) => (
                  <p key={h.label}>
                    {h.label}: {h.display}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} משרד מזון – רואי חשבון ויועצי מס. כל הזכויות שמורות.</p>
        </div>
      </Container>
    </footer>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { mainNavItems } from '@/data/navigation'
import { contactInfo } from '@/data/contact'

export function Footer() {
  return (
    <footer className="bg-bg-surface text-text-muted">
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg font-bold text-text-primary">מזון ייעוץ מס</span>
            </div>
            <p className="text-text-muted leading-relaxed">
              משרד יועצי מס מוסמכים ותיק בחיפה. מעל 50 שנות ניסיון בליווי עצמאים,
              שכירים וחברות בכל תחומי המיסוי והחשבונאות.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-4">קישורים</h3>
            <nav className="flex flex-col gap-2" aria-label="ניווט תחתון">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-muted hover:text-primary transition-colors inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-text-primary mb-4">צרו קשר</h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors group"
              >
                <div className="flex size-9 items-center justify-center rounded-full bg-bg-card group-hover:bg-primary/10 transition-colors">
                  <Phone className="size-4" />
                </div>
                <span>{contactInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-text-muted">
                <div className="flex size-9 items-center justify-center rounded-full bg-bg-card shrink-0">
                  <Mail className="size-4" />
                </div>
                <div className="flex flex-col">
                  {contactInfo.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3 text-text-muted">
                <div className="flex size-9 items-center justify-center rounded-full bg-bg-card shrink-0">
                  <MapPin className="size-4" />
                </div>
                <span>{contactInfo.address.full}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 sm:mt-12 sm:pt-8 border-t border-text-muted/10 text-center text-sm text-text-muted/50">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Link href="/accessibility" className="hover:text-primary transition-colors">
              הצהרת נגישות
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              מדיניות פרטיות
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} מזון ייעוץ מס – יועצי מס מוסמכים. כל הזכויות שמורות.</p>
        </div>
      </Container>
    </footer>
  )
}

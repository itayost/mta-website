'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Phone, Menu } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { MobileNav } from './MobileNav'
import { mainNavItems } from '@/data/navigation'
import { contactInfo } from '@/data/contact'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-sm'
            : 'bg-white'
        )}
      >
        {/* Accent top bar */}
        <div className="h-0.5 bg-gradient-to-l from-primary-600 via-accent-500 to-primary-600" />

        <Container className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-primary-700">
            משרד מזון
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="ניווט ראשי">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-neutral-700 rounded-lg hover:text-primary-600 hover:bg-primary-50 transition-colors after:absolute after:bottom-0 after:inset-x-3 after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-center"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${contactInfo.phone}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2.5 text-sm font-medium text-white shadow-md hover:bg-primary-700 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <Phone className="size-4" />
              <span>{contactInfo.phone}</span>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="sm:hidden inline-flex items-center justify-center rounded-lg bg-primary-600 p-3 text-white hover:bg-primary-700 transition-colors"
              aria-label="התקשרו אלינו"
            >
              <Phone className="size-5" />
            </a>
            <button
              ref={hamburgerRef}
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-lg p-3 text-neutral-700 hover:bg-neutral-100 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="פתח תפריט"
              aria-expanded={mobileOpen}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => {
          setMobileOpen(false)
          hamburgerRef.current?.focus()
        }}
      />
    </>
  )
}

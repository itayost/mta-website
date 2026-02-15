'use client'

import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { X, Phone } from 'lucide-react'
import { mainNavItems } from '@/data/navigation'
import { contactInfo } from '@/data/contact'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab') {
        const drawer = drawerRef.current
        if (!drawer) return
        const focusable = drawer.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      // Focus close button on open
      requestAnimationFrame(() => closeRef.current?.focus())
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, handleKeyDown])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="תפריט ניווט"
        className={cn(
          'fixed inset-block-0 inset-inline-start-0 z-50 w-80 max-w-[85vw] bg-bg-surface shadow-2xl transition-transform duration-300 ease-out lg:hidden',
          open
            ? 'translate-x-0'
            : 'ltr:translate-x-full rtl:-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/5">
          <span className="text-xl font-bold text-text-primary">משרד מזון</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="rounded-lg p-2.5 text-text-muted hover:bg-white/5 transition-colors"
            aria-label="סגור תפריט"
          >
            <X className="size-6" />
          </button>
        </div>

        <nav className="p-4 space-y-1" aria-label="ניווט ראשי">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block rounded-lg px-4 py-3 text-base font-medium text-text-muted hover:bg-white/5 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary px-4 py-3 text-base font-semibold text-bg-main hover:bg-primary-dark hover:text-white transition-colors"
          >
            <Phone className="size-5" />
            <span>{contactInfo.phone}</span>
          </a>
        </div>
      </div>
    </>
  )
}

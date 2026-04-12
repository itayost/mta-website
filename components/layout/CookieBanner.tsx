'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { getConsent, setConsent } from '@/lib/consent'
import { cn } from '@/lib/utils'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (getConsent() === null) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (visible) {
      bannerRef.current?.focus()
    }
  }, [visible])

  const handleAccept = () => {
    setConsent('accepted')
    setVisible(false)
    window.dispatchEvent(new Event('consent-updated'))
  }

  const handleDecline = () => {
    setConsent('declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={bannerRef}
          role="dialog"
          aria-label="הודעת עוגיות"
          tabIndex={-1}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            'fixed bottom-0 inset-x-0 z-50',
            'bg-bg-card border-t border-border-subtle'
          )}
        >
          <div
            className={cn(
              'max-w-4xl mx-auto px-4 py-4',
              'flex flex-col sm:flex-row items-center gap-4'
            )}
          >
            <p className="text-text-primary text-sm leading-relaxed text-center sm:text-start flex-1">
              אתר זה משתמש בעוגיות לצורך ניתוח סטטיסטי ושיפור חווית הגלישה.
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={handleAccept}
                className={cn(
                  'bg-primary text-white hover:bg-primary-dark',
                  'rounded-full font-semibold px-6 py-2 text-sm',
                  'transition-colors duration-200'
                )}
              >
                אישור
              </button>
              <button
                onClick={handleDecline}
                className={cn(
                  'bg-bg-surface text-text-primary hover:bg-text-muted/10',
                  'rounded-full font-semibold px-6 py-2 text-sm',
                  'transition-colors duration-200'
                )}
              >
                דחייה
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

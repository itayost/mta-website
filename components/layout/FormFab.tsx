'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Send, X } from 'lucide-react'
import { ContactFormBody } from '@/components/sections/ContactFormBody'

export function FormFab() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const fabRef = useRef<HTMLButtonElement>(null)

  const close = useCallback(() => {
    setIsOpen(false)
    requestAnimationFrame(() => fabRef.current?.focus())
  }, [])

  // Escape key + focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        return
      }
      if (e.key === 'Tab') {
        const dialog = dialogRef.current
        if (!dialog) return
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'input:not([tabindex="-1"]), button, a[href], [tabindex]:not([tabindex="-1"])'
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
    [close]
  )

  // Body scroll lock + keyboard handler
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyDown)
      requestAnimationFrame(() => {
        const firstInput = dialogRef.current?.querySelector<HTMLElement>('input:not([tabindex="-1"])')
        firstInput?.focus()
      })
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  return (
    <>
      {/* FAB Button - 44px+ touch target, cursor-pointer, touch-manipulation */}
      <motion.button
        ref={fabRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-4 end-4 z-30 flex size-14 items-center justify-center rounded-full bg-primary text-white cursor-pointer touch-manipulation transition-colors duration-200 hover:bg-primary-dark"
        aria-label="פתחו טופס יצירת קשר"
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="size-7" />
            </motion.span>
          ) : (
            <motion.span
              key="send"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Send className="size-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Dialog popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop - bg-black/40 */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              aria-hidden="true"
            />

            {/* Desktop: transparent click-outside overlay */}
            <div
              className="fixed inset-0 z-40 hidden sm:block"
              onClick={close}
              aria-hidden="true"
            />

            {/* Form card - mobile: bottom sheet, desktop: floating card above FAB */}
            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-label="טופס יצירת קשר"
              className="fixed z-50 bg-bg-card
                inset-x-0 bottom-0 rounded-t-2xl p-5
                sm:inset-x-auto sm:bottom-20 sm:end-4 sm:w-[360px] sm:rounded-2xl sm:p-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-bold text-text-primary">צרו איתנו קשר</h2>
                  <p className="text-xs text-text-muted mt-0.5">ייעוץ ראשוני ללא עלות</p>
                </div>
                <button
                  type="button"
                  onClick={close}
                  className="flex size-10 items-center justify-center rounded-full text-text-muted hover:bg-bg-surface cursor-pointer touch-manipulation transition-colors duration-200"
                  aria-label="סגירה"
                >
                  <X className="size-5" />
                </button>
              </div>

              <ContactFormBody />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

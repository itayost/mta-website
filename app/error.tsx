'use client'

import { useEffect } from 'react'
import { Container } from '@/components/ui/Container'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Unhandled error:', error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-text-primary mb-4">
            משהו השתבש
          </h2>
          <p className="text-text-muted mb-8">
            אירעה שגיאה לא צפויה. אנא נסו שוב.
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white hover:bg-primary-dark transition-all"
          >
            נסו שוב
          </button>
        </div>
      </Container>
    </div>
  )
}

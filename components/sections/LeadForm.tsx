'use client'

import { ContactFormBody } from '@/components/sections/ContactFormBody'

export function LeadForm() {
  return (
    <div className="rounded-2xl bg-bg-card p-6">
      {/* Trust indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          ייעוץ ראשוני ללא עלות
        </span>
      </div>

      <ContactFormBody />
    </div>
  )
}

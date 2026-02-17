'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Loader2, CheckCircle, Shield } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas'

export function LeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('submitting')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="rounded-2xl bg-success/10 p-8 text-center animate-fade-in">
        <CheckCircle className="size-12 mx-auto text-success mb-4" />
        <h3 className="text-xl font-bold text-text-primary mb-2">הפנייה נשלחה בהצלחה!</h3>
        <p className="text-success/80">ניצור אתכם קשר בהקדם האפשרי.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-success underline hover:text-success/80"
        >
          שלחו פנייה נוספת
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-bg-card p-6">
      {/* Trust indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          ייעוץ ראשוני ללא עלות
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Honeypot */}
        <div className="absolute opacity-0 h-0 overflow-hidden" aria-hidden="true">
          <input type="text" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
        </div>

        <Input
          label="שם מלא"
          placeholder="הזינו את שמכם המלא"
          required
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        <Input
          label="טלפון"
          type="tel"
          placeholder="050-0000000"
          required
          error={errors.phone?.message}
          {...register('phone')}
        />

        <Input
          label="אימייל"
          type="email"
          placeholder="your@email.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <Textarea
          label="הודעה"
          placeholder="ספרו לנו במה נוכל לעזור..."
          error={errors.message?.message}
          {...register('message')}
        />

        {status === 'error' && (
          <p className="text-sm text-error" role="alert">
            אירעה שגיאה בשליחת הפנייה. אנא נסו שוב או התקשרו אלינו.
          </p>
        )}

        <Button type="submit" size="lg" className="w-full rounded-full" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <>
              <Loader2 className="size-5 animate-spin" />
              <span>שולח...</span>
            </>
          ) : (
            <>
              <Send className="size-5" />
              <span>שלחו פנייה</span>
            </>
          )}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-text-muted/60">
          <Shield className="size-3.5" />
          <span>המידע שלכם מאובטח</span>
        </p>
      </form>
    </div>
  )
}

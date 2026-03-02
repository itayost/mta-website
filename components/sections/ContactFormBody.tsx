'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send, Loader2, CheckCircle, Shield } from 'lucide-react'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { contactFormSchema, type ContactFormValues } from '@/lib/schemas'

interface ContactFormBodyProps {
  onSuccess?: () => void
}

export function ContactFormBody({ onSuccess }: ContactFormBodyProps) {
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
        onSuccess?.()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite" className="py-6 text-center animate-fade-in">
        <CheckCircle className="size-12 mx-auto text-success mb-4" />
        <h3 className="text-xl font-bold text-text-primary mb-2">הפנייה נשלחה בהצלחה!</h3>
        <p className="text-text-muted">ניצור אתכם קשר בהקדם האפשרי.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-primary underline hover:text-primary-dark cursor-pointer min-h-[44px] touch-manipulation"
        >
          שלחו פנייה נוספת
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
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
        inputMode="tel"
        placeholder="050-0000000"
        required
        error={errors.phone?.message}
        {...register('phone')}
      />

      <Input
        label="אימייל"
        type="email"
        inputMode="email"
        placeholder="your@email.com"
        error={errors.email?.message}
        {...register('email')}
      />

      {/* Privacy consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-primary rounded"
            {...register('consent')}
          />
          <span className="text-xs leading-relaxed text-text-muted">
            ידוע לי כי לא חלה עליי כל חובה חוקית למסור מידע אודותיי. במידה ולא אסכים למסור פרטיי, ידוע לי ואני מסכים/ה כי לא אוכל לקבל ייעוץ או שירות. בזאת אני נותן/ת הסכמתי לשימוש במידע אודותיי למטרת ייעוץ מס וקבלת שירות על ידי יועץ מס מוסמך, וכי מידע אודותיי יימסר לצדדי ג׳ הרלוונטיים לצורך מתן הייעוץ או השירות. ידוע לי כי בהתאם לסעיפים 13 ו-14 בחוק הגנת הפרטיות באפשרותי לעיין במידע אודותיי ולבקש לתקנו במידת הצורך. בעל השליטה במאגר המידע הינו מזון ייעוץ מס, טלפון{' '}
            <a href="tel:04-8660044" className="underline text-primary" dir="ltr">04-8660044</a>.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-sm text-error" role="alert">{errors.consent.message}</p>
        )}
      </div>

      {status === 'error' && (
        <p className="text-sm text-error" role="alert">
          אירעה שגיאה בשליחת הפנייה. אנא נסו שוב או התקשרו אלינו.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full rounded-full touch-manipulation" disabled={status === 'submitting'}>
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
  )
}

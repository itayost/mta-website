import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'יש להזין שם מלא (לפחות 2 תווים)')
    .max(100, 'השם ארוך מדי'),
  phone: z
    .string()
    .min(9, 'יש להזין מספר טלפון תקין')
    .max(15, 'מספר טלפון לא תקין')
    .regex(/^\+?[\d][\d\-\s\(\)]{7,14}$/, 'מספר טלפון לא תקין'),
  email: z
    .string()
    .email('כתובת אימייל לא תקינה')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .max(1000, 'ההודעה ארוכה מדי (עד 1000 תווים)')
    .optional()
    .or(z.literal('')),
  honeypot: z.string().max(0).optional(),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

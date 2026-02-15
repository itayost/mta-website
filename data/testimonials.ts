import type { Testimonial } from '@/types/testimonial'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'דוד כהן',
    role: 'בעל עסק, תחום המזון',
    content:
      'עובדים עם משרד מזון כבר 15 שנה. השירות מקצועי, אמין ותמיד זמין. הם חסכו לנו סכומים משמעותיים בתכנון מס חכם.',
    rating: 5,
    serviceCategoryId: 'tax',
  },
  {
    id: '2',
    name: 'רחל לוי',
    role: 'עצמאית, יועצת ארגונית',
    content:
      'כעצמאית, חשוב לי שמישהו מקצועי ידאג לצד הפיננסי. סמי ויוסי נותנים תחושת ביטחון ושקט נפשי לגבי כל נושאי המס.',
    rating: 5,
    serviceCategoryId: 'accounting',
  },
  {
    id: '3',
    name: 'משה אברהם',
    role: 'מנכ"ל, חברת היי-טק',
    content:
      'המשרד מלווה את החברה שלנו מיום הקמתה. הידע המעמיק שלהם במיסוי בינלאומי ובייעוץ עסקי היה קריטי לצמיחה שלנו.',
    rating: 5,
    serviceCategoryId: 'audit-consulting',
  },
  {
    id: '4',
    name: 'שרה ישראלי',
    role: 'שכירה',
    content:
      'קיבלתי החזר מס גדול שלא ידעתי שמגיע לי. ממליצה בחום על ייעוץ מס אישי במשרד מזון.',
    rating: 5,
    serviceCategoryId: 'tax',
  },
]

export function getTestimonialForCategory(categoryId: string): Testimonial | undefined {
  return testimonials.find((t) => t.serviceCategoryId === categoryId)
}

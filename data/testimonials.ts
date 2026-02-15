import type { Testimonial } from '@/types/testimonial'

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'דוד כהן',
    role: 'בעל עסק, תחום המזון',
    content:
      'עובדים עם משרד מזון כבר 15 שנה. השירות מקצועי, אמין ותמיד זמין. הם חסכו לנו סכומים משמעותיים בתכנון מס חכם.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    serviceCategoryId: 'tax',
  },
  {
    id: '2',
    name: 'רחל לוי',
    role: 'עצמאית, יועצת ארגונית',
    content:
      'כעצמאית, חשוב לי שמישהו מקצועי ידאג לצד הפיננסי. סמי ויוסי נותנים תחושת ביטחון ושקט נפשי לגבי כל נושאי המס.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    serviceCategoryId: 'accounting',
  },
  {
    id: '3',
    name: 'משה אברהם',
    role: 'מנכ"ל, חברת היי-טק',
    content:
      'המשרד מלווה את החברה שלנו מיום הקמתה. הידע המעמיק שלהם במיסוי בינלאומי ובייעוץ עסקי היה קריטי לצמיחה שלנו.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    serviceCategoryId: 'audit-consulting',
  },
  {
    id: '4',
    name: 'שרה ישראלי',
    role: 'שכירה',
    content:
      'קיבלתי החזר מס גדול שלא ידעתי שמגיע לי. ממליצה בחום על ייעוץ מס אישי במשרד מזון.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    serviceCategoryId: 'tax',
  },
]

export function getTestimonialForCategory(categoryId: string): Testimonial | undefined {
  return testimonials.find((t) => t.serviceCategoryId === categoryId)
}

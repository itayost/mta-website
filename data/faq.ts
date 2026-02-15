export type FaqCategory = 'services' | 'pricing' | 'practical'

export interface FaqItem {
  question: string
  answer: string
  category: FaqCategory
}

export const faqCategoryLabels: Record<FaqCategory, string> = {
  services: 'על השירותים',
  pricing: 'מחירים',
  practical: 'מידע מעשי',
}

export const faqItems: FaqItem[] = [
  {
    question: 'למי מתאים ייעוץ מס?',
    answer:
      'ייעוץ מס מתאים לכל אדם – שכירים, עצמאים ובעלי חברות. גם אם אתם שכירים, ייתכן שמגיעים לכם החזרי מס שאינכם מודעים אליהם.',
    category: 'services',
  },
  {
    question: 'האם אתם מטפלים בהחזרי מס?',
    answer:
      'כן, אנו מתמחים בהגשת בקשות להחזרי מס לשכירים ועצמאים. במקרים רבים ניתן לקבל החזרים משמעותיים עבור עד 6 שנים אחורה.',
    category: 'services',
  },
  {
    question: 'מה ההבדל בין רואה חשבון ליועץ מס?',
    answer:
      'רואה חשבון מוסמך לבצע ביקורת דוחות כספיים ולחתום עליהם, בנוסף לשירותי ייעוץ מס. יועץ מס מתמחה בייעוץ ותכנון מס אך אינו מורשה לבצע ביקורת. במשרדנו יש גם רואי חשבון וגם יועצי מס.',
    category: 'services',
  },
  {
    question: 'כמה עולים השירותים?',
    answer:
      'המחירים נקבעים בהתאם לסוג השירות, היקף העבודה ומורכבות התיק. אנו מציעים פגישת ייעוץ ראשונית ללא עלות.',
    category: 'pricing',
  },
  {
    question: 'האם אפשר להגיע למשרד?',
    answer:
      'בוודאי! המשרד ממוקם בשדרות המגינים 18 בחיפה. אנו מקבלים לקוחות בתיאום מראש בימים ראשון עד חמישי, 08:30–17:00.',
    category: 'practical',
  },
  {
    question: 'מהם שעות הפעילות?',
    answer:
      'המשרד פתוח בימים ראשון עד חמישי בין השעות 08:30–17:00, ובימי שישי בין 08:30–13:00.',
    category: 'practical',
  },
]

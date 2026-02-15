import type { Service, ServiceCategory } from '@/types/service'

export const services: Service[] = [
  {
    id: 'bookkeeping',
    title: 'הנהלת חשבונות',
    description: 'ניהול ספרים מקצועי ומדויק לעסקים בכל הגדלים, כולל דיווחים שוטפים למע"מ, ביטוח לאומי ומס הכנסה.',
    icon: 'BookOpen',
    audiences: ['freelancers', 'companies'],
    featured: true,
  },
  {
    id: 'tax-consulting',
    title: 'ייעוץ מס',
    description: 'תכנון מס אופטימלי והפחתת נטל המס באופן חוקי. ליווי בהחלטות פיננסיות משמעותיות.',
    icon: 'Calculator',
    audiences: ['freelancers', 'employees', 'companies'],
    featured: true,
  },
  {
    id: 'audit',
    title: 'ביקורת חשבונות',
    description: 'ביקורת דוחות כספיים בהתאם לתקנים המקצועיים, לרבות חוות דעת רואה חשבון מבקר.',
    icon: 'ClipboardCheck',
    audiences: ['companies'],
    featured: true,
  },
  {
    id: 'annual-reports',
    title: 'דוחות שנתיים',
    description: 'הכנה והגשה של דוח שנתי למס הכנסה ליחידים, עצמאים וחברות.',
    icon: 'FileText',
    audiences: ['freelancers', 'employees', 'companies'],
    featured: true,
  },
  {
    id: 'payroll',
    title: 'שכר ומשאבי אנוש',
    description: 'חישוב שכר, הפקת תלושים, דיווחים לרשויות וטיפול בזכויות עובדים.',
    icon: 'Users',
    audiences: ['companies'],
    featured: true,
  },
  {
    id: 'business-consulting',
    title: 'ייעוץ עסקי',
    description: 'ליווי בהקמת עסק, בחירת מבנה משפטי, תכנון פיננסי ואסטרטגיה עסקית.',
    icon: 'TrendingUp',
    audiences: ['freelancers', 'companies'],
    featured: true,
  },
  {
    id: 'vat-reports',
    title: 'דיווחי מע"מ',
    description: 'הגשת דוחות מע"מ תקופתיים, טיפול בהחזרי מע"מ וייצוג מול רשויות מע"מ.',
    icon: 'Receipt',
    audiences: ['freelancers', 'companies'],
    featured: false,
  },
  {
    id: 'tax-representation',
    title: 'ייצוג מול רשויות',
    description: 'ייצוג מקצועי מול מס הכנסה, מע"מ, ביטוח לאומי ורשויות מס נוספות.',
    icon: 'Shield',
    audiences: ['freelancers', 'employees', 'companies'],
    featured: false,
  },
  {
    id: 'company-formation',
    title: 'הקמת חברות',
    description: 'ליווי בתהליך רישום חברה, שותפות או עמותה, כולל רישום ברשויות הרלוונטיות.',
    icon: 'Building',
    audiences: ['companies'],
    featured: false,
  },
  {
    id: 'financial-statements',
    title: 'דוחות כספיים',
    description: 'עריכת דוחות כספיים מאוחדים ולא מאוחדים בהתאם לכללי חשבונאות מקובלים.',
    icon: 'BarChart3',
    audiences: ['companies'],
    featured: false,
  },
  {
    id: 'tax-planning',
    title: 'תכנון מס',
    description: 'בניית אסטרטגיות מס חוקיות להפחתת נטל המס לטווח הקצר והארוך.',
    icon: 'Target',
    audiences: ['freelancers', 'employees', 'companies'],
    featured: false,
  },
  {
    id: 'real-estate-tax',
    title: 'מיסוי מקרקעין',
    description: 'ייעוץ במכירה ורכישת נכסים, מס שבח, מס רכישה ותכנון מס מקרקעין.',
    icon: 'Home',
    audiences: ['employees', 'companies'],
    featured: false,
  },
  {
    id: 'international-tax',
    title: 'מיסוי בינלאומי',
    description: 'טיפול בסוגיות מס חוצות גבולות, אמנות מס והתנהלות עם רשויות מס זרות.',
    icon: 'Globe',
    audiences: ['freelancers', 'companies'],
    featured: false,
  },
  {
    id: 'estate-planning',
    title: 'תכנון עיזבונות',
    description: 'ייעוץ בתכנון ירושות, מתנות והעברות בין-דוריות בצורה מיטבית מבחינת מס.',
    icon: 'Landmark',
    audiences: ['employees'],
    featured: false,
  },
  {
    id: 'nonprofit',
    title: 'עמותות ומלכ"רים',
    description: 'ביקורת, ייעוץ ושירותי חשבונאות למוסדות ציבור, עמותות וארגונים ללא מטרות רווח.',
    icon: 'Heart',
    audiences: ['companies'],
    featured: false,
  },
  {
    id: 'due-diligence',
    title: 'בדיקת נאותות',
    description: 'בדיקות נאותות פיננסיות ומיסויות לקראת עסקאות רכישה, מיזוג או השקעה.',
    icon: 'Search',
    audiences: ['companies'],
    featured: false,
  },
  {
    id: 'capital-market',
    title: 'שוק ההון ומיסוי השקעות',
    description: 'ייעוץ מיסויי בנושא השקעות, ניירות ערך, קרנות נאמנות ורווחי הון.',
    icon: 'LineChart',
    audiences: ['employees', 'companies'],
    featured: false,
  },
]

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'accounting',
    title: 'חשבונאות והנהלת חשבונות',
    description: 'שירותי הנהלת חשבונות, דיווחים שוטפים ודוחות כספיים.',
    services: services.filter((s) =>
      ['bookkeeping', 'payroll', 'financial-statements', 'vat-reports'].includes(s.id)
    ),
  },
  {
    id: 'tax',
    title: 'ייעוץ מס ותכנון',
    description: 'תכנון מס, ייעוץ ודיווחים שנתיים למס הכנסה.',
    services: services.filter((s) =>
      ['tax-consulting', 'annual-reports', 'tax-planning', 'tax-representation', 'real-estate-tax', 'international-tax', 'capital-market'].includes(s.id)
    ),
  },
  {
    id: 'audit-consulting',
    title: 'ביקורת וייעוץ עסקי',
    description: 'ביקורת חשבונות, ייעוץ עסקי ושירותים מיוחדים.',
    services: services.filter((s) =>
      ['audit', 'business-consulting', 'company-formation', 'estate-planning', 'nonprofit', 'due-diligence'].includes(s.id)
    ),
  },
]

export const featuredServices = services.filter((s) => s.featured)

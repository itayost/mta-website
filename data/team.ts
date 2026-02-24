import type { TeamMember } from '@/types/team'

export const teamMembers: TeamMember[] = [
  {
    id: 'sami-mazon',
    name: 'סמי מזון',
    role: 'חשבונאי, מייסד המשרד',
    description:
      'סמי מזון, חשבונאי ותיק עם ניסיון של למעלה מ-40 שנה. מייסד ומנהל המשרד, מתמחה בביקורת חשבונות, ייעוץ מס ותכנון פיננסי לעסקים וחברות.',
    experience: 'מעל 40 שנות ניסיון',
    image: '/team/sami-mazon.jpeg',
    credentials: ['חשבונאי מוסמך (CPA)', 'חבר לשכת חשבונאים בישראל'],
    specializations: ['ביקורת חשבונות', 'ייעוץ מס', 'תכנון פיננסי'],
  },
  {
    id: 'yossi-mazon',
    name: 'יוסי מזון',
    role: 'חשבונאי, שותף',
    description:
      'יוסי מזון, חשבונאי ויועץ מס, שותף במשרד. מתמחה בהנהלת חשבונות, דוחות שנתיים וייעוץ מס ליחידים ועצמאים.',
    experience: 'מעל 20 שנות ניסיון',
    image: '/team/yossi-mazon.jpeg',
    credentials: ['חשבונאי מוסמך (CPA)', 'יועץ מס מוסמך'],
    specializations: ['הנהלת חשבונות', 'דוחות שנתיים', 'ייעוץ מס ליחידים'],
  },
  {
    id: 'sara-mazon',
    name: 'שרה מזון',
    role: 'הנהלת חשבונות',
    description:
      'שרה מזון, חלק בלתי נפרד מצוות המשרד. מלווה את לקוחות המשרד בטיפול שוטף ומקצועי בהנהלת חשבונות.',
    image: '/team/sara-mazon.jpeg',
    credentials: [],
    specializations: ['הנהלת חשבונות'],
  },
  {
    id: 'smadar',
    name: 'סמדר',
    role: 'הנהלת חשבונות',
    description:
      'סמדר, חברת צוות ותיקה במשרד. מספקת שירות אישי ומקצועי ללקוחות המשרד בתחום הנהלת החשבונות.',
    image: '/team/smadar.jpeg',
    credentials: [],
    specializations: ['הנהלת חשבונות'],
  },
  {
    id: 'rachel',
    name: 'רחל',
    role: 'הנהלת חשבונות',
    description:
      'רחל, חברת צוות במשרד. מסייעת בטיפול השוטף בלקוחות ובמשימות הנהלת החשבונות של המשרד.',
    image: '/team/rachel.jpeg',
    credentials: [],
    specializations: ['הנהלת חשבונות'],
  },
]

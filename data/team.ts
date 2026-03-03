import type { TeamMember } from '@/types/team'

export const teamMembers: TeamMember[] = [
  {
    id: 'sami-mazon',
    name: 'שמואל סמי מזון',
    role: 'יועץ מס מוסמך, מייסד המשרד',
    description:
      'סמי מזון, יועץ מס מוסמך ותיק עם מעל 50 שנות ניסיון. מייסד ומנהל המשרד ונשיא לשכת יועצי המס בעבר, מתמחה בייעוץ פרישה, ייעוץ מס ותכנון פיננסי לעסקים וחברות.',
    experience: 'מעל 50 שנות ניסיון',
    image: '/team/sami-mazon.jpeg',
    credentials: ['יועץ מס מוסמך', 'נשיא לשכת יועצי המס בעבר'],
    specializations: ['ייעוץ פרישה', 'ייעוץ מס', 'תכנון פיננסי'],
  },
  {
    id: 'yossi-mazon',
    name: 'יוסי מזון',
    role: 'יועץ מס מוסמך, שותף',
    description:
      'יוסי מזון, יועץ מס מוסמך, שותף במשרד וחבר מועצה בלשכת יועצי המס (מעל 35 שנה). מתמחה בהנהלת חשבונות, דוחות שנתיים וייעוץ מס ליחידים ועצמאים.',
    experience: 'מעל 35 שנות ניסיון',
    image: '/team/yossi-mazon.jpeg',
    credentials: ['חבר הנהלה מחוז הצפון לשכת יועצי המס', 'יועץ מס מוסמך'],
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

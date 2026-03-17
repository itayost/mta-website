import type { TeamMember } from '@/types/team'

export const teamMembers: TeamMember[] = [
  {
    id: 'sami-mazon',
    name: 'שמואל סמי מזון',
    role: 'מייסד המשרד ונשיא כבוד של לשכת יועצי המס',
    description:
      'שמואל הוא מהדמויות הוותיקות והמוערכות בעולם המיסוי בישראל. ייסד את המשרד בשנת 1966, מחזיק בתואר שני במיסוי וכיהן כנשיא לשכת יועצי המס בישראל.',
    experience: 'מאז 1966',
    image: '/team/sami-mazon.jpeg',
    credentials: ['נשיא כבוד לשכת יועצי המס', 'תואר שני במיסוי'],
    specializations: ['סוגיות מס מורכבות', 'ייעוץ מס', 'תכנון פיננסי'],
  },
  {
    id: 'yossi-mazon',
    name: 'יוסי מזון',
    role: 'בעל המשרד ויועץ מס בכיר',
    description:
      'יוסי מוביל את המשרד משנת 1988. ייצג אלפי לקוחות מול מס הכנסה, מע״מ וביטוח לאומי, תוך דגש על הפיכת ייעוץ המס לכלי עבודה ניהולי.',
    experience: 'משנת 1988',
    image: '/team/yossi-mazon.jpeg',
    credentials: ['יועץ מס בכיר', 'בעל המשרד'],
    specializations: ['חשיבה אסטרטגית', 'ליווי שוטף', 'ייעוץ מס'],
  },
  {
    id: 'sara-mazon',
    name: 'שרה מזון',
    role: 'הלב הפועם של המשרד',
    description:
      'עמוד התווך של העסק המשפחתי ושותפה לבעלות. מנהלת את המערך התפעולי והפיננסי של המשרד.',
    image: '/team/sara-mazon.jpeg',
    credentials: [],
    specializations: ['הנהלת חשבונות', 'ניהול תפעולי'],
  },
  {
    id: 'smadar',
    name: 'סמדר',
    role: 'מנהלת חשבונות בכירה',
    description:
      'עם ותק של 26 שנים במשרד, מטפלת בתיקי הלקוחות במסירות, באדיבות ובדיוק חסר פשרות.',
    image: '/team/smadar.jpeg',
    credentials: [],
    specializations: ['הנהלת חשבונות', 'ניהול תיקי לקוחות'],
  },
  {
    id: 'rachel',
    name: 'רחל',
    role: 'מנהלת המשרד וחווית לקוח',
    description:
      'הפנים והקול של המשרד כבר 35 שנה. מנצחת על העבודה השוטפת, פתרון בעיות ותיאום הפגישות.',
    image: '/team/rachel.jpeg',
    credentials: [],
    specializations: ['ניהול משרד', 'שירות לקוחות'],
  },
]

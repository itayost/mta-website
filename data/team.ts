import type { TeamMember } from '@/types/team'

export const teamMembers: TeamMember[] = [
  {
    id: 'sami-mazon',
    name: 'סמי מזון',
    role: 'רואה חשבון, מייסד המשרד',
    description:
      'סמי מזון, רואה חשבון ותיק עם ניסיון של למעלה מ-40 שנה. מייסד ומנהל המשרד, מתמחה בביקורת חשבונות, ייעוץ מס ותכנון פיננסי לעסקים וחברות.',
    experience: 'מעל 40 שנות ניסיון',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    credentials: ['רואה חשבון מוסמך (CPA)', 'חבר לשכת רואי חשבון בישראל'],
    specializations: ['ביקורת חשבונות', 'ייעוץ מס', 'תכנון פיננסי'],
  },
  {
    id: 'yossi-mazon',
    name: 'יוסי מזון',
    role: 'רואה חשבון, שותף',
    description:
      'יוסי מזון, רואה חשבון ויועץ מס, שותף במשרד. מתמחה בהנהלת חשבונות, דוחות שנתיים וייעוץ מס ליחידים ועצמאים.',
    experience: 'מעל 20 שנות ניסיון',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
    credentials: ['רואה חשבון מוסמך (CPA)', 'יועץ מס מוסמך'],
    specializations: ['הנהלת חשבונות', 'דוחות שנתיים', 'ייעוץ מס ליחידים'],
  },
]

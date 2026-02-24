'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { TeamMember } from '@/components/sections/TeamMember'
import { teamMembers } from '@/data/team'

const sami = teamMembers[0]!
const yossi = teamMembers[1]!

type VisualType = 'group' | 'sami' | 'yossi'

const segments: { title: string; body: string; visual: VisualType }[] = [
  {
    title: 'מזון - חשבונאות וייעוץ מס',
    body: 'במשרד מזון, המטרה שלנו ברורה: למצוא את הדרכים המעשיות והחוקיות ביותר לחסוך לך כסף, ולעזור לך לנהל את הפיננסים של העסק בצורה חכמה ורווחית. בתקופה שבה כל שקל נחשב, אנחנו מאמינים שייעוץ מס נכון הוא ההבדל בין עסק שורד לעסק צומח.',
    visual: 'group',
  },
  {
    title: 'הגישה שלנו: עם אצבע על הדופק, כל השנה',
    body: 'אצלנו לא מחכים לביקורת של סוף השנה. אנחנו מספקים ייעוץ שוטף וחיים את השטח העסקי ביומיום. הגישה שלנו היא פרואקטיבית – להקדים תרופה למכה, לפתור אתגרים רגע לפני שהם נוצרים, ולהבטיח שקיפות מלאה. אנחנו מוודאים בקפדנות שאתה נהנה מכל ההחזרים והזכויות המגיעים לך, ובמקביל דואגים לעמידה מלאה בכל החובות מול הרשויות, כדי שתוכל לישון בשקט.',
    visual: 'sami',
  },
  {
    title: '40 שנות ניסיון, פנים לעתיד',
    body: 'המשרד שלנו פועל בהצלחה קרוב ל-40 שנה, אך לעולם אינו קופא על השמרים. שילבנו את הניסיון העשיר שצברנו עם הדינמיות והטכנולוגיה של דור ההמשך. הצוות שלנו פועל מתוך מקצוענות, אדיבות, וידע רחב במגוון תחומי עיסוק במשק. אנחנו גאים ללוות קשת רחבה של לקוחות: עצמאיים, חברות, שותפויות, יזמים בתחילת דרכם, עמותות ומוסדות ציבור.',
    visual: 'sami',
  },
  {
    title: 'הנהגה שמשפיעה ברמה הלאומית',
    body: 'המומחיות של מזון ייעוץ מס זוכה להכרה הרבה מעבר לכותלי המשרד.\n\nמר שמואל (סמי) מזון, מנכ"ל המשרד: שימש עד לאחרונה כנשיא הארצי של לשכות יועצי המס בישראל.\n\nמר יוסף מזון, דור ההמשך: מכהן כחבר בוועדה המקצועית הארצית של לשכת יועצי המס – ועדה שמשפיעה בפועל על הצעות החוק ודיני המיסים במדינה.',
    visual: 'sami',
  },
  {
    title: 'היתרון המקצועי שלך',
    body: 'כדי להעניק לך את השירות המהיר והיעיל ביותר, המשרד שלנו מחובר ישירות (On-line) לשירותי עיבוד הנתונים של מס הכנסה, מע"מ וביטוח לאומי. החיבור הישיר הזה מאפשר לנו לקצר תהליכים, לטפל בהחזרי מס במהירות ולייצג את האינטרסים שלך מול הרשויות בצורה המדויקת והטובה ביותר.',
    visual: 'yossi',
  },
]

// Group consecutive segments that share the same visual
type VisualGroup = { visual: VisualType; segments: typeof segments }
const visualGroups: VisualGroup[] = []
for (const seg of segments) {
  const last = visualGroups[visualGroups.length - 1]
  if (last && last.visual === seg.visual) {
    last.segments.push(seg)
  } else {
    visualGroups.push({ visual: seg.visual, segments: [seg] })
  }
}

// Per-group styling: bg class + whether text should be light
const groupStyles: { bg: string; bgToken: string; dark: boolean }[] = [
  { bg: '', bgToken: 'bg-bg-main', dark: false },                    // group photo
  { bg: 'bg-bg-surface', bgToken: 'bg-bg-surface', dark: false },   // sami
  { bg: '', bgToken: 'bg-bg-main', dark: false },                    // yossi
]

function SegmentVisual({ type }: { type: VisualType }) {
  if (type === 'group') {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src="/team/office.jpeg"
          alt="משרד מזון ייעוץ מס"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    )
  }

  const member = type === 'sami' ? sami : yossi
  return <TeamMember member={member} />
}

export function TeamScrollStory() {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const reducedMotion = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const els = rootRef.current.querySelectorAll('[data-segment-key]')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveKey(entry.target.getAttribute('data-segment-key'))
          }
        }
      },
      { rootMargin: '-35% 0px -35% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={rootRef}>
      {/* Section heading in default bg */}
      <div className="pt-24 sm:pt-32 pb-8">
        <Container>
          <SectionHeading
            title="הסיפור שלנו"
            subtitle="למעלה מארבעה עשורים של מקצוענות ושירות אישי"
          />
        </Container>
      </div>

      {visualGroups.map((group, gi) => {
        const { bg, bgToken, dark } = groupStyles[gi] ?? { bg: '', bgToken: 'bg-bg-main', dark: false }
        const prevBg = groupStyles[gi - 1]?.bgToken ?? 'bg-bg-main'

        return (
          <div key={gi}>
            {/* Rounded transition from previous group */}
            {gi > 0 && (
              dark
                ? <RoundedTransition from={prevBg} to={bgToken} />
                : <RoundedTransitionUp from={prevBg} to={bgToken} />
            )}
            <div className={cn(bg, 'py-16 sm:py-24')}>
              <Container>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  {/* Sticky visual - scrolls away naturally when group ends */}
                  <div className="hidden lg:block">
                    <div className="sticky top-28">
                      <motion.div
                        key={group.visual}
                        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        <SegmentVisual type={group.visual} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Text segments in this group */}
                  <div className={group.segments.length === 1 ? 'lg:pb-[50svh]' : ''}>
                    {group.segments.map((seg, si) => (
                      <div
                        key={si}
                        data-segment-key={`${gi}-${si}`}
                        className={cn(
                          'py-12 first:pt-0 lg:min-h-[80svh] lg:flex lg:items-center',
                          'transition-opacity duration-500',
                          !reducedMotion && activeKey !== null && activeKey !== `${gi}-${si}`
                            ? 'opacity-30'
                            : 'opacity-100',
                        )}
                      >
                        <div className="max-w-[52ch]">
                          {/* Mobile-only: inline visual (first segment of each group) */}
                          {si === 0 && (
                            <div className="lg:hidden mb-8 max-w-sm mx-auto">
                              <motion.div
                                key={group.visual}
                                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                              >
                                <SegmentVisual type={group.visual} />
                              </motion.div>
                            </div>
                          )}

                          {/* Primary accent bar */}
                          <div className={cn('w-8 h-0.5 mb-5', dark ? 'bg-white/30' : 'bg-primary')} />

                          <h2
                            className={cn(
                              'font-display text-3xl font-extrabold tracking-tight sm:text-4xl',
                              dark ? 'text-white' : 'text-text-primary',
                            )}
                          >
                            {seg.title}
                          </h2>
                          <div className="mt-5 space-y-6">
                            {seg.body.split('\n\n').map((paragraph, pi) => (
                              <p
                                key={pi}
                                className={cn(
                                  'text-lg font-light leading-relaxed',
                                  dark ? 'text-white/70' : 'text-text-muted',
                                )}
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </div>
          </div>
        )
      })}
    </div>
  )
}

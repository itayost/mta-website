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
    title: 'הכירו את הצוות המוביל',
    body: 'שילוב ייחודי של ניסיון עשורים, מקצוענות ושירות אישי. הכירו את האנשים שעומדים מאחורי כל שירות שאנו מעניקים.',
    visual: 'group',
  },
  {
    title: 'יוסי מזון | בעל המשרד ויועץ מס בכיר',
    body: 'חשיבה אסטרטגית וליווי אישי\n\nיוסי מוביל את המשרד משנת 1988. לאורך שנות פעילותו, ייצג אלפי לקוחות מול מס הכנסה, מע״מ וביטוח לאומי, תוך דגש על הפיכת ייעוץ המס לכלי עבודה ניהולי.',
    visual: 'yossi',
  },
  {
    title: 'ראייה עסקית רחבה',
    body: 'יוסי בוחן את הפעילות הכלכלית של הלקוח במבט אסטרטגי, במטרה לייעל את תשלומי המס ולחזק את הרווחיות העסקית.',
    visual: 'yossi',
  },
  {
    title: 'ליווי שוטף למניעת הפתעות',
    body: 'שיטת העבודה במשרד מבוססת על בקרה וניתוח נתונים לאורך כל השנה. גישה זו מאפשרת ללקוחותינו לדעת בכל רגע נתון היכן הם עומדים מול הרשויות, ולתכנן את צעדיהם בביטחון.',
    visual: 'yossi',
  },
  {
    title: 'נחישות ומקצועיות',
    body: 'כרץ למרחקים ארוכים, יוסי מביא את אותה משמעת עצמית והתמדה מהמסלול אל שולחן העבודה. הוא מחויב להשגת התוצאה המדויקת והנכונה ביותר עבור כל לקוח.',
    visual: 'yossi',
  },
  {
    title: 'שמואל (סמי) מזון | מייסד המשרד ונשיא כבוד של לשכת יועצי המס',
    body: 'ניסיון רב-דורי וסמכות מקצועית\n\nשמואל הוא מהדמויות הוותיקות והמוערכות בעולם המיסוי בישראל. הוא ייסד את המשרד בשנת 1966, מחזיק בתואר שני במיסוי וכיהן כנשיא לשכת יועצי המס בישראל.',
    visual: 'sami',
  },
  {
    title: 'ידע מקצועי מצטבר',
    body: 'כנשיא כבוד של הלשכה, שמואל מעמיד לרשות המשרד ולקוחותיו פרספקטיבה נדירה של עשורים, המאפשרת ניתוח מעמיק של סוגיות מס מורכבות.',
    visual: 'sami',
  },
  {
    title: 'ערכי המשרד',
    body: 'שמואל הנחיל במשרד תרבות של יושרה ללא פשרות ומצוינות מקצועית, המהווים את הבסיס לכל שירות שאנו מעניקים.',
    visual: 'sami',
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
  { bg: '', bgToken: 'bg-bg-main', dark: false },                    // group 0: office
  { bg: '', bgToken: 'bg-bg-main', dark: false },                    // group 1: yossi
  { bg: 'bg-bg-surface', bgToken: 'bg-bg-surface', dark: false },   // group 2: shmuel
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
            title="אודות המשרד: מסורת של מקצועיות ושקט נפשי"
            subtitle="משרד מזון יועצי מס הוא מוסד מקצועי ומשפחתי הפועל בלב עולם המיסוי הישראלי מאז שנת 1966. אנו מאמינים שניהול מס נכון הוא נדבך מרכזי ביציבותו של כל עסק ופרט. הלקוחות שלנו נהנים משילוב ייחודי של עשורים של ניסיון מול רשויות המס, לצד ראייה עסקית מודרנית, יוזמת ומותאמת אישית."
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
                  <div>
                    {group.segments.map((seg, si) => (
                      <div
                        key={si}
                        data-segment-key={`${gi}-${si}`}
                        className={cn(
                          'py-12 first:pt-0 lg:flex lg:items-center',
                          group.segments.length > 1 ? 'lg:min-h-[80svh]' : 'lg:min-h-[50svh]',
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
                              'text-3xl font-extrabold tracking-tight sm:text-4xl',
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

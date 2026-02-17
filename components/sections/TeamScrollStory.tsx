import Image from 'next/image'
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
    title: 'מזון — חשבונאים ויועצי מס',
    body: 'חשבונאים ויועצי מס מוסמכים, מומחים במתן ייעוץ מס וחשבונאות וממוקדים במטרה עיקרית אחת — מציאת דרכים מעשיות וחוקיות שיחסכו לך כסף במישור העסקי והאישי. אצלנו תקבל ייעוץ איך תחסוך כסף ואיך תנהל את הכספים שלך טוב יותר.\n\nאנו מספקים ייעוץ שוטף כל השנה. אנחנו חיים את הבעיות בשטח בכל יום. אצלנו לא מחכים לביקורת סוף השנה — האצבע שלנו על דופק הלקוח כל הזמן, דואגת שדברים יטופלו רגע לפני, ולא לאחר מעשה כשהנזק נעשה.',
    visual: 'group',
  },
  {
    title: 'הגישה שלנו',
    body: 'אנחנו מוודאים, בקפדנות, שאתה נהנה מכל הזכויות וההחזרים להם אתה זכאי. בקפדנות זהה נוודא שאתה גם ממלא את כל חובותייך.\n\nבין לקוחותינו תמצא עסקים של עצמאים, שותפויות, חברות, עסקים מכל הסוגים, יזמים בתחילת הדרך, עמותות, מוסדות ציבוריים, יחידים ואחרים.',
    visual: 'sami',
  },
  {
    title: 'מנהיגות מקצועית',
    body: 'אנו חברים ותיקים בלשכת יועצי המס — סניף חיפה, והמנכ"ל שלנו, מר שמואל (סמי) מזון, שימש עד לאחרונה כנשיא ארצי של לשכות יועצי המס בישראל.\n\nכעסק שאינו קופא על השמרים, הקיים קרוב ל-40 שנה, פני העתיד כאן ודור ההמשך כבר פועל, כעתודה מוכשרת ויעילה.',
    visual: 'sami',
  },
  {
    title: 'דור ההמשך',
    body: 'מר יוסף מזון חבר בוועדה המקצועית הארצית של לשכת יועצי המס בישראל, ועדה המשפיעה בפועל על הצעות החוק בנושא מיסים בישראל, ומביא לנו כבוד רב.\n\nאנו מתעדכנים ורוכשים ידע מקצועי בכל הקשור לנושאים והשירותים שאנו מספקים. ברשותנו כל התעודות המקצועיות הדרושות כדי לייצג אותך ואת האינטרסים שלך הכי טוב שאפשר. אנו מחוברים לשירותי עיבוד הנתונים של מס הכנסה, מע"מ וביטוח לאומי — דבר המאפשר לנו תקשורת מהירה עם הרשויות וטיפול מזורז בכל הקשור להחזרי מס.',
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
  { bg: '', bgToken: 'bg-bg-main', dark: false },            // group photo — default bg-main
  { bg: 'bg-bg-dark', bgToken: 'bg-bg-dark', dark: true },  // sami — dark navy
  { bg: 'bg-bg-surface', bgToken: 'bg-bg-surface', dark: false }, // yossi — surface
]

function SegmentVisual({ type }: { type: VisualType }) {
  if (type === 'group') {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center"
          alt="צוות משרד מזון"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    )
  }

  const member = type === 'sami' ? sami : yossi
  return <TeamMember member={member} index={type === 'sami' ? 0 : 1} />
}

export function TeamScrollStory() {
  return (
    <>
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
                {/* Sticky visual — scrolls away naturally when group ends */}
                <div className="hidden lg:block">
                  <div className="sticky top-28">
                    <SegmentVisual type={group.visual} />
                  </div>
                </div>

                {/* Text segments in this group */}
                <div className={group.segments.length === 1 ? 'lg:pb-[50svh]' : ''}>
                  {group.segments.map((seg, si) => (
                    <div
                      key={si}
                      className="py-12 first:pt-0 lg:min-h-[80svh] lg:flex lg:items-center"
                    >
                      <div>
                        {/* Mobile-only: inline visual (first segment of each group) */}
                        {si === 0 && (
                          <div className="lg:hidden mb-8 max-w-sm mx-auto">
                            <SegmentVisual type={group.visual} />
                          </div>
                        )}

                        <h2
                          className={cn(
                            'text-2xl font-extrabold sm:text-3xl',
                            dark ? 'text-white' : 'text-text-primary',
                          )}
                        >
                          {seg.title}
                        </h2>
                        <div className="mt-4 space-y-4">
                          {seg.body.split('\n\n').map((paragraph, pi) => (
                            <p
                              key={pi}
                              className={cn(
                                'leading-relaxed',
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
    </>
  )
}

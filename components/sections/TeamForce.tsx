import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll } from '@/components/ui/motion/AnimateOnScroll'

const members = [
  {
    name: 'שרה מזון',
    role: 'הלב הפועם של המשרד',
    image: '/team/sara-mazon.jpeg',
    bio: 'שרה היא עמוד התווך של העסק המשפחתי ושותפה לבעלות. מדי בוקר היא מתייצבת במשרד ומנהלת ביד רמה את המערך התפעולי והפיננסי, החל מהנהלת חשבונות וגבייה ועד לניהול תשלומים ושירותים חיוניים. הנוכחות והניסיון שלה מבטיחים שהמנוע הפנימי של המשרד יעבוד בצורה מושלמת, תוך שמירה על הניחוח המשפחתי והחם שמאפיין אותנו מהיום הראשון.',
  },
  {
    name: 'רחל',
    role: 'מנהלת המשרד וחווית לקוח',
    image: '/team/rachel.jpeg',
    bio: 'רחל היא הפנים והקול של המשרד כבר 35 שנה. היא צמחה יחד עם המשרד מלמטה, והיום היא מנצחת על העבודה השוטפת, פתרון בעיות ותיאום הפגישות. עבור רחל, המטרה היא אחת: להפוך את המפגש הבירוקרטי שלך לחוויה נעימה, מהירה ויעילה. היא כאן כדי לוודא ששום תזכורת לא תתפספס ושכל לקוח ירגיש עטוף ומטופל.',
  },
  {
    name: 'סמדר',
    role: 'מנהלת חשבונות בכירה',
    image: '/team/smadar.jpeg',
    bio: 'עם ותק של 26 שנים במשרד, סמדר מטפלת בתיקי הלקוחות במסירות, באדיבות ובדיוק חסר פשרות. היא האחראית הישירה על ה״שקט בראש״ שלכם: היא מוודאת שכל פעולה וכל חשבונית יגיעו למקומן הנכון, ומנהלת את הנתונים שלכם בסטנדרט המקצועי הגבוה ביותר.',
  },
]

export function TeamForce() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="הכוח המקצועי שלנו" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <AnimateOnScroll key={member.name} preset="fade-in-up">
              <div className="bg-bg-card rounded-2xl p-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-bold leading-snug text-text-primary">
                  {member.name} | {member.role}
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-text-muted">
                  {member.bio}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}

# About Page Content Update — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the About page content with new marketing copy per the design spec, restructuring team bios and replacing the process steps section with a professional values section.

**Architecture:** Content-layer update across existing components plus two new server components. TeamScrollStory segments rewritten and reordered (Yossi first, then Shmuel). Team grid replaced with TeamForce section. ProcessSteps replaced with ValuesSection.

**Tech Stack:** Next.js App Router, React Server Components, Tailwind CSS v4, `next/image`, `AnimateOnScroll` (motion/react)

**Spec:** `docs/superpowers/specs/2026-03-17-about-page-content-update-design.md`

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `data/team.ts` | Modify | Update all 5 team member records (roles, descriptions, credentials) |
| `components/sections/TeamScrollStory.tsx` | Modify | Replace SectionHeading content, replace segments array, update groupStyles |
| `components/sections/TeamForce.tsx` | Create | New section: Sara, Rachel, Smadar cards with photos and bios |
| `components/sections/ValuesSection.tsx` | Create | New section: 3 professional value cards |
| `components/sections/AboutCta.tsx` | Modify | Update body prop text |
| `app/about/page.tsx` | Modify | Rewire page: remove team grid + ProcessSteps, add TeamForce + ValuesSection, update transitions + metadata |

---

### Task 1: Update team data

**Files:**
- Modify: `data/team.ts` (all 56 lines replaced)

- [ ] **Step 1: Replace team data content**

Replace the entire `teamMembers` array in `data/team.ts` with:

```typescript
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
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | head -30`
Expected: Build succeeds (data shape unchanged, only content differs)

- [ ] **Step 3: Commit**

```bash
git add data/team.ts
git commit -m "feat: update team member data with new marketing copy"
```

---

### Task 2: Rewrite TeamScrollStory content

**Files:**
- Modify: `components/sections/TeamScrollStory.tsx` (lines 18-63 segments/groupStyles, lines 111-113 SectionHeading)

- [ ] **Step 1: Update SectionHeading props**

In `TeamScrollStory.tsx`, replace lines 111-113:

```typescript
// OLD:
          <SectionHeading
            title="הסיפור שלנו"
            subtitle="למעלה מחמישה עשורים של מקצוענות ושירות אישי"
          />
```

with:

```typescript
// NEW:
          <SectionHeading
            title="אודות המשרד: מסורת של מקצועיות ושקט נפשי"
            subtitle="משרד מזון יועצי מס הוא מוסד מקצועי ומשפחתי הפועל בלב עולם המיסוי הישראלי מאז שנת 1966. אנו מאמינים שניהול מס נכון הוא נדבך מרכזי ביציבותו של כל עסק ופרט. הלקוחות שלנו נהנים משילוב ייחודי של עשורים של ניסיון מול רשויות המס, לצד ראייה עסקית מודרנית, יוזמת ומותאמת אישית."
          />
```

**Note:** The subtitle is ~220 chars. The `SectionHeading` component uses `max-w-2xl` on the `<p>`. Visually verify after build — if text wraps too many lines, widen to `max-w-3xl` in `SectionHeading.tsx` line 29.

- [ ] **Step 2: Replace segments array**

Replace the `segments` array (lines 18-44) with the new content. The key change is that `yossi` segments now come before `sami` segments, and each PDF bullet point becomes its own segment:

```typescript
const segments: { title: string; body: string; visual: VisualType }[] = [
  {
    title: 'הכירו את הצוות המוביל',
    body: 'שילוב ייחודי של ניסיון עשורים, מקצוענות ושירות אישי – הכירו את האנשים שעומדים מאחורי כל שירות שאנו מעניקים.',
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
    body: 'כרץ למרחקים ארוכים, יוסי מביא את אותה משמעת עצמית והתמדה מהמסלול אל שולחן העבודה – הוא מחויב להשגת התוצאה המדויקת והנכונה ביותר עבור כל לקוח.',
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
```

- [ ] **Step 3: Update groupStyles array**

Replace the `groupStyles` array (lines 59-63) with the new order (office -> yossi -> shmuel):

```typescript
const groupStyles: { bg: string; bgToken: string; dark: boolean }[] = [
  { bg: '', bgToken: 'bg-bg-main', dark: false },                    // group 0: office
  { bg: '', bgToken: 'bg-bg-main', dark: false },                    // group 1: yossi
  { bg: 'bg-bg-surface', bgToken: 'bg-bg-surface', dark: false },   // group 2: shmuel
]
```

Note: `const sami = teamMembers[0]!` and `const yossi = teamMembers[1]!` at lines 13-14 remain unchanged — indices are still correct.

- [ ] **Step 4: Verify build**

Run: `npm run build 2>&1 | head -30`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add components/sections/TeamScrollStory.tsx
git commit -m "feat: rewrite scrollytelling with new content, reorder Yossi before Shmuel"
```

---

### Task 3: Create TeamForce section

**Files:**
- Create: `components/sections/TeamForce.tsx`

- [ ] **Step 1: Create the TeamForce component**

Create `components/sections/TeamForce.tsx`:

```tsx
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll } from '@/components/ui/motion/AnimateOnScroll'

const members = [
  {
    name: 'שרה מזון',
    role: 'הלב הפועם של המשרד',
    image: '/team/sara-mazon.jpeg',
    bio: 'שרה היא עמוד התווך של העסק המשפחתי ושותפה לבעלות. מדי בוקר היא מתייצבת במשרד ומנהלת ביד רמה את המערך התפעולי והפיננסי – החל מהנהלת חשבונות וגבייה ועד לניהול תשלומים ושירותים חיוניים. הנוכחות והניסיון שלה מבטיחים שהמנוע הפנימי של המשרד יעבוד בצורה מושלמת, תוך שמירה על הניחוח המשפחתי והחם שמאפיין אותנו מהיום הראשון.',
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
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | head -30`
Expected: Build succeeds (component not yet imported)

- [ ] **Step 3: Commit**

```bash
git add components/sections/TeamForce.tsx
git commit -m "feat: create TeamForce section for Sara, Rachel, Smadar"
```

---

### Task 4: Create ValuesSection

**Files:**
- Create: `components/sections/ValuesSection.tsx`

- [ ] **Step 1: Create the ValuesSection component**

Create `components/sections/ValuesSection.tsx`:

```tsx
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AnimateOnScroll } from '@/components/ui/motion/AnimateOnScroll'

const values = [
  {
    title: 'שותפות לדרך',
    description:
      'אנחנו רואים את עצמנו כחלק מהמערך התומך של העסק שלכם, זמינים לייעוץ וקשובים לצרכים המשתנים שלכם.',
  },
  {
    title: 'שקיפות ובהירות',
    description:
      'המטרה שלנו היא לפשט עבורכם את המורכבות הבירוקרטית, כדי שתוכלו להתמקד במה שאתם עושים הכי טוב – ניהול העסק שלכם.',
  },
  {
    title: 'גב מקצועי איתן',
    description:
      'הניסיון המצטבר של הצוות שלנו, שחלקו צועד יחד עשרות שנים, הוא הביטחון שלכם שאתם נמצאים בידיים המנוסות ביותר בשוק.',
  },
]

export function ValuesSection() {
  return (
    <section className="bg-bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="התפיסה המקצועית שלנו"
          subtitle="אנו מבינים שמאחורי כל דוח וכל מספר עומד אדם, משפחה או עסק שהשקיעו מאמץ רב ביצירת הכנסתם. לכן, הגישה שלנו אינה טכנית בלבד:"
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map((value) => (
            <AnimateOnScroll key={value.title} preset="fade-in-up">
              <div className="bg-bg-card rounded-2xl p-6">
                <h3 className="text-xl font-bold text-text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-base font-light leading-relaxed text-text-muted">
                  {value.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  )
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | head -30`
Expected: Build succeeds (component not yet imported)

- [ ] **Step 3: Commit**

```bash
git add components/sections/ValuesSection.tsx
git commit -m "feat: create ValuesSection with professional values cards"
```

---

### Task 5: Update AboutCta

**Files:**
- Modify: `components/sections/AboutCta.tsx` (line 9)

- [ ] **Step 1: Update body prop**

In `AboutCta.tsx`, replace line 9:

```typescript
// OLD:
      body="בואו לשיחה קצרה ונבין יחד מה הצרכים שלכם - ללא התחייבות."

// NEW:
      body="נשמח לעמוד לרשותכם וללוות אתכם במקצועיות ובביטחון."
```

- [ ] **Step 2: Verify build**

Run: `npm run build 2>&1 | head -30`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add components/sections/AboutCta.tsx
git commit -m "feat: update AboutCta closing text"
```

---

### Task 6: Rewire About page

**Files:**
- Modify: `app/about/page.tsx` (full rewrite)

- [ ] **Step 1: Replace page.tsx content**

Replace the entire `app/about/page.tsx` with:

```tsx
import type { Metadata } from 'next'
import { TeamScrollStory } from '@/components/sections/TeamScrollStory'
import { TeamForce } from '@/components/sections/TeamForce'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { AboutCta } from '@/components/sections/AboutCta'
import { RoundedTransition, RoundedTransitionUp } from '@/components/ui/RoundedTransition'
import { generatePageMetadata, buildLocalBusinessJsonLd } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'אודות',
  description:
    'משרד מזון יועצי מס – מוסד מקצועי ומשפחתי הפועל בלב עולם המיסוי הישראלי מאז 1966. הכירו את הצוות המוביל: יוסי מזון, שמואל (סמי) מזון וצוות מקצועי.',
  path: '/about',
  keywords: ['אודות מזון ייעוץ מס', 'יועץ מס מוסמך ותיק חיפה'],
})

export default function AboutPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TeamScrollStory />

      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      <TeamForce />

      <RoundedTransition from="bg-bg-main" to="bg-bg-surface" />

      <ValuesSection />

      <RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main" />

      <AboutCta />
    </>
  )
}
```

Removed imports: `TeamMember`, `ProcessSteps`, `Container`, `SectionHeading`, `StaggerChildren`, `StaggerItem`, `teamMembers`.

- [ ] **Step 2: Verify full build**

Run: `npm run build 2>&1 | tail -20`
Expected: Build succeeds with no errors. The About page route compiles.

- [ ] **Step 3: Verify lint**

Run: `npm run lint 2>&1 | tail -20`
Expected: No lint errors

- [ ] **Step 4: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: rewire About page with new sections and updated content"
```

---

### Task 7: Visual verification

- [ ] **Step 1: Start dev server**

Run: `npm run dev`

- [ ] **Step 2: Verify About page renders**

Open `http://localhost:3000/about` in browser. Check:
- SectionHeading shows new title and subtitle (verify subtitle readability — if too cramped, widen `max-w-2xl` to `max-w-3xl` in `SectionHeading.tsx` line 29)
- Scrollytelling: office group -> Yossi group (4 segments) -> Shmuel group (3 segments)
- Sticky visuals work on desktop (Yossi card sticks for his segments, Shmuel card sticks for his)
- Opacity transitions work when scrolling between segments
- TeamForce section: 3 cards with photos for Sara, Rachel, Smadar
- ValuesSection: 3 value cards on bg-bg-surface background
- RoundedTransitions between sections look correct
- AboutCta shows updated closing text
- RTL text alignment is correct throughout
- Mobile: segments stack, visuals inline

- [ ] **Step 3: Verify other pages unaffected**

Open `http://localhost:3000` (homepage) — check MiniAbout section still renders team avatars correctly with updated data.
Open `http://localhost:3000/services` — check ProcessSteps still renders (not removed).

- [ ] **Step 4: Final commit if visual adjustments were needed**

If `max-w-2xl` was widened or any visual tweaks were made:

```bash
git add -A
git commit -m "fix: visual adjustments for About page content update"
```

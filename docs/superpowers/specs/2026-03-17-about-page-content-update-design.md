# About Page Content Update

## Overview

Replace the About page content with new marketing copy from the provided PDF ("דף אודות שיווקי"). The update restructures team bios, reorders team member presentation, and replaces the process steps section with a professional values section.

## Source of Truth

PDF file: `דף אודות שיווקי_260315_054508.pdf` (project root)

## Page Flow (top to bottom)

### 1. TeamScrollStory — Updated heading and intro

The About page does **not** use a `PageHero` component. The `TeamScrollStory` is the first element. Update its existing `SectionHeading` at the top of the component:

- **Current title:** "הסיפור שלנו" → **New title:** "אודות המשרד: מסורת של מקצועיות ושקט נפשי"
- **Current subtitle:** "למעלה מחמישה עשורים של מקצוענות ושירות אישי" → **New subtitle:** "משרד מזון יועצי מס הוא מוסד מקצועי ומשפחתי הפועל בלב עולם המיסוי הישראלי מאז שנת 1966. אנו מאמינים שניהול מס נכון הוא נדבך מרכזי ביציבותו של כל עסק ופרט. הלקוחות שלנו נהנים משילוב ייחודי של עשורים של ניסיון מול רשויות המס, לצד ראייה עסקית מודרנית, יוזמת ומותאמת אישית."

**Note:** The new subtitle is longer than the current one (~220 chars). The `SectionHeading` component uses `max-w-2xl` for the subtitle `<p>`. This may need widening to `max-w-3xl` during implementation — verify visually and adjust if the text wraps too many lines.

**Change type:** Content swap in the existing `SectionHeading` props inside `TeamScrollStory` (lines 111-113).

### 2. TeamScrollStory — Segment content and group reorder

Rewrite the `segments` array and reorder visual groups. Yossi appears first (current leader), then Shmuel (founder).

#### Data structure changes

The current `segments` array uses `{ title: string; body: string; visual: VisualType }`. Each bullet point from the PDF becomes its own segment with the bold label as the `title` and the description as the `body`. This leverages the existing rendering logic — each segment already renders its `title` as a bold `<h2>` and `body` paragraphs below it. No bold-within-paragraph rendering is needed.

No structural change to the `segments` type is needed.

#### VisualType changes

Current: `type VisualType = 'group' | 'sami' | 'yossi'`

No change needed — the type values remain the same. What changes is the **order** in the `segments` array: `yossi` segments come before `sami` segments. The grouping algorithm (lines 48-56) will automatically produce the correct visual groups.

#### Updated segments array

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

This produces 3 visual groups automatically:
- **Group 0** (`'group'`): 1 segment — office image
- **Group 1** (`'yossi'`): 4 segments — Yossi intro + 3 bullet segments
- **Group 2** (`'sami'`): 3 segments — Shmuel intro + 2 bullet segments

#### Updated groupStyles array

```typescript
const groupStyles: { bg: string; bgToken: string; dark: boolean }[] = [
  { bg: '', bgToken: 'bg-bg-main', dark: false },                    // group 0: office
  { bg: '', bgToken: 'bg-bg-main', dark: false },                    // group 1: yossi
  { bg: 'bg-bg-surface', bgToken: 'bg-bg-surface', dark: false },   // group 2: shmuel
]
```

#### Updated member references

```typescript
// Current (line 13-14):
const sami = teamMembers[0]!
const yossi = teamMembers[1]!

// No change needed — sami stays at index 0, yossi at index 1 in data/team.ts
```

#### Existing SectionHeading removal

The `SectionHeading` with "הסיפור שלנו" (lines 110-116 of TeamScrollStory.tsx) is **replaced** with the new heading/subtitle described in Section 1 above. Same component, new props.

### 3. "הכוח המקצועי שלנו" — New section

Replaces the old team grid. New component: `components/sections/TeamForce.tsx`

**Section heading:** Uses `SectionHeading` component with `title="הכוח המקצועי שלנו"`

3 cards in a grid. Each card structure:

```
+------------------------------+
|  [Photo: rounded-2xl,        |
|   aspect-[4/3],              |
|   object-cover]              |
|                              |
|  <h3 class="text-xl          |
|   font-bold leading-snug     |
|   text-text-primary">        |
|   Name | Role                |
|  </h3>                       |
|                              |
|  <p class="text-base         |
|   font-light leading-        |
|   relaxed text-text-         |
|   muted">                    |
|   Bio paragraph              |
|  </p>                        |
+------------------------------+
```

Card data (hardcoded in component, not from `data/team.ts`):

| Name | Role | Image | Bio |
|------|------|-------|-----|
| שרה מזון | הלב הפועם של המשרד | `/team/sara-mazon.jpeg` | "שרה היא עמוד התווך של העסק המשפחתי ושותפה לבעלות. מדי בוקר היא מתייצבת במשרד ומנהלת ביד רמה את המערך התפעולי והפיננסי – החל מהנהלת חשבונות וגבייה ועד לניהול תשלומים ושירותים חיוניים. הנוכחות והניסיון שלה מבטיחים שהמנוע הפנימי של המשרד יעבוד בצורה מושלמת, תוך שמירה על הניחוח המשפחתי והחם שמאפיין אותנו מהיום הראשון." |
| רחל | מנהלת המשרד וחווית לקוח | `/team/rachel.jpeg` | "רחל היא הפנים והקול של המשרד כבר 35 שנה. היא צמחה יחד עם המשרד מלמטה, והיום היא מנצחת על העבודה השוטפת, פתרון בעיות ותיאום הפגישות. עבור רחל, המטרה היא אחת: להפוך את המפגש הבירוקרטי שלך לחוויה נעימה, מהירה ויעילה. היא כאן כדי לוודא ששום תזכורת לא תתפספס ושכל לקוח ירגיש עטוף ומטופל." |
| סמדר | מנהלת חשבונות בכירה | `/team/smadar.jpeg` | "עם ותק של 26 שנים במשרד, סמדר מטפלת בתיקי הלקוחות במסירות, באדיבות ובדיוק חסר פשרות. היא האחראית הישירה על ה״שקט בראש״ שלכם: היא מוודאת שכל פעולה וכל חשבונית יגיעו למקומן הנכון, ומנהלת את הנתונים שלכם בסטנדרט המקצועי הגבוה ביותר." |

**Layout:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`. Cards use `bg-bg-card rounded-2xl p-6` (no border, no shadow). Photos use `next/image` with `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"`.

**Component type:** Server component (no client-side interactivity needed). Wrap cards with `AnimateOnScroll` for scroll-reveal.

**Background:** `bg-bg-main`. The transition from TeamScrollStory is handled in `page.tsx`: a `RoundedTransitionUp` placed between `TeamScrollStory` and the TeamForce section, with `from` set to the last group's bgToken and `to` set to `bg-bg-main`. Since Shmuel's group uses `bg-bg-surface`, this is `RoundedTransitionUp from="bg-bg-surface" to="bg-bg-main"`.

### 4. "התפיסה המקצועית שלנו" — New section

Replaces ProcessSteps. New component: `components/sections/ValuesSection.tsx`

**Section heading:** Uses `SectionHeading` component with:
- `title="התפיסה המקצועית שלנו"`
- `subtitle="אנו מבינים שמאחורי כל דוח וכל מספר עומד אדם, משפחה או עסק שהשקיעו מאמץ רב ביצירת הכנסתם. לכן, הגישה שלנו אינה טכנית בלבד:"`

3 value cards. Each card structure:

```
+------------------------------+
|  <h3 class="text-xl          |
|   font-bold text-text-       |
|   primary">                  |
|   Value title                |
|  </h3>                       |
|                              |
|  <p class="text-base         |
|   font-light leading-        |
|   relaxed text-text-         |
|   muted mt-3">               |
|   Value description          |
|  </p>                        |
+------------------------------+
```

No icons, no numbers, no accent bars — text only, matching the PDF's clean structure.

Value cards data:

1. **שותפות לדרך** — "אנחנו רואים את עצמנו כחלק מהמערך התומך של העסק שלכם, זמינים לייעוץ וקשובים לצרכים המשתנים שלכם."
2. **שקיפות ובהירות** — "המטרה שלנו היא לפשט עבורכם את המורכבות הבירוקרטית, כדי שתוכלו להתמקד במה שאתם עושים הכי טוב – ניהול העסק שלכם."
3. **גב מקצועי איתן** — "הניסיון המצטבר של הצוות שלנו, שחלקו צועד יחד עשרות שנים, הוא הביטחון שלכם שאתם נמצאים בידיים המנוסות ביותר בשוק."

**Layout:** `grid grid-cols-1 sm:grid-cols-3 gap-6`. Cards use `bg-bg-card rounded-2xl p-6`.

**Component type:** Server component. Wrap cards with `AnimateOnScroll`.

**Background:** `bg-bg-surface`. Transition from TeamForce: `RoundedTransition from="bg-bg-main" to="bg-bg-surface"` placed in `page.tsx`.

### 5. AboutCta

Update the `body` prop only:
- **Current body:** "בואו לשיחה קצרה ונבין יחד מה הצרכים שלכם - ללא התחייבות."
- **New body:** "נשמח לעמוד לרשותכם וללוות אתכם במקצועיות ובביטחון."
- **Title stays:** "רוצים להכיר אותנו? הפגישה הראשונה עלינו" (unchanged)
- **primaryLabel stays:** "קבעו פגישה" (unchanged)

**Change type:** Update `body` prop value in `AboutCta.tsx` line 9.

### 6. SEO Metadata

Update `app/about/page.tsx` metadata description to reflect the new content:

- **Current:** "הכירו את מזון ייעוץ מס – משרד יועצי מס מוסמכים ותיק בחיפה עם למעלה מ-50 שנות ניסיון. סמי ויוסי מזון וצוות מקצועי."
- **New:** "משרד מזון יועצי מס – מוסד מקצועי ומשפחתי הפועל בלב עולם המיסוי הישראלי מאז 1966. הכירו את הצוות המוביל: יוסי מזון, שמואל (סמי) מזון וצוות מקצועי."

## Updated page.tsx structure

```tsx
// Imports: TeamScrollStory, TeamForce, ValuesSection, AboutCta,
//          RoundedTransition, RoundedTransitionUp
//          generatePageMetadata, buildLocalBusinessJsonLd
// Removed: ProcessSteps, TeamMember, StaggerChildren, StaggerItem,
//          teamMembers, SectionHeading, Container

export default function AboutPage() {
  const jsonLd = buildLocalBusinessJsonLd()

  return (
    <>
      {/* Keep existing JSON-LD script tag unchanged */}
      <script
        type="application/ld+json"
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

## data/team.ts updates

The `data/team.ts` file is still consumed by `TeamScrollStory` (for Sami and Yossi cards via the `TeamMember` component) and potentially by other pages (e.g., Homepage `MiniAbout`). Update the role and description fields to match the new PDF content:

```typescript
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

## Files Changed

| File | Change |
|------|--------|
| `app/about/page.tsx` | Remove team grid, ProcessSteps, StaggerChildren imports. Add TeamForce, ValuesSection imports. Update transitions. Update metadata description. |
| `data/team.ts` | Update roles, descriptions, credentials, experience for all 5 members per PDF. |
| `components/sections/TeamScrollStory.tsx` | Replace SectionHeading content, replace `segments` array, update `groupStyles` order. |
| `components/sections/AboutCta.tsx` | Update `body` prop to new closing line. |

## New Files

| File | Purpose |
|------|---------|
| `components/sections/TeamForce.tsx` | Server component. "הכוח המקצועי שלנו" — 3 cards for Sara, Rachel, Smadar with photos and bios. |
| `components/sections/ValuesSection.tsx` | Server component. "התפיסה המקצועית שלנו" — 3 text-only value cards. |

## Files No Longer Used by About Page

| File | Note |
|------|------|
| `components/sections/ProcessSteps.tsx` | Not deleted — used by `app/services/page.tsx`. Just removed from About page imports. |

## Design Constraints

- All text is Hebrew RTL — use `start-*`/`end-*` utilities, never `left-*`/`right-*`
- Follow existing design system: `bg-bg-card rounded-2xl`, no borders, no shadows
- Use `SectionHeading` component for section headings
- Team photos from `public/team/` — no stock photos
- No `dark:` classes — single light theme only
- Server components where possible — only `'use client'` if hooks/motion needed
- No `border-white/*` or `bg-white/*` — use design tokens

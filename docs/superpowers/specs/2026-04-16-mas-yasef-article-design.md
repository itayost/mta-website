# מס יסף 2026 — Blog Article Design

**Date:** 2026-04-16
**Source:** `מס יסף.pdf` (client letter at repo root, added 2026-04-16)
**Target surface:** New blog post under `/blog/<slug>`

## Goal

Convert the firm's client letter on מס יסף into a blog article that matches the site's existing pattern (`data/blog.ts` entry, rendered by `app/blog/[slug]/page.tsx`). Preserve the PDF's client-letter voice and its three scenario stories — those are the piece's strongest device. Reframe 2025 references to 2026, matching the rest of the site.

## Scope

In scope:
- Add one new `BlogPost` entry to `data/blog.ts`.
- Add one cross-link sentence inside the existing Post 4 (`shinuyei-mas-2026-taloush-sakhar`) pointing readers to the new deep-dive.

Out of scope:
- No new components, no new page routes, no changes to `app/blog/page.tsx` or `app/blog/[slug]/page.tsx`.
- The original PDF is not linked for download.
- No changes to the sitemap, robots, or SEO helpers — `generateStaticParams` picks up the new entry automatically.

## Content

### Metadata

| Field | Value |
|---|---|
| `slug` | `mas-yasef-madrich-meleah-2026` |
| `title` | מס יסף 2026: המס שהרבה מגלים רק ברגע האחרון — מדריך מלא |
| `excerpt` | מס יסף הוא תוספת מס של 3% על הכנסה שנתית מעל 721,560 ₪, ובעקבות הרחבת 2025 גם 2% נוספים על חלק מההכנסות הפאסיביות. שלושה תרחישים שממחישים מתי כדאי לעצור ולבדוק. |
| `date` | `2026-04-16` |
| `author` | סמי מזון |
| `tags` | `['מס יסף', 'מס עשירים', 'רווחי הון', 'דיבידנד', 'תכנון מס', 'הכנסות פאסיביות']` |
| `readTime` | `7` |
| `image` | `https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&h=630&fit=crop` (calculator close-up) |

### Article outline

HTML content structured to match existing posts (`<p>`, `<h2>`, `<h3>`, `<ul>`, `<div class="callout">`). No `<table>` — the three scenarios carry the data.

1. **פתיח — "לקוחות יקרים"**
   Warm opening paraphrased from the PDF: יש נושאים שנשמעים פשוטים ובפועל יוצרים בלבול, טעויות ולעתים תשלום מיותר. מס יסף הוא אחד מהם.

2. **`<h2>` אז מה זה בעצם מס יסף?**
   3% על הכנסה חייבת שנתית מעל הסף. סף 2026: 721,560 ₪ (ירד מ-734,000 ₪ ב-2025). חל על החלק שמעל הסף בלבד, לא על כלל ההכנסה.

3. **`<h2>` החידוש — 2% נוסף על הכנסות פאסיביות**
   החל מ-2025 וממשיך ב-2026: תוספת של 2% נוספים מעל אותו סף על חלק מההכנסות הפאסיביות: ריבית, דיבידנד, רווחי הון, שכירות (מעל הפטור), מס שבח במקרים מסוימים. משמעות: יש מקרים של 3% בלבד, ויש מקרים של 3% + 2% = 5% מס יסף אפקטיבי.

4. **`<h2>` בואו נראה איך זה נראה בחיים**

   **`<h3>` תרחיש א' — שנה טובה בעבודה**
   שכר שנתי 1,000,000 ₪. סף 721,560 ₪. חריגה 278,440 ₪. מס יסף: 3% × 278,440 = 8,353 ₪.

   **`<h3>` תרחיש ב' — משכורת טובה ורווח חד-פעמי**
   שכר 600,000 ₪ + רווח הון ממכירת מניות 200,000 ₪. סה"כ 800,000 ₪. חריגה 78,440 ₪. מס יסף: 3% × 78,440 = 2,353 ₪.
   Note to reader: הרווח ההון עצמו עלול גם להיכלל בתוספת ה-2% — כדאי לבדוק בדיוק.

   **`<h3>` תרחיש ג' — שנה עם כמה מקורות הכנסה**
   שכר 650,000 + הכנסה מעסק 80,000 + רווחי הון 600,000 + שכירות במסלול 10% = 100,000 + דיבידנד 450,000. סה"כ 1,880,000 ₪. החישוב כבר לא טריוויאלי — יש לבדוק אילו הכנסות נכללות, האם 3% בלבד או גם ה-2% הנוסף, והקיזוזים האפשריים. הפרש של עשרות אלפי שקלים תלוי בבדיקה נכונה.

5. **`<h2>` 3 דברים שבדרך-כלל מפספסים**
   Unordered list:
   - **מס שבח במכירת נכס** — לא תמיד משתקף מלא בחישוב השוטף; לבדוק בנפרד.
   - **מכירת דירת מגורים פטורה** — בדרך-כלל לא נחשבת הכנסה לצורך מס יסף.
   - **קיזוז הפסדים מניירות ערך** — עשוי להקטין את ההכנסה החייבת ואת חבות מס היסף.

6. **`<h2>` השורה התחתונה**
   `<div class="callout">` with closing paragraph: מס יסף נראה פשוט בקריאה ראשונה אך במציאות יכול להיות מורכב. אם השנה היו לכם הכנסה גבוהה מהרגיל, רווחי ניירות ערך, דיבידנדים, מכירת נכס, שכירות או שילוב בין מקורות הכנסה — כדאי לערוך בדיקה מסודרת. Includes internal link to Post 4 and CTA to `/contact`.

### Cross-linking

Inside Post 4 (`shinuyei-mas-2026-taloush-sakhar`), locate the `<h2>` titled "מס יסף (מס עשירים) 2026: הורחב" and append one sentence at the end of that section (before the next `<h2>`):

> <p>למי שרוצה להעמיק דווקא בנושא הזה — כולל שלושה תרחישים מהחיים ומה חשוב לבדוק מראש: <a href="/blog/mas-yasef-madrich-meleah-2026">מס יסף 2026: המדריך המלא</a>.</p>

The new article links back to Post 4 from the closing callout (reverse direction handled in content section 6 above).

## Implementation

### Files changed

1. `data/blog.ts`
   - Append new `BlogPost` entry after Post 4. TypeScript strict mode — must conform to the `BlogPost` type from `@/types/blog`.
   - Edit Post 4's `content` string to append the cross-link sentence in the correct section.

### No file changes needed elsewhere

- Routing: `app/blog/[slug]/page.tsx` already uses `generateStaticParams()` over `blogPosts`.
- Metadata & JSON-LD: `generateMetadata()` and `buildArticleJsonLd()` read the post record.
- Related-posts strip: derived automatically at the bottom of the post page.
- Sitemap: Next.js handles this via the existing sitemap route.

## Verification

After implementation:

- `npm run build` succeeds (no TS errors, static params generate).
- `npm run lint` clean.
- Dev server renders:
  - `/blog` — new card appears in list.
  - `/blog/mas-yasef-madrich-meleah-2026` — RTL, typography, callout all render correctly.
  - Post 4's cross-link navigates to the new article.
  - New article's "מאמרים נוספים" strip at the bottom surfaces Post 4 (shares the מס יסף tag).
- Meta check: `<title>`, `og:description`, article JSON-LD all include the new post's fields.

## Risks and mitigations

- **Factual accuracy of tax figures.** The 2026 ceiling of 721,560 ₪ is carried over from Post 4 on the user's direction. If the real 2026 figure differs, both posts need updating.
- **Duplication with Post 4's מס יסף section.** Mitigated by cross-linking and by the new article going deeper (scenarios, nuances) where Post 4 stays at summary level.
- **Scenario C uses PDF numbers directly.** The PDF sums salary 650k + business 80k + capital gains 600k + rental 100k + dividend 450k = 1,880k, with ceiling excess of 1,158,440 ₪. The original PDF's worked numbers for this scenario trail off into open-ended discussion; we'll mirror that framing (not publish a precise final 3%+2% breakdown) because the correct number depends on which income types fall under the 2% expansion — a professional judgment the article explicitly says belongs to a consultation.

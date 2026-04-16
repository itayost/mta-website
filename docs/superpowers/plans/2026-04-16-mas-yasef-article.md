# מס יסף Blog Article Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a new blog post on מס יסף (surtax) that preserves the firm's client-letter voice and three scenario stories from the source PDF, and cross-link it from the existing 2026 tax-changes article.

**Architecture:** Pure content change. Append one `BlogPost` object to the existing `data/blog.ts` array; insert one `<p>` into an existing post's HTML `content` string. Routing, SEO metadata, JSON-LD, and sitemap are derived automatically from `blogPosts` by `app/blog/[slug]/page.tsx` via `generateStaticParams()` — no new components, no new routes.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript strict mode, Tailwind v4. No test framework present; verification is `npm run build` + `npm run lint` + manual dev-server check.

**Spec:** [docs/superpowers/specs/2026-04-16-mas-yasef-article-design.md](../specs/2026-04-16-mas-yasef-article-design.md)

---

## File Structure

Only one file changes: `data/blog.ts`. Two independent edits:

- **Edit A (append):** add new `BlogPost` entry before the closing `]` at line 800.
- **Edit B (insert):** inside Post 4 (`shinuyei-mas-2026-taloush-sakhar`), inject one `<p>` between the מס יסף section's closing `</table>` (line 620) and the next `<h2>מס בריאות 2026` (line 622).

Each edit is self-contained and committed separately.

---

## Task 1: Append new BlogPost entry

**Files:**
- Modify: `data/blog.ts` (insert before line 800 `]`)

- [ ] **Step 1: Open the file and confirm the insertion anchor**

Run:
```bash
sed -n '796,800p' data/blog.ts
```

Expected output (last 5 lines):
```
  <p><strong>לסיכום:</strong> שנת 2026 אינה מביאה "העלאת מס" רשמית אחת גדולה...</p>
</div>
`,
  },
]
```

The closing `]` on the last line is the array terminator. The new entry is inserted between the `},` of Post 4 and the `]`.

- [ ] **Step 2: Insert the new BlogPost entry**

Use the `Edit` tool on `data/blog.ts`. The unique old_string is the final `},\n]` of the file.

**old_string:**
```
</div>
`,
  },
]
```

**new_string:**
```
</div>
`,
  },

  // ─── POST 5: מס יסף 2026 ────────────────────────────────────────────────────
  {
    slug: 'mas-yasef-madrich-meleah-2026',
    title: 'מס יסף 2026: המס שהרבה מגלים רק ברגע האחרון — מדריך מלא',
    excerpt:
      'מס יסף הוא תוספת מס של 3% על הכנסה שנתית מעל 721,560 ₪, ובעקבות הרחבת 2025 גם 2% נוספים על חלק מההכנסות הפאסיביות. שלושה תרחישים שממחישים מתי כדאי לעצור ולבדוק.',
    date: '2026-04-16',
    author: 'סמי מזון',
    tags: ['מס יסף', 'מס עשירים', 'רווחי הון', 'דיבידנד', 'תכנון מס', 'הכנסות פאסיביות'],
    readTime: 7,
    image:
      'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=1200&h=630&fit=crop',
    content: `
<p>יש נושאי מס שכולנו מכירים, ויש נושאים שנשמעים פשוטים אבל בפועל יוצרים לא מעט בלבול, טעויות ולעיתים גם תשלום מיותר. <strong>מס יסף</strong> — או בשמו הרשמי "מס על הכנסות גבוהות" — הוא בדיוק אחד מהם. מאמר זה מסביר בשפה פשוטה מה זה, מתי הוא חל, שלושה תרחישים מהחיים ומה חשוב לבדוק לפני שסוגרים את שנת המס.</p>

<p>לא מעט אנשים בטוחים שזה מס שרלוונטי רק ל"עשירים מאוד". בפועל, גם מי שלא רואה את עצמו כך עלול להגיע למצב שבו יצטרך לשלם אותו — במיוחד בשנים שבהן יש שילוב של כמה מקורות הכנסה: משכורת, הכנסה מעסק, רווחים מניירות ערך, דיבידנד, שכר דירה, או מכירת נכס.</p>

<h2>אז מה זה בעצם מס יסף?</h2>

<p>מס יסף הוא <strong>מס נוסף של 3%</strong> שמוטל על יחיד שהכנסתו השנתית החייבת עולה על תקרה שנקבעה בחוק. בשנת 2026 התקרה עומדת על <strong>721,560 ₪</strong> (ירידה מ-734,000 ₪ ב-2025, תוצאה של הקפאת עדכון המדד). אם סך ההכנסות החייבות שלך בשנה עבר את הסכום הזה — על החלק שמעל התקרה חל מס נוסף של 3%, נוסף על המס הרגיל.</p>

<p>חשוב להדגיש: המס חל <strong>רק על החלק שמעל הסף</strong>, לא על כל ההכנסה. זה לא "מדרגה" חדשה אלא תוספת נקודתית.</p>

<h2>החידוש — 2% נוספים על הכנסות פאסיביות</h2>

<p>החל משנת 2025, ובהמשך גם ב-2026, נכנסה הרחבה מהותית: תוספת של <strong>2% נוספים</strong> מעל אותו סף על חלק מההכנסות הפאסיביות:</p>

<ul>
  <li>ריבית</li>
  <li>דיבידנד</li>
  <li>רווחי הון</li>
  <li>הכנסות מזכויות</li>
  <li>שכר דירה מעל הפטור</li>
  <li>מס שבח במקרים מסוימים</li>
</ul>

<p>המשמעות: יש מקרים שבהם חל 3% בלבד, ויש מקרים שבהם מצטרפים גם 2% נוספים — ובסך הכול 5% מס יסף על החלק שמעל הסף. בשילוב עם מס רווח הון בשיעור 25%, השיעור האפקטיבי על הכנסות פאסיביות גבוהות עשוי לגעת ב-30%.</p>

<h2>בואו נראה איך זה נראה בחיים</h2>

<h3>תרחיש א': שנה טובה בעבודה</h3>

<p>נניח שבמהלך השנה אדם הרוויח 1,000,000 ₪ מהמשכורת שלו. הוא עשוי לחשוב: "כבר הורידו לי מס דרך התלוש, אז מה נשאר לבדוק?"</p>

<p>אבל מאחר שההכנסה השנתית שלו עברה את התקרה, הוא עלול להידרש לשלם מס יסף. החישוב פשוט:</p>

<ul>
  <li>הכנסה שנתית: 1,000,000 ₪</li>
  <li>תקרת מס יסף 2026: 721,560 ₪</li>
  <li>החלק שמעל התקרה: 278,440 ₪</li>
  <li>מס יסף 3%: <strong>8,353 ₪</strong></li>
</ul>

<p>כלומר, גם כשמדובר רק במשכורת, עדיין יכול להיווצר מס נוסף לתשלום.</p>

<h3>תרחיש ב': משכורת טובה ורווח חד-פעמי</h3>

<p>אדם אחר הרוויח 600,000 ₪ מהמשכורת, ובאותה שנה גם מכר מניות ברווח של 200,000 ₪. מבחינתו, המשכורת לבדה לא חוצה את התקרה, ולכן נראה לו שמס יסף לא נוגע אליו.</p>

<p>אבל מס יסף בודק את <strong>סך כל ההכנסות החייבות</strong> — לא רק את המשכורת:</p>

<ul>
  <li>משכורת: 600,000 ₪</li>
  <li>רווח ממניות: 200,000 ₪</li>
  <li>סך הכול: 800,000 ₪</li>
  <li>חריגה מהתקרה: 78,440 ₪</li>
  <li>מס יסף 3%: <strong>2,353 ₪</strong></li>
</ul>

<p>ועוד נקודה: רווח ההון עשוי גם להיכלל בתוספת ה-2%, ולכן החישוב המדויק יכול להיות גבוה יותר. גם כאן, רווח חד-פעמי שנראה "מבודד" משנה את כל התמונה השנתית.</p>

<h3>תרחיש ג': שנה עם כמה מקורות הכנסה</h3>

<p>ניקח עכשיו מקרה מורכב יותר. נניח שבמהלך שנה אחת היו לאדם:</p>

<ul>
  <li>משכורת: 650,000 ₪</li>
  <li>הכנסה מעסק: 80,000 ₪</li>
  <li>רווחי הון: 600,000 ₪</li>
  <li>שכר דירה במסלול 10%: 100,000 ₪</li>
  <li>דיבידנד: 450,000 ₪</li>
</ul>

<p>במקרה כזה כבר לא מספיק להסתכל רק על השאלה "כמה הרווחתי השנה?". צריך לבדוק גם:</p>

<ul>
  <li>אילו הכנסות נכללות בחישוב מס היסף</li>
  <li>מה נחשב להכנסה פאסיבית</li>
  <li>האם חל רק 3%, או שמתווסף גם 2%</li>
  <li>אילו קיזוזים והטבות יכולים להפחית את החיוב</li>
</ul>

<p>במקרים כאלה, ההפרש בין תכנון נכון לחישוב "בעיניים" יכול להגיע לעשרות אלפי שקלים. זו בדיוק הנקודה שבה אנשים רבים מגלים מאוחר מדי שהייתה כאן בדיקה שכדאי היה לעשות מראש.</p>

<h2>3 דברים שבדרך-כלל מפספסים</h2>

<ul>
  <li><strong>מס שבח במכירת נכס:</strong> החישוב לא תמיד משקף באופן מלא את ההשפעה של מס יסף. לכן חשוב לבדוק זאת בנפרד, ולא להניח שהדיווח במסגרת הרכישה או המכירה כבר "סגור".</li>
  <li><strong>מכירת דירת מגורים פטורה:</strong> אם המכירה פטורה ממס, בדרך כלל היא לא נחשבת כהכנסה לצורך חישוב מס יסף. זו נקודה שחוסכת בלבול ומונעת חיובי סרק.</li>
  <li><strong>קיזוז הפסדים מניירות ערך:</strong> אם היו הפסדים בניירות ערך, לעיתים אפשר לקזז אותם, וזה עשוי להשפיע גם על גובה מס היסף שתשלמו בפועל.</li>
</ul>

<h2>השורה התחתונה</h2>

<div class="callout">
  <p><strong>לסיכום:</strong> מס יסף הוא מסוג הנושאים שנראים פשוטים בקריאה ראשונה, אבל במציאות יכולים להיות הרבה יותר מורכבים. לפעמים מדובר בכמה אלפי שקלים, ולפעמים בסכום הרבה יותר משמעותי. אם במהלך השנה הייתה לכם הכנסה גבוהה מהרגיל, רווחי ניירות ערך, דיבידנדים, מכירת נכס, שכר דירה, או שילוב בין כמה מקורות הכנסה — כדאי לא להסתמך רק על הערכה כללית. בדיקה מסודרת מול המשרד יכולה לעזור להבין אם צפוי לכם מס יסף, אם עלול להתווסף גם מס נוסף של 2%, והאם יש דרך להיערך נכון מראש. למי שרוצה לראות את התמונה הרחבה של שינויי המס ב-2026 מעבר למס יסף, מומלץ לקרוא גם את <a href="/blog/shinuyei-mas-2026-taloush-sakhar">המדריך המלא לתלוש השכר ב-2026</a>. <a href="/contact">צרו קשר</a> לבדיקה אישית המבוססת על הנתונים שלכם בפועל.</p>
</div>
\`,
  },
]
```

Note on escaping: the template literal is opened with a backtick (`` ` ``), followed by content, closed with a backtick. The closing backtick in the new_string is written as `` \` `` here in this plan only to avoid terminating this markdown code block — when you paste it into the Edit tool, render it as a plain backtick. The file on disk must contain the unescaped backtick character.

- [ ] **Step 3: Verify TypeScript compiles**

Run:
```bash
npm run build
```

Expected: build succeeds. Look for the line `Generating static pages` — confirm 5 blog pages generate (one per post). No TS errors about `BlogPost` shape mismatch.

If the build fails with a TypeScript error, the entry doesn't conform to the `BlogPost` type at `types/blog.ts`. Re-check: all 8 required fields present (`slug`, `title`, `excerpt`, `content`, `date`, `author`, `tags`, `readTime`), `image` optional.

- [ ] **Step 4: Verify lint passes**

Run:
```bash
npm run lint
```

Expected: no errors. The existing posts pass lint with this exact structure, so a correctly-shaped new post will too.

- [ ] **Step 5: Commit**

```bash
git add data/blog.ts
git commit -m "feat: add מס יסף 2026 blog article"
```

---

## Task 2: Add cross-link inside Post 4

**Files:**
- Modify: `data/blog.ts:620-622` (Post 4's מס יסף section end)

- [ ] **Step 1: Locate the exact insertion anchor**

Run:
```bash
sed -n '619,623p' data/blog.ts
```

Expected output:
```
  </tbody>
</table>

<h2>מס בריאות 2026: שיעורים מדויקים</h2>
<p>מס הבריאות, שמממן את סל הבריאות הציבורי...</p>
```

The insertion point is the blank line between `</table>` and `<h2>מס בריאות 2026`.

- [ ] **Step 2: Insert the cross-link paragraph**

Use the `Edit` tool on `data/blog.ts`.

**old_string:**
```
</table>

<h2>מס בריאות 2026: שיעורים מדויקים</h2>
```

**new_string:**
```
</table>

<p>למי שרוצה להעמיק דווקא בנושא הזה — כולל שלושה תרחישים מהחיים ומה חשוב לבדוק מראש: <a href="/blog/mas-yasef-madrich-meleah-2026">מס יסף 2026: המדריך המלא</a>.</p>

<h2>מס בריאות 2026: שיעורים מדויקים</h2>
```

Uniqueness check: `</table>\n\n<h2>מס בריאות 2026: שיעורים מדויקים</h2>` appears exactly once in `data/blog.ts` (the phrase "מס בריאות 2026: שיעורים מדויקים" is unique to Post 4).

- [ ] **Step 3: Verify build still succeeds**

Run:
```bash
npm run build
```

Expected: build succeeds. The change is pure content inside an HTML string — no type surface touched.

- [ ] **Step 4: Commit**

```bash
git add data/blog.ts
git commit -m "feat: link מס יסף deep-dive from 2026 tax-changes article"
```

---

## Task 3: End-to-end verification in dev server

**Files:** none modified — manual verification only.

- [ ] **Step 1: Start the dev server**

Run:
```bash
npm run dev
```

Expected: server starts on `http://localhost:3000` with Turbopack. Leave it running in a background shell.

- [ ] **Step 2: Verify the blog index lists the new post**

Open `http://localhost:3000/blog` in a browser.

Expected:
- 5 post cards visible (Posts 1-4 plus the new one).
- The new card's title starts with "מס יסף 2026".
- The excerpt text matches what was written in Task 1.
- The card's image renders (calculator Unsplash URL loads).
- Clicking the card navigates to `/blog/mas-yasef-madrich-meleah-2026`.

- [ ] **Step 3: Verify the new article page renders**

At `/blog/mas-yasef-madrich-meleah-2026`:

Expected:
- H1 displays the full title in `font-display` (Frank Ruhl Libre).
- RTL layout: text starts from the right, bullet list markers on the right.
- The three `<h3>` scenario headings render as distinct sub-sections.
- The `<div class="callout">` at the bottom renders with its distinct styling (different background per globals.css callout rules — matches other posts).
- Two inline links in the closing callout work:
  - Link to `/blog/shinuyei-mas-2026-taloush-sakhar` navigates to Post 4.
  - Link to `/contact` navigates to the contact page.
- The "מאמרים נוספים" strip at the bottom shows 2 cards (they will be Posts 1 and 2 — the related-posts logic at `app/blog/[slug]/page.tsx:66` uses `slice(0, 2)`, not tag overlap).
- No console errors, no hydration warnings.

- [ ] **Step 4: Verify the reverse cross-link from Post 4**

Navigate to `/blog/shinuyei-mas-2026-taloush-sakhar`.

Scroll to the "מס יסף (מס עשירים) 2026: הורחב" section. Below its rate table, the newly-added paragraph should appear:

> למי שרוצה להעמיק דווקא בנושא הזה — כולל שלושה תרחישים מהחיים ומה חשוב לבדוק מראש: [מס יסף 2026: המדריך המלא]

Click the link. Expected: navigates to `/blog/mas-yasef-madrich-meleah-2026`.

- [ ] **Step 5: Verify SEO metadata**

View the page source (Cmd-U) of `/blog/mas-yasef-madrich-meleah-2026`.

Expected:
- `<title>` contains "מס יסף 2026: המס שהרבה מגלים רק ברגע האחרון".
- `<meta name="description">` contains the excerpt text.
- `<meta property="og:type" content="article">`.
- One `<script type="application/ld+json">` block with `"@type":"Article"` — contains the title, author "סמי מזון", datePublished `2026-04-16`, and tags.
- A second `<script type="application/ld+json">` block with breadcrumb containing "דף הבית" → "מרכז הידע" → the new title.

- [ ] **Step 6: Stop the dev server**

`Ctrl-C` in the dev-server terminal.

- [ ] **Step 7: Final commit (only if docs changed during verification)**

If Steps 1-6 surfaced any issue that required a content fix, commit it with:
```bash
git add data/blog.ts
git commit -m "fix: <one-line description of fix>"
```

Otherwise, nothing to commit — the feature is complete.

---

## Self-Review

**Spec coverage check:**

| Spec requirement | Task |
|---|---|
| New `BlogPost` entry in `data/blog.ts` | Task 1 |
| All metadata fields (slug, title, excerpt, date, author, tags, readTime, image) | Task 1 Step 2 |
| Article content: 6-section outline matching spec | Task 1 Step 2 |
| Opens with client-letter voice | Task 1 Step 2 (first two `<p>` elements) |
| Three scenarios with exact PDF numbers | Task 1 Step 2 (תרחיש א/ב/ג) |
| 2026 ceiling of 721,560 ₪ (not 2025) | Task 1 Step 2 (section "אז מה זה בעצם מס יסף?") |
| Cross-link from closing callout to Post 4 + `/contact` | Task 1 Step 2 (final `<div class="callout">`) |
| Cross-link inserted into Post 4's מס יסף section | Task 2 |
| TypeScript build succeeds | Task 1 Step 3, Task 2 Step 3 |
| Lint clean | Task 1 Step 4 |
| Dev server renders RTL article correctly | Task 3 Steps 2-3 |
| Bidirectional cross-link navigates both ways | Task 3 Steps 3-4 |
| SEO metadata + JSON-LD generated | Task 3 Step 5 |

All spec requirements covered.

**Placeholder scan:** All content blocks contain the actual HTML/TS to paste. No "implement X", no "add the content here", no "similar to Post 1". All sed line-number queries are real. All expected outputs are specific.

**Type consistency:** All field names in the new entry match `types/blog.ts` exactly (`slug`, `title`, `excerpt`, `content`, `date`, `author`, `tags`, `readTime`, `image`). `readTime` is `number`, `tags` is `string[]`, all others `string`.

**Scope note:** The spec mentioned the new article's related-posts strip would "surface Post 4 because it shares the מס יסף tag" — that is factually wrong for this codebase (the related logic uses `slice(0, 2)`, not tag overlap). The plan's Task 3 Step 3 states the actual behavior. No code change needed — it's a spec note that was inaccurate; the cross-linking works via article-body links (which this plan does add), which is the stronger mechanism anyway.

# Design System Reviewer

Review components for design system consistency in mta-website.

## Check for:
- No raw color values (hex, rgb, hsl) — must use design tokens (primary-*, accent-*, neutral-*)
- No directional CSS (left/right/pl/pr) — must use logical properties
- Card components use Card from @/components/ui/Card (not raw divs with similar styles)
- Section spacing rhythm: py-20 sm:py-28 for major sections
- Typography scale: font-light for subtitles, font-extrabold for headings
- Gradient patterns follow established from-primary-* via-* to-primary-* pattern
- Icon containers use gradient bg: bg-gradient-to-br from-primary-50 to-primary-100
- CTA buttons include shadow and active:scale-[0.98]
- No unused Tailwind classes or conflicting classes

## Output format:
`[PASS/WARN/FAIL] file:line — description`

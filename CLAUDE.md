# mta-website

Accounting firm website (משרד מזון) — Next.js 16 / React 19 / Tailwind CSS v4, Hebrew RTL.

## Commands

```bash
npm run dev          # Turbopack dev server
npm run build        # Production build
npm run lint         # ESLint
```

## Architecture

```
app/                 # Next.js App Router pages (7 pages + API + 404 + sitemap + robots)
components/
  ui/                # Primitives: Button, Card, Input, Textarea, Badge, Accordion, SectionHeading, Container, RoundedTransition, LogoMotif, StickyNavBar, ToggleGroup
  ui/motion/         # Animation wrappers: AnimateOnScroll, AnimatedCounter, SplitText, StaggerChildren, StaggerItem, PageTransition
  layout/            # Header, Footer, MobileNav, WhatsAppButton
  sections/          # Page sections: Hero, PageHero, LeadForm, BentoGrid, BenefitsBar, MiniAbout, TeamScrollStory, TeamMember, CtaSection, StepsSection, FaqSection, etc.
data/                # Static data (services, team, blog, FAQ, contact, navigation, testimonials)
lib/                 # Utilities: fonts, schemas (Zod), SEO helpers, send-lead
public/team/         # Real team photos (sami-mazon.jpeg, yossi-mazon.jpeg, sara-mazon.jpeg, smadar.jpeg, rachel.jpeg, office.jpeg)
types/               # TypeScript interfaces
```

## Design System — Warm Greige Minimal

Single light theme inspired by Aceternity Schedule Template. No dark mode, no `next-themes`, no `dark:` classes. Separation through spacing and background colors — no borders, no shadows.

### Color Tokens (`globals.css` @theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#3b82f6` | Buttons, links, accents, focus rings |
| `primary-dark` | `#2563eb` | Hover states |
| `primary-deep` | `#1d4ed8` | Gradient midpoints |
| `accent` | `#60a5fa` | Secondary CTAs, stars, highlights |
| `bg-main` | `#f0ece7` | Page background |
| `bg-surface` | `#e8e3dc` | Alternating sections, footer, drawer |
| `bg-card` | `#faf8f5` | Card backgrounds |
| `border-subtle` | `#e0dbd4` | Subtle dividers when needed |
| `text-primary` | `#2a2520` | Headlines, primary text |
| `text-muted` | `#8a8078` | Body text, descriptions |
| `success` | `#34D399` | Form success states |
| `error` | `#F87171` | Form errors, validation |

### Typography

- **Body font**: Heebo variable (100–900) — `font-sans` via `lib/fonts.ts`
- **Display font**: Frank Ruhl Libre variable (Hebrew serif) — `font-display` via `lib/fonts.ts`

| Role | Font | Weight | Size | Leading | Tracking |
|------|------|--------|------|---------|----------|
| Hero H1 | `font-display` | `font-extrabold` | `text-4xl sm:text-5xl lg:text-6xl` | `leading-tight` | `tracking-tight` |
| Page H1 | `font-display` | `font-extrabold` | `text-3xl sm:text-4xl` / `text-4xl sm:text-5xl` | `leading-tight` | `tracking-tight` |
| Section H2 | `font-display` | `font-extrabold` | `text-4xl sm:text-5xl` | `leading-tight` | `tracking-tight` |
| Small H2 | `font-display` | `font-extrabold` | `text-xl` / `text-2xl` | — | `tracking-tight` |
| Card H3 | sans (default) | `font-bold` | `text-lg` / `text-xl` | `leading-snug` | — |
| Body (large) | sans | `font-light` | `text-lg` / `text-xl` | `leading-relaxed` | — |
| Body | sans | default | `text-sm` / `text-base` | `leading-relaxed` | — |
| Labels/meta | sans | `font-medium` | `text-xs` / `text-sm` | — | — |
| Stats numbers | `font-display` | `font-black` | `text-5xl lg:text-6xl` | `leading-none` | `tracking-tight` |

- **Small/labels**: `text-text-muted/60`

### Button Variants

| Variant | Classes |
|---------|---------|
| Primary | `bg-primary text-white hover:bg-primary-dark` |
| Secondary | `bg-accent text-white` |
| Outline | `border-2 border-primary text-primary hover:bg-primary hover:text-white` |
| Ghost | `bg-bg-surface text-text-primary hover:bg-text-muted/10` |

All buttons use `rounded-full font-semibold` (pill shape).

### Card System

- Base: `bg-bg-card rounded-2xl p-6` (no borders, no shadows)
- Hover: `hover:bg-bg-surface transition-all duration-300`
- No glass variants

### Form Inputs

- `bg-bg-card text-text-primary` (borderless or `border-border-subtle`)
- Focus: `focus:border-primary focus:ring-primary/20`
- Labels: `text-text-muted`

### Section Transitions

- `RoundedTransition` / `RoundedTransitionUp` components for curved dividers between sections with different backgrounds
- No gradient bars, no glow dividers, no wave dividers
- Dark navy contrast band: `bg-[#0f1c2e]` with `text-white` / `text-white/70` — used in StatsCounter and About scrollytelling

### Library Components (copy-paste, no npm packages)

| Component | Source | Usage |
|-----------|--------|-------|
| `SplitText` | React Bits | Word-by-word text reveal in hero headings |
| `RotatingText` | React Bits | Animated rotating words in hero H1 |
| `BentoGrid` | Aceternity UI | Variable-size card grid (Homepage services) |

All use the `motion` package (v12, imports from `motion/react`).

### Brand Elements

- **LogoMotif** (`components/ui/LogoMotif.tsx`): Decorative SVG chevron mark from company logo. Used as background watermark (`opacity={0.08}`) and as primary brand visual in Hero (`opacity={1}`)
- **Hero brand card**: Logo + firm name + biblical verse (Psalms 55:23) — no stock photos, no team photos in hero
- **Team photos**: Real images in `public/team/` — used in About page (scrollytelling + team grid) and Homepage (MiniAbout avatars)

### Scrollytelling (About page)

- `TeamScrollStory` groups consecutive segments sharing the same visual into "visual groups"
- Each group renders its own 2-col grid with a CSS `sticky` visual — no JS animation, pure natural scroll
- When a group's text ends, its visual scrolls away and the next group's visual scrolls in
- Each group can have its own full-width background + `RoundedTransition` between them

## Key Conventions

- **Tailwind v4** with `@theme` block in `globals.css` — hex color tokens
- **`cn()` utility** (`lib/utils.ts`): Always use for conditional classNames — wraps clsx + tailwind-merge
- **Component API**: Card accepts `hover` prop; SectionHeading accepts `title`, `subtitle`, `id` props
- **Animations**: `animate-fade-in`, `animate-fade-in-up`, `animate-float`, scroll-reveal via `AnimateOnScroll`

## RTL / Hebrew

- `dir="rtl"` and `lang="he"` set on `<html>` in layout.tsx
- Use `start-*`/`end-*`/`inset-inline-*` — never `left-*`/`right-*`
- MobileNav slide direction: `ltr:translate-x-full rtl:-translate-x-full`

## Accessibility

- Skip link: `<a href="#main-content" className="skip-link">` in layout.tsx
- Header nav: `aria-label="ניווט ראשי"`, hamburger has `aria-expanded`
- MobileNav: `role="dialog"` + `aria-modal="true"`, focus trap, Escape to close, focus returns to hamburger
- Forms: Input/Textarea wire `aria-describedby` to error IDs, `aria-invalid` on error
- LeadForm success: `role="status"` + `aria-live="polite"`
- All focusable elements get `:focus-visible` ring via globals.css base layer
- Focus ring offset uses `ring-offset-bg-main` (light background)

## Gotchas

- React Compiler enabled (`reactCompiler: true` in next.config.ts) — avoid non-standard React patterns
- Prefer server components — only add `'use client'` when the component uses hooks, event handlers, or `motion` animations
- No `.env` file currently — API route at `/api/contact` uses `lib/send-lead.ts`
- `data/` files are static (no CMS) — all content changes are code changes
- Tailwind v4 uses `@theme` (not `tailwind.config.ts`) for custom tokens
- `next-env.d.ts` is gitignored — auto-generated by Next.js
- **No `dark:` classes** — single light theme only, no theme switching
- **No `next-themes`** — not in dependencies
- **No `border-white/*`** — use `border-text-muted/10` or `border-border-subtle` if borders are needed
- **No `bg-white/*`** — use `bg-text-muted/10` or `bg-bg-surface` for transparency effects
- **No `gold`/`navy` tokens** — removed from design system
- **No stock photos** — use real team images from `public/team/` or LogoMotif brand visual
- **Team data** in `data/team.ts` — 5 members with local image paths (no Unsplash URLs)

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
app/                 # Next.js App Router pages (7 pages + API + 404)
components/
  ui/                # Primitives: Button, Card, Input, Textarea, Badge, Accordion, SectionHeading, Container, RoundedTransition
  ui/effects/        # Visual effects: Spotlight (mouse-following glow)
  ui/motion/         # Animation wrappers: AnimateOnScroll, SplitText, StaggerChildren, PageTransition
  layout/            # Header, Footer, MobileNav, WhatsAppButton
  sections/          # Page sections: Hero, PageHero, LeadForm, StatsCounter, LogoCarousel, BentoGrid, AnimatedTestimonials, FeatureSections, etc.
data/                # Static data (services, team, blog, FAQ, contact, navigation)
lib/                 # Utilities: fonts, schemas (Zod), SEO helpers, send-lead
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

- **Font**: Heebo variable (100–900) via `lib/fonts.ts`
- **Headlines**: `font-extrabold` or `font-black`, `text-text-primary`
- **Body**: `font-light` or default, `text-text-muted`
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
| `Spotlight` | Aceternity UI | Mouse-following radial glow on hero/CTA |
| `LogoCarousel` | Cult UI | Infinite scroll logo bar (Homepage, About) |
| `BentoGrid` | Aceternity UI | Variable-size card grid (Homepage services) |
| `AnimatedTestimonials` | Aceternity UI | Auto-advancing single testimonial (Homepage) |
| `AppleCardsCarousel` | Aceternity UI | Horizontal drag-scroll cards |
| `InfiniteMovingCards` | Aceternity UI | Auto-scrolling marquee strip |
| `FeatureSections` | Aceternity UI | Categorized service feature grid |

All use the `motion` package (v12, imports from `motion/react`).

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

---
name: add-page
description: Scaffold a new Next.js page with PageHero, metadata, and consistent spacing
disable-model-invocation: true
---

Create a new page: $ARGUMENTS

## Pattern to follow:
1. Create `app/{name}/page.tsx`
2. Include Metadata export using `generatePageMetadata()` from `@/lib/seo`
3. Add PageHero with title and subtitle
4. Use `py-20 sm:py-28` section spacing
5. End with CtaBanner
6. Add route to `data/navigation.ts` if it should appear in nav
7. Add to `app/sitemap.ts`

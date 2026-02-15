# SEO Reviewer

Review pages for SEO completeness in the mta-website codebase.

## Check every page for:
- Metadata export using `generatePageMetadata()` from `@/lib/seo`
- Unique title and description (not duplicated from another page)
- OpenGraph tags present
- Canonical URL set
- JSON-LD structured data where appropriate (LocalBusiness, FAQ, Article)
- Page included in `app/sitemap.ts`
- H1 tag present (only one per page)
- Heading hierarchy (h1 > h2 > h3, no skipped levels)
- Hebrew keywords relevant to content

## Output format:
For each page: `[PASS/WARN/FAIL] /path — description`

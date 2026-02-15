import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { BlogCard } from '@/components/sections/BlogCard'
import { Badge } from '@/components/ui/Badge'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageTransition, AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { blogPosts } from '@/data/blog'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'בלוג',
  description:
    'מאמרים ומדריכים בנושאי מס, חשבונאות ופיננסים. טיפים לעצמאים, שכירים וחברות מצוות משרד מזון.',
  path: '/blog',
  keywords: ['מאמרי מס', 'בלוג חשבונאות', 'טיפים מס'],
})

export default function BlogPage() {
  const [featuredPost, ...remainingPosts] = blogPosts

  return (
    <PageTransition>
      <PageHero
        title="הבלוג שלנו"
        subtitle="מאמרים, מדריכים וטיפים בנושאי מס וחשבונאות"
        variant="editorial"
      />

      <section className="py-20 sm:py-28">
        <Container>
          {blogPosts.length > 0 ? (
            <div className="space-y-12">
              {/* Featured post — full width */}
              {featuredPost && (
                <AnimateOnScroll preset="fade-in-up">
                  <article className="rounded-2xl border border-white/5 bg-bg-card p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-white/10">
                    <div className="flex items-center gap-2 text-sm text-text-muted/60 mb-3">
                      <Calendar className="size-4" />
                      <time dateTime={featuredPost.date}>
                        {new Date(featuredPost.date).toLocaleDateString('he-IL')}
                      </time>
                      <span className="ms-2 text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                        מאמר מומלץ
                      </span>
                    </div>
                    <h2 className="text-2xl font-extrabold text-text-primary mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-4 max-w-2xl">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map((tag) => (
                          <Badge key={tag} variant="neutral">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                      >
                        <span>קרא עוד</span>
                        <ArrowLeft className="size-4" />
                      </Link>
                    </div>
                  </article>
                </AnimateOnScroll>
              )}

              {/* Remaining posts — 2-column grid */}
              {remainingPosts.length > 0 && (
                <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {remainingPosts.map((post) => (
                    <StaggerItem key={post.slug}>
                      <BlogCard post={post} />
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              )}
            </div>
          ) : (
            <p className="text-center text-text-muted text-lg">
              מאמרים חדשים יתפרסמו בקרוב. הישארו מעודכנים!
            </p>
          )}
        </Container>
      </section>

      <CtaBanner />
    </PageTransition>
  )
}

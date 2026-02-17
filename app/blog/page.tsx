import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { TrustBar } from '@/components/sections/TrustBar'
import { BlogCard } from '@/components/sections/BlogCard'
import { BlogNewsletter } from '@/components/sections/BlogNewsletter'
import { BlogCalculatorCrosslink } from '@/components/sections/BlogCalculatorCrosslink'
import { BlogCta } from '@/components/sections/BlogCta'
import { Badge } from '@/components/ui/Badge'
import { PageTransition, AnimateOnScroll, StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { blogPosts } from '@/data/blog'
import { generatePageMetadata } from '@/lib/seo'

export const metadata: Metadata = generatePageMetadata({
  title: 'מרכז הידע',
  description:
    'מאמרים ומדריכים בנושאי מס, חשבונאות ופיננסים. טיפים לעצמאים, שכירים וחברות מצוות משרד מזון.',
  path: '/blog',
  keywords: ['מאמרי מס', 'בלוג חשבונאות', 'טיפים מס', 'מדריכי מיסוי'],
})

export default function BlogPage() {
  const [featuredPost, ...remainingPosts] = blogPosts

  return (
    <PageTransition>
      <PageHero
        title="מרכז הידע"
        subtitle="מאמרים, מדריכים וטיפים מקצועיים בנושאי מס וחשבונאות"
        variant="editorial"
      />

      <TrustBar />

      <section className="py-16 sm:py-24">
        <Container>
          {blogPosts.length > 0 ? (
            <div className="space-y-12">
              {/* Featured post — 2-column with image */}
              {featuredPost && (
                <AnimateOnScroll preset="fade-in-up">
                  <article className="rounded-2xl bg-bg-card overflow-hidden transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image column */}
                      {featuredPost.image && (
                        <div className="relative aspect-video lg:aspect-auto lg:min-h-full">
                          <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-bg-card/40 via-transparent to-transparent" />
                        </div>
                      )}
                      {/* Text column */}
                      <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted/60 mb-4">
                          <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2.5 py-0.5">
                            מאמר מומלץ
                          </span>
                          <div className="flex items-center gap-1.5">
                            <Calendar className="size-3.5" />
                            <time dateTime={featuredPost.date}>
                              {new Date(featuredPost.date).toLocaleDateString('he-IL')}
                            </time>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="size-3.5" />
                            <span>{featuredPost.readTime} דק׳ קריאה</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <User className="size-3.5" />
                            <span>{featuredPost.author}</span>
                          </div>
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
                      </div>
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

      <BlogNewsletter />

      <BlogCalculatorCrosslink />

      <BlogCta />
    </PageTransition>
  )
}

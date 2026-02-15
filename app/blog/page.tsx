import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { BlogCard } from '@/components/sections/BlogCard'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageTransition, StaggerChildren, StaggerItem } from '@/components/ui/motion'
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
  return (
    <PageTransition>
      <PageHero
        title="הבלוג שלנו"
        subtitle="מאמרים, מדריכים וטיפים בנושאי מס וחשבונאות"
      />

      <section className="py-20 sm:py-28">
        <Container>
          {blogPosts.length > 0 ? (
            <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <StaggerItem key={post.slug}>
                  <BlogCard post={post} />
                </StaggerItem>
              ))}
            </StaggerChildren>
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

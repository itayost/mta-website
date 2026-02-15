import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/sections/PageHero'
import { BlogCard } from '@/components/sections/BlogCard'
import { CtaBanner } from '@/components/sections/CtaBanner'
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
    <>
      <PageHero
        title="הבלוג שלנו"
        subtitle="מאמרים, מדריכים וטיפים בנושאי מס וחשבונאות"
      />

      <section className="py-20 sm:py-28">
        <Container>
          {blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-neutral-500 text-lg">
              מאמרים חדשים יתפרסמו בקרוב. הישארו מעודכנים!
            </p>
          )}
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}

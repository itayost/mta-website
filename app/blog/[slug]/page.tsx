import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { PageHero } from '@/components/sections/PageHero'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { PageTransition } from '@/components/ui/motion'
import { blogPosts } from '@/data/blog'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: `${post.title} | משרד מזון`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'he_IL',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <PageHero title={post.title} />

      <article className="py-20 sm:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-bg-main rounded-sm"
            >
              <ArrowRight className="size-4" />
              <span>חזרה לבלוג</span>
            </Link>

            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted/60 mb-8">
              <div className="flex items-center gap-1.5">
                <Calendar className="size-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('he-IL')}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="size-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="neutral">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="prose prose-lg max-w-none text-text-muted leading-relaxed">
              <p>{post.content}</p>
            </div>
          </div>
        </Container>
      </article>

      <CtaBanner />
    </PageTransition>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, User, Share2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Badge } from '@/components/ui/Badge'
import { BlogCard } from '@/components/sections/BlogCard'
import { CopyLinkButton } from '@/components/sections/CopyLinkButton'
import { PageTransition, StaggerChildren, StaggerItem } from '@/components/ui/motion'
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
      ...(post.image && { images: [{ url: post.image, width: 1200, height: 630, alt: post.title }] }),
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(post.title)}`

  return (
    <PageTransition>
      {/* Inline gradient header instead of PageHero */}
      <div className="bg-gradient-to-b from-navy-800 to-bg-main pt-12 pb-8">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-bg-main rounded-sm"
            >
              <ArrowRight className="size-4" />
              <span>חזרה למרכז הידע</span>
            </Link>

            <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted/60 mt-4">
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
              <div className="flex items-center gap-1.5">
                <span>{post.readTime} דק׳ קריאה</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="neutral">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Hero image */}
      {post.image && (
        <Container>
          <div className="max-w-3xl mx-auto -mt-2 mb-8">
            <div className="relative aspect-[2/1] rounded-2xl border border-white/10 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/40 via-transparent to-navy-900/20" />
            </div>
          </div>
        </Container>
      )}

      <article className="py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-dark max-w-none leading-relaxed">
              <p>{post.content}</p>
            </div>

            {/* Share buttons */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-sm font-medium text-text-muted mb-3">שתפו את המאמר:</p>
              <div className="flex gap-3">
                <a
                  href={whatsappShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm font-semibold text-text-primary hover:bg-white/10 transition-all"
                >
                  <Share2 className="size-4" />
                  <span>WhatsApp</span>
                </a>
                <CopyLinkButton />
              </div>
            </div>
          </div>
        </Container>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 sm:py-20 bg-bg-surface">
          <Container>
            <h2 className="text-2xl font-extrabold text-text-primary mb-8 text-center">
              מאמרים נוספים
            </h2>
            <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
              {relatedPosts.map((relPost) => (
                <StaggerItem key={relPost.slug}>
                  <BlogCard post={relPost} />
                </StaggerItem>
              ))}
            </StaggerChildren>
          </Container>
        </section>
      )}
    </PageTransition>
  )
}

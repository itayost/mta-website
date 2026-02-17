import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { blogPosts } from '@/data/blog'

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3)

  if (latestPosts.length === 0) return null

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="מרכז הידע"
          subtitle="מאמרים, מדריכים וטיפים מקצועיים מצוות משרד מזון"
        />
        <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {latestPosts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl bg-bg-card overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                {post.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-card to-transparent" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted/60 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="size-3.5" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('he-IL')}
                      </time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="size-3.5" />
                      <span>{post.readTime} דק׳</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="size-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-text-primary mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            <span>לכל המאמרים</span>
            <ArrowLeft className="size-5" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

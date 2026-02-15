import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { BlogPost } from '@/types/blog'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card hover className="p-0 overflow-hidden">
      {post.image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg-card to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-text-muted/60 mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('he-IL')}
            </time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            <span>{post.readTime} דק׳ קריאה</span>
          </div>
        </div>
        <h3 className="text-lg font-extrabold text-text-primary mb-2">{post.title}</h3>
        <p className="text-text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs text-text-muted/60">
              <User className="size-3.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="neutral" className="text-xs px-2 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors shrink-0"
          >
            <span>קרא עוד</span>
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </div>
    </Card>
  )
}

import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { BlogPost } from '@/types/blog'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card hover>
      <div className="flex items-center gap-2 text-sm text-text-muted/60 mb-3">
        <Calendar className="size-4" />
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('he-IL')}
        </time>
      </div>
      <h3 className="text-lg font-extrabold text-text-primary mb-2">{post.title}</h3>
      <p className="text-text-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
        >
          <span>קרא עוד</span>
          <ArrowLeft className="size-4" />
        </Link>
      </div>
    </Card>
  )
}

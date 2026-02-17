import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
  id?: string
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12', className)}>
      <h2
        id={id}
        className="text-4xl font-extrabold text-text-primary sm:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 font-light text-xl text-text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

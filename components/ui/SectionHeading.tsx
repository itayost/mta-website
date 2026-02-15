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
        className="text-4xl font-extrabold text-neutral-900 sm:text-5xl"
      >
        {title}
      </h2>
      <div className={cn('w-12 h-1 bg-accent-500 rounded-full mt-4', centered && 'mx-auto')} />
      {subtitle && (
        <p className="mt-4 font-light text-xl text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

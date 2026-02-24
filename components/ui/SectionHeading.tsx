import { cn } from '@/lib/utils'
import { LogoMotif } from '@/components/ui/LogoMotif'

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
    <div className={cn('relative', centered && 'text-center', 'mb-8 sm:mb-12', className)}>
      <LogoMotif opacity={0.12} className="absolute inset-0 m-auto w-56 h-32 sm:w-80 sm:h-40" />
      <h2
        id={id}
        className="font-display text-3xl font-extrabold tracking-tight leading-tight text-text-primary sm:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 font-light text-lg leading-relaxed text-text-muted max-w-2xl mx-auto sm:mt-4 sm:text-xl">{subtitle}</p>
      )}
    </div>
  )
}

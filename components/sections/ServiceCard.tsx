import {
  BookOpen, Calculator, ClipboardCheck, FileText, Users, TrendingUp,
  Receipt, Shield, Building, BarChart3, Target, Home, Globe, Landmark,
  Heart, Search, LineChart, ChevronDown, ArrowLeft, CircleCheck,
  type LucideIcon,
} from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'
import type { Service, Audience } from '@/types/service'

const iconMap: Record<string, LucideIcon> = {
  BookOpen, Calculator, ClipboardCheck, FileText, Users, TrendingUp,
  Receipt, Shield, Building, BarChart3, Target, Home, Globe, Landmark,
  Heart, Search, LineChart,
}

const audienceLabels: Record<Audience, string> = {
  freelancers: 'עצמאים',
  employees: 'שכירים',
  companies: 'חברות',
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Calculator

  return (
    <details
      className={cn(
        'group rounded-2xl bg-bg-card',
        'transition-all duration-300',
        '[&_summary::-webkit-details-marker]:hidden'
      )}
    >
      <summary className="flex cursor-pointer items-center gap-4 p-6">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-6" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-lg font-extrabold text-text-primary">{service.title}</h4>
          <p className="text-sm text-text-muted line-clamp-1">{service.problem}</p>
        </div>
        <div className="hidden gap-1.5 sm:flex">
          {service.audiences.map((aud) => (
            <Badge key={aud} variant="neutral" className="text-xs">
              {audienceLabels[aud]}
            </Badge>
          ))}
        </div>
        <ChevronDown className="size-5 shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180" />
      </summary>

      <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-200">
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0">
            {/* Audience badges on mobile */}
            <div className="flex flex-wrap gap-1.5 mb-4 sm:hidden">
              {service.audiences.map((aud) => (
                <Badge key={aud} variant="neutral" className="text-xs">
                  {audienceLabels[aud]}
                </Badge>
              ))}
            </div>

            <p className="text-text-muted leading-relaxed mb-5">{service.description}</p>

            <div className="mb-5">
              <p className="text-sm font-semibold text-text-primary mb-3">מה תקבלו:</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-text-muted">
                    <CircleCheck className="size-4 shrink-0 text-success mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              <span>לפרטים נוספים</span>
              <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </details>
  )
}

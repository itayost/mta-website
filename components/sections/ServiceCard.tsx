import {
  BookOpen, Calculator, ClipboardCheck, FileText, Users, TrendingUp,
  Receipt, Shield, Building, BarChart3, Target, Home, Globe, Landmark,
  Heart, Search, LineChart, type LucideIcon,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { HoverScale } from '@/components/ui/motion/HoverScale'
import type { Service } from '@/types/service'

const iconMap: Record<string, LucideIcon> = {
  BookOpen, Calculator, ClipboardCheck, FileText, Users, TrendingUp,
  Receipt, Shield, Building, BarChart3, Target, Home, Globe, Landmark,
  Heart, Search, LineChart,
}

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Calculator

  return (
    <Card hover>
      <HoverScale>
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
          <Icon className="size-6" />
        </div>
      </HoverScale>
      <h3 className="text-lg font-extrabold text-text-primary mb-2">{service.title}</h3>
      <p className="text-text-muted leading-relaxed text-sm">{service.description}</p>
    </Card>
  )
}

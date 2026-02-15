import {
  BookOpen, Calculator, ClipboardCheck, FileText, Users, TrendingUp,
  Receipt, Shield, Building, BarChart3, Target, Home, Globe, Landmark,
  Heart, Search, LineChart, type LucideIcon,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
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
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-600 mb-4">
        <Icon className="size-6" />
      </div>
      <h3 className="text-lg font-bold text-neutral-900 mb-2">{service.title}</h3>
      <p className="text-neutral-600 leading-relaxed text-sm">{service.description}</p>
    </Card>
  )
}

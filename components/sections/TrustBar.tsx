import { Award, Clock, Users, ShieldCheck } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'

const trustItems = [
  { icon: Award, label: 'לשכת יועצי המס' },
  { icon: Clock, label: '50+ שנות ניסיון' },
  { icon: Users, label: '1,000+ לקוחות מרוצים' },
  { icon: ShieldCheck, label: 'יועצי מס מוסמכים' },
]

export function TrustBar() {
  return (
    <section className="py-6">
      <Container>
        <StaggerChildren className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {trustItems.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex items-center gap-2 text-text-muted/60">
                <item.icon className="size-4 text-primary/60" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

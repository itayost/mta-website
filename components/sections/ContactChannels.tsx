import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { cn } from '@/lib/utils'
import { contactInfo } from '@/data/contact'

const channels = [
  {
    icon: Phone,
    title: 'התקשרו אלינו',
    description: 'טלפון רב קווי',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    color: 'text-primary bg-primary/10',
  },
  {
    icon: MessageCircle,
    title: 'וואטסאפ',
    description: 'שלחו הודעה',
    value: 'שלחו הודעה',
    href: `https://wa.me/${contactInfo.whatsapp}`,
    color: 'text-whatsapp bg-whatsapp/10',
  },
  {
    icon: Mail,
    title: 'אימייל',
    description: 'נחזור אליכם תוך יום עסקים',
    value: contactInfo.emails,
    href: `mailto:${contactInfo.emails[0]}`,
    color: 'text-accent bg-accent/10',
  },
  {
    icon: MapPin,
    title: 'הגיעו למשרד',
    description: 'בתיאום מראש',
    value: contactInfo.address.full,
    href: `https://www.google.com/maps?q=${contactInfo.address.lat},${contactInfo.address.lng}`,
    color: 'text-primary bg-primary/10',
  },
]

export function ContactChannels() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <StaggerChildren className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 max-w-5xl mx-auto">
          {channels.map((channel) => (
            <StaggerItem key={channel.title}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center justify-center rounded-2xl bg-bg-card p-4 sm:p-6 text-center transition-all duration-300 hover:bg-primary/5 hover:-translate-y-1 h-full"
              >
                <div className={cn('flex size-11 sm:size-14 items-center justify-center rounded-2xl mb-2 sm:mb-4 transition-transform duration-300 group-hover:scale-110', channel.color)}>
                  <channel.icon className="size-5 sm:size-7" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-text-primary mb-1">
                  {channel.title}
                </h3>
                <p className="hidden sm:block text-xs text-text-muted mb-2 sm:mb-3">
                  {channel.description}
                </p>
                <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors" dir={channel.href.startsWith('tel') ? 'ltr' : undefined}>
                  {Array.isArray(channel.value)
                    ? channel.value.map((v) => <span key={v} className="block">{v}</span>)
                    : channel.value}
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

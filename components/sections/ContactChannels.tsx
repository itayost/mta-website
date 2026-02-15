import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StaggerChildren, StaggerItem } from '@/components/ui/motion'
import { contactInfo } from '@/data/contact'

const channels = [
  {
    icon: Phone,
    title: 'התקשרו אלינו',
    description: 'ראשון–חמישי 08:30–17:00',
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
    color: 'text-primary bg-primary/10',
  },
  {
    icon: MessageCircle,
    title: 'וואטסאפ',
    description: 'מענה מהיר בשעות הפעילות',
    value: 'שלחו הודעה',
    href: `https://wa.me/${contactInfo.whatsapp}`,
    color: 'text-green-400 bg-green-400/10',
  },
  {
    icon: Mail,
    title: 'אימייל',
    description: 'נחזור אליכם תוך יום עסקים',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    color: 'text-accent bg-accent/10',
  },
  {
    icon: MapPin,
    title: 'הגיעו למשרד',
    description: 'בתיאום מראש',
    value: contactInfo.address.full,
    href: `https://www.google.com/maps?q=${contactInfo.address.lat},${contactInfo.address.lng}`,
    color: 'text-gold bg-gold/10',
  },
]

export function ContactChannels() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          title="איך תרצו ליצור קשר?"
          subtitle="בחרו את הדרך הנוחה לכם — אנחנו כאן בכל ערוץ"
        />
        <StaggerChildren className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {channels.map((channel) => (
            <StaggerItem key={channel.title}>
              <a
                href={channel.href}
                target={channel.href.startsWith('http') ? '_blank' : undefined}
                rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex flex-col items-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
              >
                <div className={`flex size-14 items-center justify-center rounded-2xl ${channel.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <channel.icon className="size-7" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-1">
                  {channel.title}
                </h3>
                <p className="text-xs text-text-muted/60 mb-3">
                  {channel.description}
                </p>
                <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors" dir={channel.href.startsWith('tel') ? 'ltr' : undefined}>
                  {channel.value}
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}

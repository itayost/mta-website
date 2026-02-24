import { Phone, Mail, MapPin, Printer } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { contactInfo } from '@/data/contact'

export function ContactInfo() {
  return (
    <Card>
      <h3 className="text-lg font-bold text-text-primary mb-4">פרטי התקשרות</h3>
      <div className="space-y-4">
        <a
          href={`tel:${contactInfo.phone}`}
          className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
        >
          <div className="flex size-10 items-center justify-center rounded-lg bg-bg-surface text-primary">
            <Phone className="size-5" />
          </div>
          <div>
            <p className="text-sm text-text-muted/60">טלפון ({contactInfo.phoneLabel})</p>
            <p className="font-medium text-text-primary">{contactInfo.phone}</p>
          </div>
        </a>

        <div className="flex items-center gap-3 text-text-muted">
          <div className="flex size-10 items-center justify-center rounded-lg bg-bg-surface text-primary">
            <Printer className="size-5" />
          </div>
          <div>
            <p className="text-sm text-text-muted/60">פקס</p>
            <p className="font-medium text-text-primary">{contactInfo.fax}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 text-text-muted">
          <div className="flex size-10 items-center justify-center rounded-lg bg-bg-surface text-primary shrink-0">
            <Mail className="size-5" />
          </div>
          <div>
            <p className="text-sm text-text-muted/60">אימייל</p>
            {contactInfo.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className="block font-medium text-text-primary hover:text-primary transition-colors">
                {email}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-3 text-text-muted">
          <div className="flex size-10 items-center justify-center rounded-lg bg-bg-surface text-primary shrink-0">
            <MapPin className="size-5" />
          </div>
          <div>
            <p className="text-sm text-text-muted/60">כתובת</p>
            <p className="font-medium text-text-primary">{contactInfo.address.full}</p>
            <p className="text-sm text-text-muted">{contactInfo.address.poBox}, מיקוד {contactInfo.address.zip}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { contactInfo } from '@/data/contact'

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <h3 className="text-lg font-bold text-neutral-900 mb-4">פרטי התקשרות</h3>
        <div className="space-y-4">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100">
              <Phone className="size-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">טלפון</p>
              <p className="font-medium">{contactInfo.phone}</p>
            </div>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 text-neutral-700 hover:text-primary-600 transition-colors"
          >
            <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100">
              <Mail className="size-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">אימייל</p>
              <p className="font-medium">{contactInfo.email}</p>
            </div>
          </a>

          <div className="flex items-start gap-3 text-neutral-700">
            <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100 shrink-0">
              <MapPin className="size-5 text-primary-600" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">כתובת</p>
              <p className="font-medium">{contactInfo.address.full}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-50 to-primary-100">
            <Clock className="size-5 text-primary-600" />
          </div>
          <h3 className="text-lg font-bold text-neutral-900">שעות פעילות</h3>
        </div>
        <div className="space-y-1 text-neutral-700">
          {contactInfo.hours.map((h) => (
            <p key={h.label}>
              <span className="font-medium">{h.label}:</span> {h.display}
            </p>
          ))}
        </div>
      </Card>
    </div>
  )
}

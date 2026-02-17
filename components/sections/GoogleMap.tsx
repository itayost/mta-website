import { contactInfo } from '@/data/contact'

export function GoogleMap() {
  const { lat, lng } = contactInfo.address
  const query = encodeURIComponent(contactInfo.address.full)

  return (
    <div className="overflow-hidden rounded-2xl">
      <iframe
        title="מיקום משרד מזון על המפה"
        src={`https://www.google.com/maps?q=${lat},${lng}&z=16&output=embed`}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export const contactInfo = {
  phone: '04-8660044',
  phoneIntl: '+97248660044',
  whatsapp: '97248660044',
  email: 'office@mta.co.il',
  address: {
    street: 'שדרות המגינים 18',
    city: 'חיפה',
    zip: '3326518',
    full: 'שדרות המגינים 18, חיפה',
    lat: 32.8191,
    lng: 34.9983,
  },
  hours: [
    {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      label: 'ראשון – חמישי',
      opens: '08:30',
      closes: '17:00',
      display: '08:30–17:00',
    },
    {
      days: ['Friday'],
      label: 'שישי',
      opens: '08:30',
      closes: '13:00',
      display: '08:30–13:00',
    },
  ],
  social: {
    facebook: 'https://facebook.com/mta.co.il',
    linkedin: 'https://linkedin.com/company/mta-accounting',
  },
} as const

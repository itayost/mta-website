export interface NavItem {
  label: string
  href: string
}

export const mainNavItems: NavItem[] = [
  { label: 'דף הבית', href: '/' },
  { label: 'אודות', href: '/about' },
  { label: 'שירותים', href: '/services' },
  { label: 'בלוג', href: '/blog' },
  { label: 'שאלות נפוצות', href: '/faq' },
  { label: 'מחשבונים', href: '/calculators' },
  { label: 'צור קשר', href: '/contact' },
]

export type Audience = 'freelancers' | 'employees' | 'companies'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  audiences: Audience[]
  featured: boolean
  problem: string
  benefits: string[]
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  services: Service[]
}

export type Audience = 'freelancers' | 'employees' | 'companies'

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  audiences: Audience[]
  featured: boolean
}

export interface ServiceCategory {
  id: string
  title: string
  description: string
  services: Service[]
}

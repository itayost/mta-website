export interface ContactFormData {
  fullName: string
  phone: string
  email?: string
  message?: string
  honeypot?: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}

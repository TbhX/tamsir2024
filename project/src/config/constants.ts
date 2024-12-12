export const COMPANY_INFO = {
  name: 'Kollab A',
  email: 'contact@tamsir.fr',
  supportEmail: 'support@tamsir.fr',
  location: 'Metaverse',
  hours: 'Anytime',
  price: 1000
} as const;

export const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 3600000 // 1 hour
} as const;

export const ACCESS_CODE = {
  length: 12,
  expiryHours: 24
} as const;
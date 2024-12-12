// Email configuration with secure SMTP settings
export const EMAIL_CONFIG = {
  smtp: {
    host: 'mail.tamsir.fr',
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: 'contact@tamsir.fr',
      pass: 'Tamsirtamsir91_'
    }
  },
  sender: {
    name: 'Kollab A',
    email: 'contact@tamsir.fr'
  },
  support: {
    email: 'support@tamsir.fr'
  }
} as const;
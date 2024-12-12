// Email configuration using environment variables for security
export const EMAIL_CONFIG = {
  host: 'mail.tamsir.fr',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'contact@tamsir.fr',
    pass: process.env.SMTP_PASS
  }
} as const;

// Email templates configuration
export const EMAIL_TEMPLATES = {
  accessCode: {
    subject: 'Your Project Dashboard Access Code',
    from: '"Kollab A" <contact@tamsir.fr>'
  }
} as const;
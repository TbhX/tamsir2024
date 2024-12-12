import nodemailer from 'nodemailer';
import { EMAIL_CONFIG } from '@/config/email';

// Create reusable transporter with secure settings
const transporter = nodemailer.createTransport({
  host: EMAIL_CONFIG.smtp.host,
  port: EMAIL_CONFIG.smtp.port,
  secure: EMAIL_CONFIG.smtp.secure,
  auth: EMAIL_CONFIG.smtp.auth,
  tls: {
    rejectUnauthorized: false // Only if using self-signed certificate
  }
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async ({ to, subject, html }: EmailOptions): Promise<boolean> => {
  try {
    const info = await transporter.sendMail({
      from: `"${EMAIL_CONFIG.sender.name}" <${EMAIL_CONFIG.sender.email}>`,
      to,
      subject,
      html
    });
    
    console.log('Message sent: %s', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
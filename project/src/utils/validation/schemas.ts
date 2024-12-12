import { z } from 'zod';

// Name validation schema
export const nameSchema = z.string()
  .min(2, 'Name must be at least 2 characters')
  .max(100, 'Name must be less than 100 characters')
  .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')
  .transform(name => name.trim());

// Email validation schema
export const emailSchema = z.string()
  .email('Invalid email address')
  .max(255, 'Email must be less than 255 characters')
  .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')
  .transform(email => email.toLowerCase().trim());

// Company validation schema (optional)
export const companySchema = z.string()
  .max(100, 'Company name must be less than 100 characters')
  .regex(/^[a-zA-Z0-9\s\-'&.]*$/, 'Company name can only contain letters, numbers, spaces, and basic punctuation')
  .optional()
  .or(z.literal(''))
  .transform(company => company?.trim() || '');

// Description validation schema
export const descriptionSchema = z.string()
  .min(10, 'Description must be at least 10 characters')
  .max(2000, 'Description must be less than 2000 characters')
  .transform(desc => desc.trim());

// Timeline validation schema
export const timelineSchema = z.enum(['urgent', 'normal', 'relaxed', 'flexible'], {
  errorMap: () => ({ message: 'Please select a valid timeline' }),
});

// Honeypot validation schema
export const honeypotSchema = z.string().max(0, 'Invalid form submission');
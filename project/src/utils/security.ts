import { z } from 'zod';

// Form validation schema
export const projectFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email must be less than 255 characters')
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format'),
  
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .regex(/^[a-zA-Z0-9\s-'&.]+$/, 'Company name contains invalid characters')
    .optional(),
  
  description: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description must be less than 2000 characters')
    .regex(/^[\w\s.,!?()-]+$/, 'Description contains invalid characters'),
  
  timeline: z.enum(['urgent', 'normal', 'relaxed', 'flexible'], {
    errorMap: () => ({ message: 'Please select a valid timeline' }),
  }),
});

// Rate limiting
const requestCounts = new Map<string, { count: number; timestamp: number }>();

export const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const limit = 5; // Max requests
  const window = 3600000; // 1 hour in milliseconds
  
  const record = requestCounts.get(ip) || { count: 0, timestamp: now };
  
  // Reset if outside window
  if (now - record.timestamp > window) {
    record.count = 1;
    record.timestamp = now;
    requestCounts.set(ip, record);
    return true;
  }
  
  // Check if within limits
  if (record.count >= limit) {
    return false;
  }
  
  // Increment count
  record.count++;
  requestCounts.set(ip, record);
  return true;
};

// Honeypot field check
export const isHoneypotFilled = (honeypot: string): boolean => {
  return honeypot.length > 0;
};

// Generate secure access code
export const generateAccessCode = (): string => {
  const length = 12;
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % charset.length;
    code += charset[randomIndex];
  }
  
  return code;
};
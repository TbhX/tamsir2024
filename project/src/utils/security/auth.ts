import { z } from 'zod';
import { checkRateLimit } from './securityChecks';

// Validation schema for credentials
const credentialsSchema = z.object({
  email: z.string()
    .email('Invalid email format')
    .toLowerCase()
    .trim(),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password is too long')
});

interface AuthResult {
  success: boolean;
  error?: string;
  token?: string;
}

export const validateCredentials = async (
  email: string, 
  password: string
): Promise<AuthResult> => {
  try {
    // Rate limiting
    if (!checkRateLimit(`auth-${email}`)) {
      return {
        success: false,
        error: 'Too many login attempts. Please try again later.'
      };
    }

    // Validate input format
    const result = credentialsSchema.safeParse({ email, password });
    if (!result.success) {
      return {
        success: false,
        error: 'Invalid email or password format'
      };
    }

    // In a real app, you would:
    // 1. Hash the password
    // 2. Check against database
    // 3. Generate JWT token
    // 4. Return token on success

    // Temporary mock validation
    if (email === 'contact@tamsir.fr' && password === 'Tamsirtamsir91') {
      return {
        success: true,
        token: 'mock-jwt-token'
      };
    }

    return {
      success: false,
      error: 'Invalid email or password'
    };

  } catch (err) {
    return {
      success: false,
      error: 'Authentication failed'
    };
  }
};
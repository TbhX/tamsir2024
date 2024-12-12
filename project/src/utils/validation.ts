import { z } from 'zod';

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
    .regex(/^[a-zA-Z0-9\s-'&.]*$/, 'Company name contains invalid characters')
    .optional()
    .or(z.literal('')),
  
  description: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(2000, 'Description must be less than 2000 characters'),
  
  timeline: z.enum(['urgent', 'normal', 'relaxed', 'flexible'], {
    errorMap: () => ({ message: 'Please select a valid timeline' }),
  }),

  _honeypot: z.string().default('')
});

export type ProjectFormData = z.infer<typeof projectFormSchema>;

export const validateForm = (data: unknown) => {
  try {
    const validatedData = projectFormSchema.parse(data);
    return { success: true, data: validatedData, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = Object.fromEntries(
        error.errors.map(err => [err.path[0], err.message])
      );
      return { success: false, data: null, errors };
    }
    return { success: false, data: null, errors: { form: 'Invalid form data' } };
  }
};
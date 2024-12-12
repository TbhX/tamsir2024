import { z } from 'zod';
import {
  nameSchema,
  emailSchema,
  companySchema,
  descriptionSchema,
  timelineSchema,
  honeypotSchema
} from './schemas';

// Complete form schema
export const projectFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  company: companySchema,
  description: descriptionSchema,
  timeline: timelineSchema,
  _honeypot: honeypotSchema.default('')
});

export type ProjectFormData = z.infer<typeof projectFormSchema>;

export interface ValidationResult {
  success: boolean;
  data: ProjectFormData | null;
  errors: Record<string, string> | null;
}

export const validateForm = (data: unknown): ValidationResult => {
  try {
    const validatedData = projectFormSchema.parse(data);
    return { 
      success: true, 
      data: validatedData, 
      errors: null 
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = Object.fromEntries(
        error.errors.map(err => [
          err.path[0],
          err.message
        ])
      );
      return { 
        success: false, 
        data: null, 
        errors 
      };
    }
    return { 
      success: false, 
      data: null, 
      errors: { form: 'Invalid form data' } 
    };
  }
};
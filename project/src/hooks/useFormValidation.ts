import { useState } from 'react';
import { validateForm, type ProjectFormData } from '../utils/validation/formValidation';
import { checkRateLimit, validateHoneypot, sanitizeInput } from '../utils/validation/securityChecks';

interface UseFormValidationProps {
  onSuccess: (data: ProjectFormData) => void;
  onError: (errors: Record<string, string>) => void;
}

export const useFormValidation = ({ onSuccess, onError }: UseFormValidationProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateAndSubmit = async (formData: Partial<ProjectFormData>) => {
    setIsSubmitting(true);

    try {
      // Security checks
      if (!checkRateLimit('form-submission')) {
        onError({ form: 'Too many requests. Please try again later.' });
        return;
      }

      if (!validateHoneypot(formData._honeypot || '')) {
        onError({ form: 'Invalid form submission' });
        return;
      }

      // Sanitize inputs
      const sanitizedData = {
        ...formData,
        name: sanitizeInput(formData.name || ''),
        email: sanitizeInput(formData.email || ''),
        company: formData.company ? sanitizeInput(formData.company) : '',
        description: sanitizeInput(formData.description || '')
      };

      // Validate form data
      const result = validateForm(sanitizedData);

      if (result.success && result.data) {
        onSuccess(result.data);
      } else if (result.errors) {
        onError(result.errors);
      }
    } catch (error) {
      onError({ form: 'An unexpected error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    validateAndSubmit,
    isSubmitting
  };
};
import { useState, useCallback } from 'react';
import { validateForm } from '@/utils/validation';
import type { ProjectFormData } from '@/types/project';

interface UseProjectFormProps {
  onSuccess: (data: ProjectFormData) => void;
  onError: (error: Record<string, string>) => void;
}

export function useProjectForm({ onSuccess, onError }: UseProjectFormProps) {
  const [formData, setFormData] = useState<Partial<ProjectFormData>>({
    name: '',
    email: '',
    company: '',
    description: '',
    timeline: '',
    _honeypot: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((field: keyof ProjectFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when field is modified
    if (errors[field]) {
      setErrors(prev => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }
  }, [errors]);

  const handleSubmit = useCallback(async () => {
    try {
      setIsSubmitting(true);
      const result = validateForm(formData);
      
      if (!result.success) {
        setErrors(result.errors || {});
        onError(result.errors || {});
        return;
      }

      // In a real app, send data to API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onSuccess(result.data);
    } catch (error) {
      onError({ form: 'An unexpected error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, onSuccess, onError]);

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
}
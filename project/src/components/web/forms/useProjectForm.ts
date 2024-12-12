import { useState } from 'react';
import { useFormValidation } from '../../../hooks/useFormValidation';
import type { ProjectFormData } from '../../../utils/validation/formValidation';

const initialFormData: ProjectFormData = {
  name: '',
  email: '',
  company: '',
  description: '',
  timeline: 'normal',
  _honeypot: ''
};

export const useProjectForm = (onComplete: (data: ProjectFormData) => void) => {
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { validateAndSubmit, isSubmitting } = useFormValidation({
    onSuccess: (data) => {
      setErrors({});
      onComplete(data);
    },
    onError: (validationErrors) => {
      setErrors(validationErrors);
    }
  });

  const handleChange = (field: keyof ProjectFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when field is modified
    if (errors[field]) {
      setErrors(prev => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleSubmit = async () => {
    await validateAndSubmit(formData);
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
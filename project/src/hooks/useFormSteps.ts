import { useState, useCallback } from 'react';
import { validateForm, type ProjectFormData } from '../utils/validation/formValidation';

interface StepValidation {
  fields: (keyof ProjectFormData)[];
  validate: (data: Partial<ProjectFormData>) => boolean;
}

const stepValidations: StepValidation[] = [
  {
    fields: ['name', 'email', 'company'],
    validate: (data) => {
      if (!data.name?.trim() || !data.email?.trim()) return false;
      
      const result = validateForm({
        ...data,
        description: 'placeholder',
        timeline: 'normal',
        _honeypot: ''
      } as ProjectFormData);
      
      return result.success || (result.errors && 
        !Object.keys(result.errors).some(key => 
          ['name', 'email'].includes(key)
        ));
    }
  },
  {
    fields: ['description'],
    validate: (data) => {
      if (!data.description?.trim()) return false;
      
      const result = validateForm({
        ...data,
        name: data.name || 'placeholder',
        email: data.email || 'placeholder@example.com',
        timeline: 'normal',
        _honeypot: ''
      } as ProjectFormData);
      
      return result.success || (result.errors && 
        !Object.keys(result.errors).includes('description')
      );
    }
  },
  {
    fields: ['timeline'],
    validate: (data) => {
      if (!data.timeline) return false;
      
      const result = validateForm({
        ...data,
        name: data.name || '',
        email: data.email || '',
        description: data.description || '',
        _honeypot: ''
      } as ProjectFormData);
      
      return result.success || (result.errors && 
        !Object.keys(result.errors).includes('timeline')
      );
    }
  }
];

export function useFormSteps(initialStep = 0) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = useCallback((step: number, data: Partial<ProjectFormData>): boolean => {
    const validation = stepValidations[step];
    if (!validation) return true;

    const isValid = validation.validate(data);
    if (!isValid) {
      const result = validateForm({
        ...data,
        name: data.name || '',
        email: data.email || '',
        description: data.description || '',
        timeline: data.timeline || 'normal',
        _honeypot: ''
      } as ProjectFormData);
      
      if (result.errors) {
        const stepErrors = Object.entries(result.errors)
          .filter(([key]) => validation.fields.includes(key as keyof ProjectFormData))
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
        setErrors(stepErrors);
      }
    } else {
      setErrors({});
    }

    return isValid;
  }, []);

  const canProgress = useCallback((data: Partial<ProjectFormData>): boolean => {
    return validateStep(currentStep, data);
  }, [currentStep, validateStep]);

  const nextStep = useCallback((data: Partial<ProjectFormData>) => {
    if (canProgress(data)) {
      setCurrentStep(prev => Math.min(prev + 1, stepValidations.length - 1));
      return true;
    }
    return false;
  }, [canProgress]);

  const previousStep = useCallback(() => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
    setErrors({});
  }, []);

  return {
    currentStep,
    errors,
    canProgress,
    nextStep,
    previousStep,
    totalSteps: stepValidations.length
  };
}
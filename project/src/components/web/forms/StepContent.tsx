import React from 'react';
import { ContactStep } from './steps/ContactStep';
import { ProjectStep } from './steps/ProjectStep';
import { TimelineStep } from './steps/TimelineStep';
import type { ProjectFormData } from '@/utils/validation/formValidation';

interface StepContentProps {
  currentStep: number;
  data: Partial<ProjectFormData>;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
  errors: Record<string, string>;
}

export function StepContent({
  currentStep,
  data,
  onChange,
  errors
}: StepContentProps) {
  switch (currentStep) {
    case 0:
      return (
        <ContactStep
          data={data}
          onChange={onChange}
          errors={errors}
        />
      );
    case 1:
      return (
        <ProjectStep
          data={data}
          onChange={onChange}
          errors={errors}
        />
      );
    case 2:
      return (
        <TimelineStep
          data={data}
          onChange={onChange}
          errors={errors}
        />
      );
    default:
      return null;
  }
}
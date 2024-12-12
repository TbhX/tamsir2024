import React from 'react';
import { FormField } from '../FormField';
import type { ProjectFormData } from '@/utils/validation/formValidation';

interface ProjectStepProps {
  data: Partial<ProjectFormData>;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
  errors: Record<string, string>;
}

export function ProjectStep({ data, onChange, errors }: ProjectStepProps) {
  return (
    <div className="space-y-6">
      <FormField
        label="Project Description"
        type="textarea"
        value={data.description || ''}
        onChange={onChange('description')}
        error={errors.description}
        placeholder="Describe your project, requirements, and any specific features you need..."
        required
      />
    </div>
  );
}
import React from 'react';
import { Briefcase } from 'lucide-react';
import { FormField } from '../../../forms/FormField';
import type { ProjectFormData } from '../../../../../types/web';

interface ProjectStepProps {
  data: Pick<ProjectFormData, 'description'>;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
  errors: Partial<Record<keyof ProjectFormData, string>>;
}

export function ProjectStep({ data, onChange, errors }: ProjectStepProps) {
  return (
    <FormField
      label="Project Description"
      type="textarea"
      value={data.description}
      onChange={onChange('description')}
      error={errors.description}
    />
  );
}
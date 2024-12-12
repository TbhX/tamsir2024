import React from 'react';
import { FormField } from '../../../forms/FormField';
import type { ProjectFormData } from '@/utils/validation';

interface ContactStepProps {
  data: Partial<ProjectFormData>;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
  errors: Record<string, string>;
}

export function ContactStep({ data, onChange, errors }: ContactStepProps) {
  return (
    <div className="space-y-6">
      <FormField
        label="Name"
        type="text"
        value={data.name || ''}
        onChange={onChange('name')}
        error={errors.name}
        required
      />

      <FormField
        label="Email"
        type="email"
        value={data.email || ''}
        onChange={onChange('email')}
        error={errors.email}
        required
      />

      <FormField
        label="Company"
        type="text"
        value={data.company || ''}
        onChange={onChange('company')}
        error={errors.company}
        required={false}
      />
    </div>
  );
}
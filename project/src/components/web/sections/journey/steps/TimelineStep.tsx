import React from 'react';
import { Clock } from 'lucide-react';
import { FormField } from '../../../forms/FormField';
import { timelineOptions } from '../../../../../config/formOptions';
import type { ProjectFormData } from '../../../../../types/web';

interface TimelineStepProps {
  data: Pick<ProjectFormData, 'timeline'>;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
  errors: Partial<Record<keyof ProjectFormData, string>>;
}

export function TimelineStep({ data, onChange, errors }: TimelineStepProps) {
  return (
    <FormField
      label="Timeline"
      type="select"
      value={data.timeline}
      onChange={onChange('timeline')}
      options={timelineOptions}
      error={errors.timeline}
    />
  );
}
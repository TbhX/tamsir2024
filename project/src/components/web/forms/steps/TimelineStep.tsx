import React from 'react';
import { FormField } from '../FormField';
import { timelineOptions } from '@/config/formOptions';
import type { ProjectFormData } from '@/utils/validation/formValidation';

interface TimelineStepProps {
  data: Partial<ProjectFormData>;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
  errors: Record<string, string>;
}

export function TimelineStep({ data, onChange, errors }: TimelineStepProps) {
  return (
    <div className="space-y-6">
      <FormField
        label="Project Timeline"
        type="select"
        value={data.timeline || ''}
        onChange={onChange('timeline')}
        error={errors.timeline}
        options={timelineOptions}
        placeholder="Select your preferred timeline"
        required
      />

      <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
        <h4 className="text-sm font-medium text-gray-300 mb-3">Timeline Options:</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>• Urgent: Less than 1 month</li>
          <li>• Normal: 1-2 months</li>
          <li>• Relaxed: 2-3 months</li>
          <li>• Flexible: Timeline determined during consultation</li>
        </ul>
      </div>
    </div>
  );
}
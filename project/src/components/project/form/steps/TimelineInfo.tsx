import React from 'react';
import { FormField } from '../FormField';
import type { ProjectFormData } from '@/types/project';

interface TimelineInfoProps {
  formData: ProjectFormData;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
}

export function TimelineInfo({ formData, onChange }: TimelineInfoProps) {
  const timelineOptions = [
    { value: 'urgent', label: 'Less than 1 month' },
    { value: 'normal', label: '1-2 months' },
    { value: 'relaxed', label: '2-3 months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const budgetOptions = [
    { value: 'basic', label: '€1,000 - Basic Package' },
    { value: 'standard', label: '€2,000 - Standard Package' },
    { value: 'premium', label: '€3,000+ - Premium Package' },
    { value: 'custom', label: 'Custom Budget' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Timeline & Budget</h2>
      <p className="text-gray-600">Help us understand your project constraints.</p>

      <FormField
        label="Project Timeline"
        type="select"
        value={formData.timeline}
        onChange={(e) => onChange('timeline')(e.target.value)}
        required
        options={timelineOptions}
        placeholder="Select your preferred timeline"
      />

      <FormField
        label="Budget Range"
        type="select"
        value={formData.budget}
        onChange={(e) => onChange('budget')(e.target.value)}
        required
        options={budgetOptions}
        placeholder="Select your budget range"
      />

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Note:</h3>
        <p className="text-sm text-gray-600">
          The final project cost will be determined based on your specific requirements 
          and chosen features. We'll provide a detailed quote after our initial consultation.
        </p>
      </div>
    </div>
  );
}
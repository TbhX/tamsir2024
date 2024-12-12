import React, { useState } from 'react';
import { FormField } from './FormField';
import { timelineOptions } from '@/config/formOptions';
import type { ProjectFormData } from '@/utils/validation/formValidation';

interface ProjectFormProps {
  onSubmit: (data: ProjectFormData) => void;
}

export function ProjectForm({ onSubmit }: ProjectFormProps) {
  const [formData, setFormData] = useState<ProjectFormData>({
    name: '',
    email: '',
    company: '',
    description: '',
    timeline: '',
    _honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: keyof ProjectFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when field is modified
    if (errors[field]) {
      setErrors(prev => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-6">
        <FormField
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange('name')}
          error={errors.name}
          placeholder="Enter your full name"
          required
        />

        <FormField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          error={errors.email}
          placeholder="Enter your email address"
          required
        />

        <FormField
          label="Company"
          type="text"
          value={formData.company}
          onChange={handleChange('company')}
          error={errors.company}
          placeholder="Enter your company name (optional)"
          required={false}
        />

        <FormField
          label="Project Description"
          type="textarea"
          value={formData.description}
          onChange={handleChange('description')}
          error={errors.description}
          placeholder="Describe your project, requirements, and any specific features you need..."
          required
        />

        <FormField
          label="Project Timeline"
          type="select"
          value={formData.timeline}
          onChange={handleChange('timeline')}
          error={errors.timeline}
          options={timelineOptions}
          placeholder="Select your preferred timeline"
          required
        />

        {/* Hidden honeypot field */}
        <input
          type="text"
          name="_honeypot"
          value={formData._honeypot}
          onChange={(e) => handleChange('_honeypot')(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
      >
        Submit Project Request
      </button>
    </form>
  );
}
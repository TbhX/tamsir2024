import React from 'react';
import { FormField } from '../FormField';
import type { ProjectFormData } from '@/types/project';

interface ProjectInfoProps {
  formData: ProjectFormData;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
}

export function ProjectInfo({ formData, onChange }: ProjectInfoProps) {
  const projectTypes = [
    { value: 'website', label: 'Website Development' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'webapp', label: 'Web Application' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Project Details</h2>
      <p className="text-gray-600">Tell us about your project requirements.</p>

      <FormField
        label="Project Type"
        type="select"
        value={formData.projectType}
        onChange={(e) => onChange('projectType')(e.target.value)}
        required
        options={projectTypes}
        placeholder="Select project type"
      />

      <FormField
        label="Project Description"
        type="textarea"
        value={formData.description}
        onChange={(e) => onChange('description')(e.target.value)}
        required
        placeholder="Describe your project requirements, goals, and any specific features you need..."
      />
    </div>
  );
}
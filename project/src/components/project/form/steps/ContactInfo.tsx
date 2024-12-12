import React from 'react';
import { FormField } from '../FormField';
import type { ProjectFormData } from '@/types/project';

interface ContactInfoProps {
  formData: ProjectFormData;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
}

export function ContactInfo({ formData, onChange }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
      <p className="text-gray-600">Let us know how to reach you.</p>

      <FormField
        label="Full Name"
        type="text"
        value={formData.name}
        onChange={(e) => onChange('name')(e.target.value)}
        required
        placeholder="Enter your full name"
      />

      <FormField
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => onChange('email')(e.target.value)}
        required
        placeholder="Enter your email address"
      />
    </div>
  );
}
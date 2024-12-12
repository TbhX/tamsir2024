import React from 'react';
import { motion } from 'framer-motion';
import { ContactInfo } from './steps/ContactInfo';
import { ProjectInfo } from './steps/ProjectInfo';
import { TimelineInfo } from './steps/TimelineInfo';
import type { ProjectFormData } from '@/types/project';

interface FormStepProps {
  step: number;
  formData: ProjectFormData;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
}

export function FormStep({ step, formData, onChange }: FormStepProps) {
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      {step === 0 && (
        <ContactInfo
          formData={formData}
          onChange={onChange}
        />
      )}
      {step === 1 && (
        <ProjectInfo
          formData={formData}
          onChange={onChange}
        />
      )}
      {step === 2 && (
        <TimelineInfo
          formData={formData}
          onChange={onChange}
        />
      )}
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  hasErrors: boolean;
}

export function FormProgress({ currentStep, totalSteps, hasErrors }: FormProgressProps) {
  return (
    <div className="h-2 bg-gray-700">
      <motion.div
        className={`h-full transition-colors ${hasErrors ? 'bg-red-500' : 'bg-indigo-500'}`}
        initial={{ width: '33.33%' }}
        animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
      />
    </div>
  );
}
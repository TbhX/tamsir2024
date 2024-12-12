import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  errors?: boolean;
}

export function ProgressBar({ currentStep, totalSteps, errors }: ProgressBarProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
      <div
        className={`h-full transition-all duration-500 ${
          errors ? 'bg-red-500' : 'bg-indigo-500'
        }`}
        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
      />
    </div>
  );
}
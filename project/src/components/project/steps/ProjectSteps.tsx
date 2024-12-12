import React from 'react';
import { ContactStep } from './ContactStep';
import { DescriptionStep } from './DescriptionStep';
import { TimelineStep } from './TimelineStep';
import type { ProjectFormData } from '@/types/project';

interface ProjectStepsProps {
  currentStep: number;
  formData: Partial<ProjectFormData>;
  errors: Record<string, string>;
  onChange: (field: keyof ProjectFormData) => (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isSubmitting: boolean;
}

export function ProjectSteps({
  currentStep,
  formData,
  errors,
  onChange,
  onNext,
  onBack,
  isSubmitting
}: ProjectStepsProps) {
  const steps = [
    {
      title: "Let's Get Started",
      component: ContactStep
    },
    {
      title: 'Project Details',
      component: DescriptionStep
    },
    {
      title: 'Timeline & Budget',
      component: TimelineStep
    }
  ];

  const StepComponent = steps[currentStep].component;

  return (
    <div className="bg-gray-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-6">{steps[currentStep].title}</h2>
      
      <StepComponent
        data={formData}
        errors={errors}
        onChange={onChange}
      />

      <div className="flex justify-between mt-8">
        {currentStep > 0 && (
          <button
            onClick={onBack}
            className="px-6 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Back
          </button>
        )}
        
        <button
          onClick={onNext}
          disabled={isSubmitting}
          className="ml-auto px-8 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 
                   disabled:cursor-not-allowed rounded-lg transition-colors"
        >
          {isSubmitting ? 'Processing...' : currentStep === 2 ? 'Submit' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
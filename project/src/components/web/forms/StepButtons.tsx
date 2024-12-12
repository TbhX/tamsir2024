import React from 'react';

interface StepButtonsProps {
  currentStep: number;
  canProgress: boolean;
  onNext: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
}

export function StepButtons({
  currentStep,
  canProgress,
  onNext,
  onBack,
  isLastStep = false
}: StepButtonsProps) {
  return (
    <div className="flex justify-between mt-6">
      {currentStep > 0 && onBack && (
        <button
          onClick={onBack}
          type="button"
          className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
        >
          Back
        </button>
      )}
      <button
        onClick={onNext}
        type="button"
        disabled={!canProgress}
        className={`ml-auto px-8 py-3 rounded-lg font-semibold transition-all ${
          canProgress
            ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
            : 'bg-gray-700 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isLastStep ? 'Complete' : 'Continue'}
      </button>
    </div>
  );
}
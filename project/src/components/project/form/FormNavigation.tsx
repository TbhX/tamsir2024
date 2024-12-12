import React from 'react';
import { ArrowRight, Send } from 'lucide-react';

interface FormNavigationProps {
  step: number;
  onNext: () => void;
  onBack: () => void;
  onSubmit: (e: React.FormEvent) => void;
  isValid: boolean;
}

export function FormNavigation({
  step,
  onNext,
  onBack,
  onSubmit,
  isValid
}: FormNavigationProps) {
  return (
    <div className="mt-8 flex justify-between">
      {step > 0 && (
        <button
          onClick={onBack}
          className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
        >
          Back
        </button>
      )}

      {step < 2 ? (
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`
            ml-auto flex items-center gap-2 px-6 py-3 rounded-lg font-medium
            transition-colors ${
              isValid
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          Continue
          <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={onSubmit}
          disabled={!isValid}
          className={`
            ml-auto flex items-center gap-2 px-6 py-3 rounded-lg font-medium
            transition-colors ${
              isValid
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }
          `}
        >
          <Send className="w-4 h-4" />
          Submit Project
        </button>
      )}
    </div>
  );
}
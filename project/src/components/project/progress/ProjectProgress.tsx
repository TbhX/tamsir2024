import React from 'react';
import { motion } from 'framer-motion';
import { Check, AlertTriangle } from 'lucide-react';

interface ProjectProgressProps {
  currentStep: number;
  totalSteps: number;
  hasErrors: boolean;
}

export function ProjectProgress({ 
  currentStep, 
  totalSteps,
  hasErrors 
}: ProjectProgressProps) {
  return (
    <div className="relative">
      {/* Progress Bar */}
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${hasErrors ? 'bg-red-500' : 'bg-indigo-500'}`}
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Step Indicators */}
      <div className="absolute -top-8 left-0 right-0 flex justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          
          return (
            <div 
              key={index}
              className={`
                flex items-center justify-center w-6 h-6 rounded-full
                ${isCompleted ? 'bg-indigo-500' : isCurrent ? 'bg-white' : 'bg-gray-700'}
                ${isCurrent && hasErrors ? 'ring-2 ring-red-500' : ''}
              `}
            >
              {isCompleted ? (
                <Check className="w-4 h-4 text-white" />
              ) : isCurrent && hasErrors ? (
                <AlertTriangle className="w-4 h-4 text-red-500" />
              ) : (
                <span className={`text-sm ${isCurrent ? 'text-gray-900' : 'text-gray-400'}`}>
                  {index + 1}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
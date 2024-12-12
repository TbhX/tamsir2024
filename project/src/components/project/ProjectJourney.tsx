import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ProjectFormData {
  name: string;
  email: string;
  description: string;
}

export function ProjectJourney() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ProjectFormData>({
    name: '',
    email: '',
    description: ''
  });

  const handleChange = (field: keyof ProjectFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(prev => prev + 1);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {[0, 1, 2].map(index => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${index < step ? 'bg-green-500' : index === step ? 'bg-blue-500' : 'bg-gray-700'}`}
              >
                {index < step ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-700 rounded-full">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-lg p-6"
        >
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={handleChange('name')}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-4">Project Details</h2>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  value={formData.description}
                  onChange={handleChange('description')}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Review</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Description:</strong> {formData.description}</p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="px-6 py-2 text-gray-400 hover:text-white"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              className="ml-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
            >
              {step === 2 ? 'Submit' : 'Continue'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
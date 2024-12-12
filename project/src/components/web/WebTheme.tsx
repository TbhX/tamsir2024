import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Hero } from './sections/Hero';
import { SingleOffer } from './sections/SingleOffer';
import { SimpleProjectForm } from '../project/SimpleProjectForm';
import { ProjectSuccess } from '../project/ProjectSuccess';
import { FAQ } from './sections/FAQ';
import { TermsOfService } from './sections/terms/TermsOfService';
import { FloatingOfferButton } from './ui/FloatingOfferButton';
import { LanguageToggle } from '../common/LanguageToggle';
import { validateForm } from '@/utils/validation';
import type { ProjectFormData } from '@/types/project';

interface WebThemeProps {
  showTerms: boolean;
  onCloseTerms: () => void;
}

export function WebTheme({ showTerms, onCloseTerms }: WebThemeProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<ProjectFormData>({
    name: '',
    email: '',
    paymentOption: ''
  });

  const handleStepComplete = async (data: ProjectFormData) => {
    const validation = validateForm(data);

    if (!validation.success) {
      console.error('Validation errors:', validation.errors);
      return;
    }

    setFormData(data);
    setStep(prev => prev + 1);
  };

  const goHome = () => {
    setStep(0);
    setFormData({
      name: '',
      email: '',
      paymentOption: ''
    });
  };

  const startProject = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Home Button */}
      {(step > 0 || showTerms) && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={goHome}
          className="fixed top-6 left-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-lg transition-colors"
          aria-label="Return to home"
        >
          <Home className="w-6 h-6" />
        </motion.button>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={`${step}-${showTerms}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {showTerms ? (
            <TermsOfService onClose={onCloseTerms} />
          ) : (
            <>
              {step === 0 && (
                <>
                  <Hero onStart={startProject} />
                  <SingleOffer onStartProject={startProject} />
                  <FAQ />
                </>
              )}
              {step === 1 && (
                <div className="min-h-screen flex items-center justify-center p-4">
                  <SimpleProjectForm onSubmit={handleStepComplete} />
                </div>
              )}
              {step === 2 && (
                <ProjectSuccess formData={formData} onReset={goHome} />
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
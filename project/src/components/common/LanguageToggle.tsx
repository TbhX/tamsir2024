import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { currentLang, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-50 px-4 py-2 bg-white/10 hover:bg-white/20 
                 backdrop-blur-sm rounded-full text-white font-medium transition-colors"
      aria-label={`Switch to ${currentLang === 'fr' ? 'English' : 'French'}`}
    >
      <span className="relative">
        {currentLang === 'fr' ? 'EN' : 'FR'}
        <motion.div
          layoutId="language-indicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </span>
    </motion.button>
  );
}
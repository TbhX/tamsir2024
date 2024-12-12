import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface JourneyStepProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  error?: string;
  isValid?: boolean;
}

export function JourneyStep({ 
  icon: Icon, 
  title, 
  children, 
  error,
  isValid 
}: JourneyStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-12"
    >
      <div className="text-center mb-12">
        <Icon className={`w-16 h-16 mx-auto mb-6 ${
          error ? 'text-red-400' : isValid ? 'text-green-400' : 'text-indigo-400'
        }`} />
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
      </div>

      <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-200">{error}</p>
          </div>
        )}
        
        {children}
      </div>
    </motion.div>
  );
}
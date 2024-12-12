import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FloatingOfferButtonProps {
  onClick: () => void;
}

export function FloatingOfferButton({ onClick }: FloatingOfferButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-8 left-8 z-50 group"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
        
        {/* Button content */}
        <div className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-semibold shadow-lg">
          <Sparkles className="w-5 h-5" />
          <span>View Offer</span>
          <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-white text-indigo-600 text-sm font-bold rounded-full">
            €1k
          </div>
        </div>
      </div>
    </motion.button>
  );
}
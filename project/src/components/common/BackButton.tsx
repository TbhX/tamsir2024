import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

export function BackButton({ 
  onClick, 
  label = 'Back', 
  className = '' 
}: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-800/90 hover:bg-gray-700/90 text-white rounded-lg backdrop-blur-sm transition-colors ${className}`}
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}
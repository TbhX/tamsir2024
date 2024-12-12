import React from 'react';
import { Loader2 } from 'lucide-react';
import type { Theme } from '../types';
import { themeConfigs } from '../config/themes';

interface LoadingTransitionProps {
  theme: Theme;
}

export function LoadingTransition({ theme }: LoadingTransitionProps) {
  const config = themeConfigs[theme];
  
  return (
    <div className={`fixed inset-0 ${config.primaryColor} flex items-center justify-center z-50`}>
      <div className="relative">
        <div className={`absolute inset-0 ${config.accentColor} blur-3xl opacity-20 animate-pulse`} />
        <div className="relative text-center">
          <Loader2 className={`w-12 h-12 ${config.textColor} animate-spin`} />
          <p className={`mt-4 text-lg font-medium ${config.textColor}`}>
            Loading {config.name}...
          </p>
        </div>
      </div>
    </div>
  );
}
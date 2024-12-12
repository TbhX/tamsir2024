import React from 'react';
import { LogIn } from 'lucide-react';
import { Navigation } from './Navigation';
import type { Theme } from '@/types';

interface HeaderProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function Header({ theme, onThemeChange }: HeaderProps) {
  const handleLoginClick = () => {
    window.location.href = '/dashboard';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Navigation 
            currentTheme={theme} 
            onThemeChange={onThemeChange} 
          />

          {theme === 'web' && (
            <button
              onClick={handleLoginClick}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              <LogIn className="w-5 h-5" />
              <span>Accès Client</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
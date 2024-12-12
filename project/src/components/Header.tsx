import React from 'react';
import { Code2, Music, Gamepad2, LogIn } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Theme } from '../types';

interface HeaderProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function Header({ theme, onThemeChange }: HeaderProps) {
  const themes = [
    { id: 'web', name: 'Web Dev', icon: Code2, color: 'from-indigo-600 to-purple-600' },
    { id: 'musical', name: 'Music', icon: Music, color: 'from-green-600 to-emerald-600' },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2, color: 'from-purple-600 to-pink-600' }
  ] as const;

  const handleLoginClick = () => {
    window.location.href = '/dashboard';
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Theme Navigation */}
          <nav className="flex space-x-4">
            {themes.map(({ id, name, icon: Icon, color }) => (
              <button
                key={id}
                onClick={() => onThemeChange(id as Theme)}
                className={`
                  relative group flex items-center gap-2 px-4 py-2 rounded-lg 
                  transition-all duration-300
                  ${theme === id 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                  }
                `}
              >
                {/* Background Gradient */}
                {theme === id && (
                  <motion.div
                    layoutId="active-theme"
                    className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 rounded-lg`}
                  />
                )}

                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <Icon className={`w-5 h-5 transition-transform duration-300 
                    ${theme === id ? 'scale-110' : 'group-hover:scale-110'}`} 
                  />
                  <span className="font-medium">{name}</span>
                </div>
              </button>
            ))}
          </nav>

          {/* Login Button - Only show for web theme */}
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
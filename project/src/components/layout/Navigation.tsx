import React from 'react';
import { Code2, Music, Gamepad2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Theme } from '@/types';

interface NavigationProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function Navigation({ currentTheme, onThemeChange }: NavigationProps) {
  const themes = [
    { id: 'web', name: 'Web Dev', icon: Code2, color: 'from-indigo-600 to-purple-600' },
    { id: 'musical', name: 'Music', icon: Music, color: 'from-green-600 to-emerald-600' },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2, color: 'from-purple-600 to-pink-600' }
  ] as const;

  return (
    <nav className="flex space-x-4">
      {themes.map(({ id, name, icon: Icon, color }) => (
        <button
          key={id}
          onClick={() => onThemeChange(id as Theme)}
          className={`
            relative group flex items-center gap-2 px-4 py-2 rounded-lg 
            transition-all duration-300
            ${currentTheme === id 
              ? 'text-white' 
              : 'text-gray-400 hover:text-white'
            }
          `}
        >
          {currentTheme === id && (
            <motion.div
              layoutId="active-theme"
              className={`absolute inset-0 bg-gradient-to-r ${color} opacity-20 rounded-lg`}
            />
          )}

          <div className="relative flex items-center gap-2">
            <Icon className={`w-5 h-5 transition-transform duration-300 
              ${currentTheme === id ? 'scale-110' : 'group-hover:scale-110'}`} 
            />
            <span className="font-medium">{name}</span>
          </div>
        </button>
      ))}
    </nav>
  );
}
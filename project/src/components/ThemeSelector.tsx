import React from 'react';
import { Code2, Music, Gamepad2 } from 'lucide-react';
import type { Theme } from '../types';
import { themeConfigs } from '../config/themes';

interface ThemeSelectorProps {
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function ThemeSelector({ currentTheme, onThemeChange }: ThemeSelectorProps) {
  const themes = [
    { id: 'web', name: 'Web', icon: Code2 },
    { id: 'musical', name: 'Music', icon: Music },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
  ] as const;

  return (
    <div className="flex justify-center space-x-6 p-6">
      {themes.map(({ id, name, icon: Icon }) => {
        const config = themeConfigs[id];
        const isActive = currentTheme === id;
        
        return (
          <button
            key={id}
            onClick={() => onThemeChange(id as Theme)}
            className={`
              relative group flex items-center space-x-3 px-6 py-3 rounded-lg transition-all duration-300
              ${isActive 
                ? `${config.accentColor} bg-opacity-10 ${config.textColor}` 
                : 'bg-white/5 text-gray-400 hover:text-gray-200'
              }
            `}
          >
            {isActive && (
              <div className={`absolute inset-0 ${config.accentColor} blur-xl opacity-20`} />
            )}
            <div className="relative flex items-center space-x-3">
              <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className="font-medium">{name}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
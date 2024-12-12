import { useState, useCallback } from 'react';
import type { Theme } from '@/types';

export function useTheme(initialTheme: Theme = 'web') {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const handleThemeChange = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
  }, []);

  return {
    theme,
    setTheme: handleThemeChange
  };
}
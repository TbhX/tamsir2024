import { useState, useCallback } from 'react';
import { en } from '../locales/en';
import { fr } from '../locales/fr';

type Language = 'en' | 'fr';
type Translations = typeof en;

export function useTranslation() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');

  const t = useCallback((key: keyof Translations) => {
    const translations = currentLang === 'fr' ? fr : en;
    return translations[key];
  }, [currentLang]);

  const toggleLanguage = useCallback(() => {
    setCurrentLang(prev => prev === 'fr' ? 'en' : 'fr');
  }, []);

  return {
    t,
    currentLang,
    toggleLanguage
  };
}
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export function FooterGaming() {
  const { t } = useLanguage();

  return (
    <div className="text-center">
      <a
        href="https://le91arena.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition-all duration-300 group hover:scale-105"
      >
        <span className="text-lg">{t('footerGaming.visitWebsite')}</span>
        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
      </a>
    </div>
  );
}
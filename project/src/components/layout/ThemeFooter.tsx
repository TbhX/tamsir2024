import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { COMPANY_INFO } from '@/config';
import { FooterSocial } from './footer/FooterSocial';
import { FooterContact } from './footer/FooterContact';
import { FooterGaming } from './footer/FooterGaming';
import { FooterMusic } from './footer/FooterMusic';
import { getFooterConfig } from './footer/config';
import type { Theme } from '@/types';

interface ThemeFooterProps {
  theme: Theme;
  onShowTerms: () => void;
}

export function ThemeFooter({ theme, onShowTerms }: ThemeFooterProps) {
  const { t } = useLanguage();
  const config = getFooterConfig(theme);

  return (
    <footer className={`${config.background} backdrop-blur-sm border-t ${config.border}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {theme === 'gaming' ? (
          <FooterGaming />
        ) : theme === 'musical' ? (
          <FooterMusic />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FooterSocial 
              theme={theme}
              config={config}
            />
            <FooterContact 
              config={config}
            />
          </div>
        )}

        <div className={`pt-8 mt-8 border-t ${config.border}`}>
          <p className={`text-center ${config.muted}`}>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. {t('footerWeb.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
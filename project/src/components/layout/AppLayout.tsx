import React from 'react';
import { Header } from '../Header';
import { ThemeFooter } from './ThemeFooter';
import { CookieConsent } from '../common/CookieConsent';
import type { Theme } from '@/types';

interface AppLayoutProps {
  children: React.ReactNode;
  theme: Theme;
  showTerms: boolean;
  isDashboardRoute: boolean;
  onThemeChange: (theme: Theme) => void;
  onShowTerms: () => void;
  onCloseTerms: () => void;
}

export function AppLayout({
  children,
  theme,
  showTerms,
  isDashboardRoute,
  onThemeChange,
  onShowTerms,
  onCloseTerms
}: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {!isDashboardRoute && (
        <Header 
          theme={theme} 
          onThemeChange={onThemeChange} 
        />
      )}
      
      {children}

      {!isDashboardRoute && (
        <>
          <ThemeFooter 
            theme={theme} 
            onShowTerms={onShowTerms} 
          />
          <CookieConsent />
        </>
      )}
    </div>
  );
}
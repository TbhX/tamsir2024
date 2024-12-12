import React, { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { MainContent } from './components/layout/MainContent';
import { LanguageProvider } from './contexts/LanguageContext';
import type { Theme } from './types';

export default function App() {
  const [theme, setTheme] = useState<Theme>('web');
  const [showTerms, setShowTerms] = useState(false);
  const isDashboardRoute = window.location.pathname === '/dashboard';

  return (
    <LanguageProvider>
      <AppLayout 
        theme={theme}
        showTerms={showTerms}
        isDashboardRoute={isDashboardRoute}
        onThemeChange={setTheme}
        onShowTerms={() => setShowTerms(true)}
        onCloseTerms={() => setShowTerms(false)}
      >
        <MainContent
          theme={theme}
          showTerms={showTerms}
          isDashboardRoute={isDashboardRoute}
          onCloseTerms={() => setShowTerms(false)}
        />
      </AppLayout>
    </LanguageProvider>
  );
}
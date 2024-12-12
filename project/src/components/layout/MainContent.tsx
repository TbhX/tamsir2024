import React from 'react';
import { WebTheme } from '../web/WebTheme';
import { MusicalTheme } from '../music/MusicalTheme';
import { GamingTheme } from '../gaming/GamingTheme';
import { DashboardAccess } from '../auth/DashboardAccess';
import type { Theme } from '@/types';

interface MainContentProps {
  theme: Theme;
  showTerms: boolean;
  isDashboardRoute: boolean;
  onCloseTerms: () => void;
}

export function MainContent({ 
  theme, 
  showTerms, 
  isDashboardRoute,
  onCloseTerms
}: MainContentProps) {
  return (
    <main className={`flex-grow ${!isDashboardRoute ? 'pt-16' : ''}`}>
      {isDashboardRoute ? (
        <DashboardAccess />
      ) : (
        <>
          {theme === 'web' && (
            <WebTheme 
              showTerms={showTerms} 
              onCloseTerms={onCloseTerms} 
            />
          )}
          {theme === 'musical' && <MusicalTheme />}
          {theme === 'gaming' && <GamingTheme />}
        </>
      )}
    </main>
  );
}
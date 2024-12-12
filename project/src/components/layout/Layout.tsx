import React from 'react';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
  onShowTerms: () => void;
}

export function Layout({ children, onShowTerms }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <ScrollToTop />
      <Footer onShowTerms={onShowTerms} />
    </div>
  );
}
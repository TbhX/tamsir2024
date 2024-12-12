import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getFooterSections } from './config';
import type { FooterConfig } from './types';
import type { Theme } from '@/types';

interface FooterLinksProps {
  theme: Theme;
  onShowTerms: () => void;
  config: FooterConfig;
}

export function FooterLinks({ theme, onShowTerms, config }: FooterLinksProps) {
  const { t } = useLanguage();
  const sections = getFooterSections(t, onShowTerms);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {sections.map((section) => (
        <div key={section.id}>
          <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${config.text}`}>
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.items.map((item) => (
              <li key={item.id}>
                {item.onClick ? (
                  <button
                    onClick={item.onClick}
                    className={`inline-block py-1 transition-colors ${config.muted} ${config.hover}`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`inline-block py-1 transition-colors ${config.muted} ${config.hover}`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
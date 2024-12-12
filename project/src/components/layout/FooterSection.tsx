import React from 'react';
import type { Theme } from '@/types';

interface FooterLink {
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
  theme: Theme;
}

export function FooterSection({ title, links, theme }: FooterSectionProps) {
  const getThemeClasses = () => {
    switch (theme) {
      case 'musical':
        return {
          title: 'text-[#1DB954]',
          link: 'text-gray-400 hover:text-white'
        };
      case 'gaming':
        return {
          title: 'text-purple-400',
          link: 'text-gray-400 hover:text-white'
        };
      default:
        return {
          title: 'text-gray-300',
          link: 'text-gray-400 hover:text-white'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div>
      <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${themeClasses.title}`}>
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={link.onClick}
              className={`inline-block py-1 transition-colors ${themeClasses.link}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
import React from 'react';
import { COMPANY_INFO } from '@/config';
import { socialLinks } from './config';
import type { FooterConfig } from './types';
import type { Theme } from '@/types';

interface FooterSocialProps {
  theme: Theme;
  config: FooterConfig;
}

export function FooterSocial({ config }: FooterSocialProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className={`text-xl font-bold ${config.text}`}>
          {COMPANY_INFO.name}
        </h3>
        <p className={`mt-2 ${config.muted}`}>
          Professional web development solutions for your digital presence.
          All-inclusive package for €{COMPANY_INFO.price}.
        </p>
      </div>

      <div className="flex gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-lg bg-gray-800/50 ${config.text} ${config.hover} transition-all duration-300 hover:scale-110`}
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
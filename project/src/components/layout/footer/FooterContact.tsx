import React from 'react';
import { contactInfo } from './config';
import type { FooterConfig } from './types';

interface FooterContactProps {
  config: FooterConfig;
}

export function FooterContact({ config }: FooterContactProps) {
  return (
    <div className="space-y-6">
      <h3 className={`text-xl font-bold ${config.text}`}>Contact</h3>
      <div className="grid gap-4">
        {contactInfo.map(({ id, icon: Icon, label, value, href }) => (
          <div key={id} className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gray-800/50 ${config.text}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className={`text-sm ${config.muted}`}>{label}</span>
              {href ? (
                <a
                  href={href}
                  className={`block font-medium ${config.text} ${config.hover} transition-colors`}
                >
                  {value}
                </a>
              ) : (
                <span className={`block font-medium ${config.text}`}>{value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
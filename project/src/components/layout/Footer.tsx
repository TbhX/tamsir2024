import React from 'react';
import { Github, Mail, MessageSquare, Music, Twitch, Youtube, Instagram } from 'lucide-react';
import { SpotifyIcon } from '../icons/SpotifyIcon';
import { SocialLink } from './SocialLink';
import { getCurrentYear } from '@/utils/date';
import { COMPANY_INFO } from '@/config';
import type { Theme } from '@/types';

interface FooterProps {
  theme: Theme;
  onShowTerms: () => void;
}

export function Footer({ theme, onShowTerms }: FooterProps) {
  const getThemeConfig = () => {
    switch (theme) {
      case 'musical':
        return {
          background: 'bg-black',
          border: 'border-[#1DB954]/20',
          text: 'text-[#1DB954]',
          hover: 'hover:text-white',
          muted: 'text-gray-400',
          socialLinks: [
            { icon: SpotifyIcon, href: 'https://open.spotify.com/artist/yourid', label: 'Spotify' },
            { icon: Instagram, href: 'https://instagram.com/yourid', label: 'Instagram' },
            { icon: Youtube, href: 'https://youtube.com/@yourid', label: 'YouTube' },
            { icon: Music, href: 'https://soundcloud.com/yourid', label: 'SoundCloud' }
          ]
        };
      case 'gaming':
        return {
          background: 'bg-[#18181B]',
          border: 'border-purple-500/20',
          text: 'text-purple-400',
          hover: 'hover:text-white',
          muted: 'text-gray-400',
          socialLinks: [
            { icon: Twitch, href: 'https://twitch.tv/yourid', label: 'Twitch' },
            { icon: Youtube, href: 'https://youtube.com/@yourid', label: 'YouTube' },
            { icon: Instagram, href: 'https://instagram.com/yourid', label: 'Instagram' },
            { icon: MessageSquare, href: 'https://discord.gg/yourid', label: 'Discord' }
          ]
        };
      default:
        return {
          background: 'bg-gray-900/50',
          border: 'border-gray-800',
          text: 'text-gray-300',
          hover: 'hover:text-white',
          muted: 'text-gray-400',
          socialLinks: [
            { icon: Github, href: 'https://github.com/yourid', label: 'GitHub' },
            { icon: Mail, href: `mailto:${COMPANY_INFO.email}`, label: 'Email' },
            { icon: MessageSquare, href: `mailto:${COMPANY_INFO.supportEmail}`, label: 'Support' }
          ]
        };
    }
  };

  const config = getThemeConfig();

  // Only show sections for web theme
  const sections = theme === 'web' ? [
    {
      title: 'Quick Links',
      links: [
        { label: 'Start Project', href: '#start-project' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Terms of Service', href: '#', onClick: onShowTerms }
      ]
    },
    {
      title: 'Contact',
      links: [
        { label: `Email: ${COMPANY_INFO.email}`, href: `mailto:${COMPANY_INFO.email}` },
        { label: `Support: ${COMPANY_INFO.supportEmail}`, href: `mailto:${COMPANY_INFO.supportEmail}` },
        { label: `Hours: ${COMPANY_INFO.hours}`, href: '#contact' }
      ]
    }
  ] : [];

  return (
    <footer className={`${config.background} backdrop-blur-sm border-t ${config.border}`}>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className={`grid ${theme === 'web' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'} gap-8 mb-8`}>
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className={`text-xl font-bold ${config.text}`}>
              {COMPANY_INFO.name}
            </h3>
            {theme === 'web' && (
              <p className={config.muted}>
                Professional web development solutions for your digital presence.
                All-inclusive package for €{COMPANY_INFO.price}.
              </p>
            )}
            <div className="flex space-x-4">
              {config.socialLinks.map((link) => (
                <SocialLink 
                  key={link.label} 
                  {...link} 
                  className={`${config.muted} ${config.hover}`}
                />
              ))}
            </div>
          </div>

          {/* Footer Sections - Only for Web Theme */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${config.text}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className={`inline-block py-1 transition-colors ${config.muted} ${config.hover}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 mt-8 border-t ${config.border}`}>
          <p className={`text-center ${config.muted}`}>
            © {getCurrentYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
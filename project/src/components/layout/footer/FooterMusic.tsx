import React from 'react';
import { SpotifyIcon } from '@/components/icons/SpotifyIcon';
import { Instagram, Youtube, Music } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function FooterMusic() {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: SpotifyIcon, href: 'https://open.spotify.com/artist/yourid', label: 'Spotify' },
    { icon: Instagram, href: 'https://instagram.com/yourid', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@yourid', label: 'YouTube' },
    { icon: Music, href: 'https://soundcloud.com/yourid', label: 'SoundCloud' }
  ];

  return (
    <div className="text-center">
      <h3 className="text-xl font-bold text-[#1DB954] mb-6">
        {t('footerMusic.followUs')}
      </h3>
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-2 rounded-full transition-colors"
          >
            <link.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { SpotifyIcon } from '../icons/SpotifyIcon';
import type { MusicProfile } from '../../types/music';

interface ArtistHeroProps {
  profile: MusicProfile;
}

export function ArtistHero({ profile }: ArtistHeroProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1DB954]/20 via-black to-black" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold text-white mb-6 tracking-tight">
            {profile.artistName}
          </h1>
          
          <p className="text-xl text-[#1DB954] mb-2">
            {profile.label}
          </p>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-300 mb-12">
            {profile.bio}
          </p>
          
          <div className="flex justify-center gap-6">
            <a
              href={profile.socialLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-[#1DB954] text-black font-semibold hover:bg-[#1ed760] transition-colors text-lg group"
            >
              <SpotifyIcon className="w-6 h-6 mr-3" />
              Listen on Spotify
              <ExternalLink className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            {profile.socialLinks.instagram && (
              <a
                href={profile.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 rounded-full bg-black border border-[#1DB954] text-[#1DB954] font-semibold hover:bg-[#1DB954]/10 transition-colors text-lg group"
              >
                <Instagram className="w-6 h-6 mr-3" />
                Follow on Instagram
                <ExternalLink className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
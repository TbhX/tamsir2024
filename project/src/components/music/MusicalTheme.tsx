import React from 'react';
import { ArtistHero } from './ArtistHero';
import { ReleaseList } from './ReleaseList';
import { profile, releases } from '../../data/musicData';

export function MusicalTheme() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1DB954]/20 to-black pointer-events-none" />
        
        {/* Content */}
        <div className="relative">
          <ArtistHero profile={profile} />
          <ReleaseList releases={releases} />
        </div>
      </div>
    </div>
  );
}
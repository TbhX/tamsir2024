import React from 'react';
import { SpotifyEmbed } from './SpotifyEmbed';
import type { Album } from '../../types/music';

interface ReleaseListProps {
  releases: Album[];
}

export function ReleaseList({ releases }: ReleaseListProps) {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#1DB954] mb-12">Latest Releases</h2>
      
      <div className="space-y-12">
        {releases.map((release) => (
          <div 
            key={release.id} 
            className="bg-black/50 border border-[#1DB954]/20 rounded-lg p-6 hover:border-[#1DB954]/40 transition-colors"
          >
            <SpotifyEmbed 
              type={release.type.toLowerCase() as 'album'}
              embedId={release.spotifyId}
            />
            
            {release.tracks.map((track) => (
              <SpotifyEmbed
                key={track.id}
                type="track"
                embedId={track.spotifyId}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
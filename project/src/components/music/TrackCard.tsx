import React from 'react';
import { Music, ExternalLink } from 'lucide-react';
import { SpotifyIcon } from '../icons/SpotifyIcon';
import type { Track } from '../../types/music';

interface TrackCardProps {
  track: Track;
}

export function TrackCard({ track }: TrackCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="relative aspect-square">
        <img 
          src={track.coverUrl} 
          alt={track.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {track.spotifyUrl && (
            <a
              href={track.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <SpotifyIcon className="w-6 h-6 text-[#1DB954]" />
            </a>
          )}
          {track.soundCloudUrl && (
            <a
              href={track.soundCloudUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <ExternalLink className="w-6 h-6 text-[#FF3300]" />
            </a>
          )}
          {track.appleMusicUrl && (
            <a
              href={track.appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
            >
              <Music className="w-6 h-6 text-[#FA243C]" />
            </a>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{track.title}</h3>
        <p className="text-gray-600 text-sm">{track.duration}</p>
      </div>
    </div>
  );
}
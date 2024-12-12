import React from 'react';
import { Music, ExternalLink } from 'lucide-react';
import { SpotifyIcon } from '../icons/SpotifyIcon';
import type { MusicProfile } from '../../types/music';

interface ProfileLinksProps {
  profile: MusicProfile;
}

export function ProfileLinks({ profile }: ProfileLinksProps) {
  return (
    <div className="flex justify-center gap-6">
      {profile.spotifyId && (
        <a
          href={`https://open.spotify.com/artist/${profile.spotifyId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DB954] text-white hover:bg-opacity-90 transition-colors"
        >
          <SpotifyIcon className="w-5 h-5" />
          <span>Spotify</span>
        </a>
      )}
      {profile.soundCloudUsername && (
        <a
          href={`https://soundcloud.com/${profile.soundCloudUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF3300] text-white hover:bg-opacity-90 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
          <span>SoundCloud</span>
        </a>
      )}
      {profile.appleMusicId && (
        <a
          href={`https://music.apple.com/artist/${profile.appleMusicId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FA243C] text-white hover:bg-opacity-90 transition-colors"
        >
          <Music className="w-5 h-5" />
          <span>Apple Music</span>
        </a>
      )}
    </div>
  );
}
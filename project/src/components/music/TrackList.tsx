import React from 'react';
import { Play, Clock, Music } from 'lucide-react';
import { SpotifyIcon } from '../icons/SpotifyIcon';
import type { Track } from '../../types/music';

interface TrackListProps {
  tracks: Track[];
}

export function TrackList({ tracks }: TrackListProps) {
  return (
    <div className="bg-black/50 rounded-lg p-6">
      {/* Header */}
      <div className="grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)] gap-4 px-4 py-2 border-b border-[#282828] text-[#A7A7A7] text-sm">
        <div className="text-center">#</div>
        <div>Title</div>
        <div>Album</div>
        <div className="flex justify-end">
          <Clock className="w-5 h-5" />
        </div>
      </div>

      {/* Tracks */}
      <div className="mt-2">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="group grid grid-cols-[16px_4fr_3fr_minmax(120px,1fr)] gap-4 px-4 py-2 rounded-md hover:bg-[#282828] transition-colors items-center"
          >
            {/* Track Number/Play Button */}
            <div className="relative flex items-center justify-center">
              <span className="group-hover:hidden">{index + 1}</span>
              <Play 
                className="w-4 h-4 hidden group-hover:block text-white fill-white" 
              />
            </div>

            {/* Track Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#282828] rounded overflow-hidden flex-shrink-0">
                <img 
                  src={track.coverUrl} 
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium">{track.title}</p>
                <p className="text-[#A7A7A7] text-sm">{track.artist}</p>
              </div>
            </div>

            {/* Album */}
            <div className="text-[#A7A7A7]">{track.album}</div>

            {/* Duration & Actions */}
            <div className="flex items-center justify-end gap-4">
              <a
                href={track.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <SpotifyIcon className="w-5 h-5 text-[#1DB954] hover:text-[#1ed760] transition-colors" />
              </a>
              <span className="text-[#A7A7A7]">{track.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
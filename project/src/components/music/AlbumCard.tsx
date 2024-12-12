import React from 'react';
import { Play, SpotifyIcon } from 'lucide-react';
import type { Album } from '../../types/music';

interface AlbumCardProps {
  album: Album;
}

export function AlbumCard({ album }: AlbumCardProps) {
  return (
    <div className="group bg-[#181818] rounded-lg p-4 hover:bg-[#282828] transition-all duration-300">
      {/* Album Cover */}
      <div className="relative aspect-square mb-4">
        <img 
          src={album.coverUrl} 
          alt={album.title}
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
        <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          <Play className="w-6 h-6 text-black fill-black ml-1" />
        </button>
      </div>

      {/* Album Info */}
      <div>
        <h3 className="text-white font-bold mb-1 truncate">{album.title}</h3>
        <p className="text-[#A7A7A7] text-sm mb-2">{album.type} • {album.releaseDate}</p>
        
        {/* Spotify Link */}
        <a
          href={album.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#1DB954] hover:text-[#1ed760] text-sm transition-colors"
        >
          <SpotifyIcon className="w-4 h-4" />
          <span>Listen on Spotify</span>
        </a>
      </div>
    </div>
  );
}
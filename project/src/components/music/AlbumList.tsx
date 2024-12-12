import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { SpotifyIcon } from '../icons/SpotifyIcon';
import { SpotifyPlayer } from './SpotifyPlayer';
import type { Album } from '../../types/music';

interface AlbumListProps {
  albums: Album[];
}

export function AlbumList({ albums }: AlbumListProps) {
  return (
    <div className="space-y-12">
      {albums.map((album) => (
        <div 
          key={album.id}
          className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
        >
          <div className="p-6">
            <div className="flex flex-col gap-6">
              {/* Album Info */}
              <div className="flex items-start gap-6">
                <div className="relative w-48 h-48 flex-shrink-0">
                  <img
                    src={album.coverUrl}
                    alt={album.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <a
                    href={album.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
                  >
                    <SpotifyIcon className="w-8 h-8 text-white" />
                    <Play className="w-8 h-8 text-white" fill="white" />
                  </a>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{album.title}</h3>
                      <p className="text-purple-200">{album.type} • {album.releaseDate}</p>
                    </div>
                    <a
                      href={album.spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1DB954] text-white hover:bg-opacity-90 transition-colors"
                    >
                      <SpotifyIcon className="w-5 h-5" />
                      <span>Listen on Spotify</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Track List */}
                  <div className="space-y-2">
                    {album.tracks.map((track) => (
                      <a
                        key={track.id}
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <span className="w-6 text-center text-purple-300 group-hover:text-white">
                          {track.position}
                        </span>
                        <span className="flex-grow text-purple-100 group-hover:text-white">
                          {track.title}
                        </span>
                        <ExternalLink className="w-4 h-4 text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spotify Player */}
              <SpotifyPlayer 
                spotifyUrl={album.spotifyUrl}
                title={album.title}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
import React from 'react';

interface SpotifyEmbedProps {
  embedId: string;
  type: 'track' | 'album';
}

export function SpotifyEmbed({ embedId, type }: SpotifyEmbedProps) {
  const embedUrl = `https://open.spotify.com/embed/${type}/${embedId}`;
  
  return (
    <div className="w-full mb-8">
      <iframe
        src={embedUrl}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full rounded-xl shadow-lg"
      />
    </div>
  );
}
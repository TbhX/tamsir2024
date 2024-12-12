import React from 'react';

interface SpotifyPlayerProps {
  spotifyUrl: string;
  title: string;
}

export function SpotifyPlayer({ spotifyUrl, title }: SpotifyPlayerProps) {
  // Convert regular Spotify URL to embed URL
  const embedUrl = spotifyUrl.replace('spotify.com/', 'spotify.com/embed/');

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg">
      <iframe
        title={title}
        src={embedUrl}
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full"
        style={{ borderRadius: '12px' }}
      />
    </div>
  );
}
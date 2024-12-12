export interface Track {
  id: string;
  title: string;
  spotifyId: string;
  releaseDate: string;
}

export interface Album {
  id: string;
  title: string;
  type: 'Album' | 'EP' | 'Single';
  spotifyId: string;
  releaseDate: string;
  tracks: Track[];
}

export interface MusicProfile {
  artistName: string;
  bio: string;
  label: string;
  spotifyId: string;
  socialLinks: {
    instagram?: string;
    spotify?: string;
  };
}
import { Album, MusicProfile } from '../types/music';

export const profile: MusicProfile = {
  artistName: 'RealZn',
  bio: 'Electronic music producer crafting immersive soundscapes and pushing the boundaries of house music.',
  label: 'FrenchMafia',
  spotifyId: '3nMv8e1hHDJL57uPZKPKy6',
  socialLinks: {
    spotify: 'https://open.spotify.com/artist/3nMv8e1hHDJL57uPZKPKy6',
    instagram: 'https://instagram.com/realzn___'
  }
};

export const releases: Album[] = [
  {
    id: 'zen',
    title: 'ZEN',
    type: 'EP',
    spotifyId: '3LnFQysLU59yoDS8PF1Lrm',
    releaseDate: '2024-10-02',
    tracks: [
      { id: 'zen-1', title: 'ZEN', spotifyId: '3T1ueC4KjqgNiXW8rFiSI8', releaseDate: '2024-10-02' },
      { id: 'zen-2', title: 'SATURN', spotifyId: '5p3XgUhfA1i9wTiENSoARJ', releaseDate: '2024-10-02' },
      { id: 'zen-3', title: 'FAR', spotifyId: '4UIvnKEzK7HulKVWx4O9N6', releaseDate: '2024-10-02' },
      { id: 'zen-4', title: 'FUNKY', spotifyId: '47d1B5aadojT3s7tTwuwbI', releaseDate: '2024-10-02' },
      { id: 'zen-5', title: 'FAIT', spotifyId: '63wWTFr3IEUpjLHyvUoiyM', releaseDate: '2024-10-02' },
      { id: 'zen-6', title: 'ZEN II', spotifyId: '7w6KXbg8Vjr9fNakd8MX3n', releaseDate: '2024-10-02' }
    ]
  },
  {
    id: 'summerhouse',
    title: 'SummerHouse',
    type: 'Album',
    spotifyId: '1MZj78hmPDrYOTiF6McpeK',
    releaseDate: '2024-05-23',
    tracks: [
      { id: 'sh-1', title: 'Mermaid', spotifyId: '5QgN7kP9Hv937fRoYSRbbn', releaseDate: '2024-05-23' },
      { id: 'sh-2', title: 'Breathe', spotifyId: '4YBMx27C2Vbd0gRC5wNt2r', releaseDate: '2024-05-23' },
      { id: 'sh-3', title: 'AfroHouse 1', spotifyId: '25ji3LjH8VKRri81ZiQzBD', releaseDate: '2024-05-23' },
      { id: 'sh-4', title: 'Aqua', spotifyId: '4C9c69sIiFue6ffwRoWPVW', releaseDate: '2024-05-23' },
      { id: 'sh-5', title: 'No Gas', spotifyId: '6LNxj1Sx8ZwwYUUAJ5cPyx', releaseDate: '2024-05-23' },
      { id: 'sh-6', title: 'Piano', spotifyId: '3Edm2UtYGD7H3NgIncu8RG', releaseDate: '2024-05-23' },
      { id: 'sh-7', title: 'Ma Mind', spotifyId: '7AVUKzj8r0wmmcKYYIVe4v', releaseDate: '2024-03-26' },
      { id: 'sh-8', title: 'AfroHouse 2', spotifyId: '1LildmGb7ur9o0MUQD7O4b', releaseDate: '2024-05-23' },
      { id: 'sh-9', title: 'DrillHouse', spotifyId: '4e1BqiatrGl0HlXG5QH5zE', releaseDate: '2024-05-23' }
    ]
  }
];
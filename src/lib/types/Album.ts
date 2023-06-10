import Track from './Track';
import MediaKind from './MediaKind';

interface Album extends MediaKind {
  type: 'album';
  numTracks?: number;
  keywords?: string[];
  description?: string;
  genre?: string;
  location?: string;
  featuredTrack?: Omit<Track, 'type'>;
  releases?: AlbumRelease[];
  tracks?: Omit<Track, 'type'>[];
}

export interface AlbumRelease {
  name: string;
  format: string;
  url?: string;
  imageUrl?: string;
  description?: string;
}

export default Album;

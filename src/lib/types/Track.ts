import Album from './Album.js';
import MediaKind from './MediaKind.js';

interface Track extends MediaKind {
  type: 'track';
  duration?: number;
  seekPosition?: number;
  streamUrl?: string;
  streamUrlHQ?: string;
  album?: Omit<Album, 'type'>;
  position?: number;
}

export default Track;

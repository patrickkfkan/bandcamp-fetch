import Album from './Album';
import MediaKind from './MediaKind';

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

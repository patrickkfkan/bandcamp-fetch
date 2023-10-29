import Artist from './Artist.js';
import Label from './Label.js';
import UserKind from './UserKind.js';

interface MediaKind {
  name: string;
  url?: string;
  imageUrl?: string;
  releaseDate?: string;
  artist?: Omit<Artist, 'type'>;
  label?: Omit<Label, 'type'>;
  publisher?: UserKind;
  raw?: {
    basic: string,
    extra: string
  };
}

export default MediaKind;

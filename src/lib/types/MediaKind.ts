import type Artist from './Artist.js';
import type Label from './Label.js';
import type UserKind from './UserKind.js';

interface MediaKind {
  id?: number;
  name: string;
  url?: string;
  imageUrl?: string;
  releaseDate?: string;
  artist?: Omit<Artist, 'type'>;
  label?: Omit<Label, 'type'>;
  publisher?: UserKind;
  raw?: {
    basic: string;
    extra: string;
  };
}

export default MediaKind;

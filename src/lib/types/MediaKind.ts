import Artist from './Artist';
import Label from './Label';
import UserKind from './UserKind';

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

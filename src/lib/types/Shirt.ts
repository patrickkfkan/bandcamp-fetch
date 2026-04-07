import type Artist from './Artist.js';
import type Label from './Label.js';
import type UserKind from './UserKind.js';

interface Shirt {
  type: 'shirt';
  name: string;
  url?: string;
  imageUrl?: {
    primary: string;
    /**
     * @deprecated Use {@link additional} array instead.
     */
    secondary?: string;
    additional?: string[];
  };
  releaseDate?: string;
  artist?: Omit<Artist, 'type'>;
}

export default Shirt;

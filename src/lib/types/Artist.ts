import Label from './Label.js';
import UserKind from './UserKind.js';

interface Artist extends UserKind {
  type: 'artist';
  label?: Label;
  genre?: string;
}

export default Artist;

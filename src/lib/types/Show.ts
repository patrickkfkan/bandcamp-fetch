import type Track from './Track.js';

interface Show {
  type: 'show';
  name: string;
  url: string;
  publishedDate: string;
  description: string;
  shortDescription?: string;
  duration?: number;
  streamUrl?: string;
  tracks?: Omit<Track, 'type'>[];
  imageCaption: string;
  subtitle?: string;
  imageUrl?: string;
  screenImageUrl: string;
}

export default Show;

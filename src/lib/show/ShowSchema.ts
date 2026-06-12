import { z } from 'zod';

const albumSchema = z.object({
  id: z.number(),
  title: z.string(),
  artId: z.number(),
  bandId: z.number(),
  url: z.url(),
  isWishlisted: z.boolean(),
  isOwned: z.boolean(),
});

const trackSchema = z.object({
  album: albumSchema.nullable().optional(),
  id: z.number(),
  title: z.string(),
  bandId: z.number(),
  bandImageId: z.number().nullable().optional(),
  artistName: z.string(),
  bandUrl: z.url(),
  duration: z.number(),
  artId: z.number().nullable().optional(),
  url: z.url(),
  streamUrl: z.url().nullable().optional(),
  timecode: z.number().nullable().optional(),
});

// Main Tracklist Schema
export const ShowSchema = z.object({
  tracklist: z.object({
    itemType: z.string(),
    itemId: z.number(),
    title: z.string(),
    subtitle: z.string().nullable().optional(),
    imageId: z.number().nullable().optional(),
    date: z.string(),
    description: z.string().nullable().optional(),
    attribution: z.string().nullable().optional(),
    compiledTrack: z.object({
      streamUrl: z.url(),
      duration: z.number(),
    }).nullable().optional(),
    tracks: z.array(trackSchema).nullable().optional(),
  }),
});

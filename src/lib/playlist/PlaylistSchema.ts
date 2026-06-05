import { z } from 'zod';

export const PlaylistAlbumSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  url: z.string().url()
});

export const PlaylistTrackSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  url: z.string().url(),
  bandId: z.number().int(),
  bandImageId: z.number().int().nullable().optional(),
  isOwned: z.boolean(),
  isWishlisted: z.boolean(),
  isPurchasable: z.boolean(),
  album: PlaylistAlbumSchema.nullable().optional(),
  artistName: z.string(),
  duration: z.number(),
  artId: z.number().int(),
  streamUrl: z.string().url().nullable().optional()
});

export const PlaylistCuratorSchema = z.object({
  bio: z.string().nullable(),
  collectionSize: z.number().int(),
  imageId: z.number().int().nullable(),
  location: z.string().nullable(),
  name: z.string(),
  username: z.string()
});

export const PlaylistResponseSchema = z.object({
  playlistId: z.number().int(),
  title: z.string(),
  modDate: z.string(),
  isPrivate: z.boolean(),
  description: z.string().nullable(),
  imageId: z.number().int().nullable(),
  imageState: z.string(),
  tracks: z.array(PlaylistTrackSchema),
  additionalTrackIds: z.array(z.number().int()).nullable(),
  totalNumTracks: z.number().int(),
  totalDuration: z.number(),
  curator: PlaylistCuratorSchema,
  creatorId: z.number().int()
});

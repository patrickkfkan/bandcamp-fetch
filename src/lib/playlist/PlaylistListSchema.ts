import { z } from 'zod';

export const PlaylistListItemAttributionSchema = z.object({
  accountType: z.string(),
  name: z.string(),
  imageId: z.number().int().nullable(),
  url: z.url().nullable()
});

export const PlaylistListItemSchema = z.object({
  attribution: PlaylistListItemAttributionSchema,
  creatorId: z.number().int(),
  description: z.string().nullable(),
  imageId: z.number().int().nullable(),
  isFeatured: z.boolean().nullable(),
  isPrivate: z.boolean(),
  itemId: z.number().int(),
  itemUrl: z.url(),
  modDate: z.string(),
  title: z.string(),
  tracksSummary: z.object({
    totalCount: z.number().int(),
    totalDuration: z.number(),
  })
});

export const PlaylistListResponseSchema = z.object({
  items: z.array(PlaylistListItemSchema),
  nextCursor: z.string().nullable(),
  totalCount: z.number().int().nullable()
});

// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const ProjectKeysSchema = z.object({
  id: z.string().uuid(),
  encryptedKey: z.string(),
  nonce: z.string(),
  receiverId: z.string().uuid(),
  senderId: z.string().uuid().nullable().optional(),
  projectId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TProjectKeys = z.infer<typeof ProjectKeysSchema>;
export type TProjectKeysInsert = Omit<TProjectKeys, TImmutableDBKeys>;
export type TProjectKeysUpdate = Partial<Omit<TProjectKeys, TImmutableDBKeys>>;

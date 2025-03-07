// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const SecretApprovalRequestsReviewersSchema = z.object({
  id: z.string().uuid(),
  member: z.string().uuid(),
  status: z.string(),
  requestId: z.string().uuid(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TSecretApprovalRequestsReviewers = z.infer<typeof SecretApprovalRequestsReviewersSchema>;
export type TSecretApprovalRequestsReviewersInsert = Omit<TSecretApprovalRequestsReviewers, TImmutableDBKeys>;
export type TSecretApprovalRequestsReviewersUpdate = Partial<Omit<TSecretApprovalRequestsReviewers, TImmutableDBKeys>>;

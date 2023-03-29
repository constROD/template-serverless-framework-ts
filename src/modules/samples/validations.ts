import { z } from 'zod';

const id = z.string().uuid();

export const getSampleSchema = z.object({ id });

export const createSampleSchema = z.object({
  name: z.string().trim(),
  description: z.string().trim().optional(),
});
export const updateSampleSchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().optional(),
  description: z.string().trim().optional(),
});
export const deleteSampleSchema = z.object({ id });
export const archiveSampleSchema = z.object({ id });

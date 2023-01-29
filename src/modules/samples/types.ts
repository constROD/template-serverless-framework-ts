import { createSampleSchema, updateSampleSchema } from './validations';

import { z } from 'zod';

export interface Sample {
  id: string;
  name: string;
  description: string;
}

export type CreateSample = z.infer<typeof createSampleSchema>;
export type UpdateSample = z.infer<typeof updateSampleSchema>;

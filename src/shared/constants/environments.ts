/**
 * * When you add a new environment, you must add it to the list below.
 * * - You must add it to the `.env` file.
 * * - You must add it to the `.env.example` file.
 * * - You must add it to the `src/shared/constants/environments.ts` file.
 * * - You must add it to the `docker-compose.yaml` file.
 */

import { config } from 'dotenv';
import { z } from 'zod';

config();

export const STAGES = {
  Dev: 'dev',
  Staging: 'staging',
  Prod: 'prod',
} as const;

const envVariables = z.object({
  STAGE: z.enum([STAGES.Dev, STAGES.Staging, STAGES.Prod]).default(STAGES.Dev),
  DB_HOST: z.string(),
  DB_PORT: z.coerce.number(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
});

export const env = envVariables.parse({
  STAGE: process.env.STAGE,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
});

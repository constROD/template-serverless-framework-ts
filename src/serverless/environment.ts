import { config } from 'dotenv';
import { Env } from 'shared/constants/config';
import { custom } from 'shared/helpers/config';

config();

const isLocal = process.env.LOCAL === 'true';

export const environment = {
  [Env.BUCKET]: isLocal ? process.env[Env.BUCKET] ?? '' : custom(Env.BUCKET),
};

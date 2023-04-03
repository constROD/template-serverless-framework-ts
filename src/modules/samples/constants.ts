import { Method } from '@middy/http-router';
import { FUNCTIONS } from 'serverless/constants';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
  listOfSamples: {
    method: Method.Get,
    path: `/${FUNCTIONS.Samples.name}`,
  },
  getSample: {
    method: Method.Get,
    path: `/${FUNCTIONS.Samples.name}/{id}`,
  },
  createSample: {
    method: Method.Post,
    path: `/${FUNCTIONS.Samples.name}`,
  },
  updateSample: {
    method: Method.Put,
    path: `/${FUNCTIONS.Samples.name}/{id}`,
  },
  deleteSample: {
    method: Method.Delete,
    path: `/${FUNCTIONS.Samples.name}/{id}`,
  },
  archiveSample: {
    method: Method.Delete,
    path: `/${FUNCTIONS.Samples.name}/{id}/archive`,
  },
} as const;

export const SAMPLE_ROUTES: MakeRoutesOption<typeof routes> = routes;

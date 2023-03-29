import { Method } from '@middy/http-router';
import { FUNCTIONS } from 'serverless/constants';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
  listOfSamples: {
    method: Method.Get,
    path: `/${FUNCTIONS.Samples}`,
  },
  getSample: {
    method: Method.Get,
    path: `/${FUNCTIONS.Samples}/{id}`,
  },
  createSample: {
    method: Method.Post,
    path: `/${FUNCTIONS.Samples}`,
  },
  updateSample: {
    method: Method.Put,
    path: `/${FUNCTIONS.Samples}/{id}`,
  },
  deleteSample: {
    method: Method.Delete,
    path: `/${FUNCTIONS.Samples}/{id}`,
  },
  archiveSample: {
    method: Method.Delete,
    path: `/${FUNCTIONS.Samples}/{id}/archive`,
  },
} as const;

export const SAMPLE_ROUTES: MakeRoutesOption<typeof routes> = routes;

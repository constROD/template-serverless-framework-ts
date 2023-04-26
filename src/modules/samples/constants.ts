import { FUNCTIONS } from 'serverless/constants';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
  listOfSamples: {
    method: 'GET',
    path: `/${FUNCTIONS.Samples}`,
  },
  getSample: {
    method: 'GET',
    path: `/${FUNCTIONS.Samples}/{id}`,
  },
  createSample: {
    method: 'POST',
    path: `/${FUNCTIONS.Samples}`,
  },
  updateSample: {
    method: 'PUT',
    path: `/${FUNCTIONS.Samples}/{id}`,
  },
  deleteSample: {
    method: 'DELETE',
    path: `/${FUNCTIONS.Samples}/{id}`,
  },
  archiveSample: {
    method: 'DELETE',
    path: `/${FUNCTIONS.Samples}/{id}/archive`,
  },
} as const;

export const SAMPLE_ROUTES: MakeRoutesOption<typeof routes> = routes;

import { FUNCTIONS } from 'serverless/constants';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
  listOfSamples: {
    method: 'GET',
    path: `/${FUNCTIONS.Samples.name}`,
  },
  getSample: {
    method: 'GET',
    path: `/${FUNCTIONS.Samples.name}/{id}`,
  },
  createSample: {
    method: 'POST',
    path: `/${FUNCTIONS.Samples.name}`,
  },
  updateSample: {
    method: 'PUT',
    path: `/${FUNCTIONS.Samples.name}/{id}`,
  },
  deleteSample: {
    method: 'DELETE',
    path: `/${FUNCTIONS.Samples.name}/{id}`,
  },
  archiveSample: {
    method: 'DELETE',
    path: `/${FUNCTIONS.Samples.name}/{id}/archive`,
  },
} as const;

export const SAMPLE_ROUTES: MakeRoutesOption<typeof routes> = routes;

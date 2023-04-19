import { FUNCTIONS } from 'serverless/constants';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
  listOfSamples: {
    method: 'GET',
    path: `/${FUNCTIONS.Samples.Name}`,
  },
  getSample: {
    method: 'GET',
    path: `/${FUNCTIONS.Samples.Name}/{id}`,
  },
  createSample: {
    method: 'POST',
    path: `/${FUNCTIONS.Samples.Name}`,
  },
  updateSample: {
    method: 'PUT',
    path: `/${FUNCTIONS.Samples.Name}/{id}`,
  },
  deleteSample: {
    method: 'DELETE',
    path: `/${FUNCTIONS.Samples.Name}/{id}`,
  },
  archiveSample: {
    method: 'DELETE',
    path: `/${FUNCTIONS.Samples.Name}/{id}/archive`,
  },
} as const;

export const SAMPLE_ROUTES: MakeRoutesOption<typeof routes> = routes;

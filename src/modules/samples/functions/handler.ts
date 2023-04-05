import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { archiveSample } from 'modules/samples/functions/archive';
import { type HandlerDictionary, type HandlerRoute } from 'shared/types/handler';
import { makeRouterHandler } from 'shared/utils/handler';
import { makeSwaggerPaths } from 'shared/utils/swagger';
import { createSample } from './create';
import { deleteSample } from './delete';
import { getSample } from './get';
import { listOfSamples } from './list';
import { updateSample } from './update';

/* Consolidation of handlers */
const handlerDictionary: HandlerDictionary<typeof SAMPLE_ROUTES> = {
  listOfSamples: listOfSamples.handler,
  getSample: getSample.handler,
  createSample: createSample.handler,
  updateSample: updateSample.handler,
  deleteSample: deleteSample.handler,
  archiveSample: archiveSample.handler,
};

/* Combination of routes and handlers for middy `httpRouterHandler` */
const handlerRoutes = Object.entries(SAMPLE_ROUTES).map(([handlerName, route]) => ({
  ...route,
  handler: handlerDictionary[handlerName as keyof typeof handlerDictionary],
})) as HandlerRoute[];

/* Entrypoint of lambda functions */
export const run = makeRouterHandler(handlerRoutes);

/* Consolidation of swagger docs */
export const docs = makeSwaggerPaths([
  listOfSamples.docs,
  getSample.docs,
  createSample.docs,
  updateSample.docs,
  deleteSample.docs,
  archiveSample.docs,
]);

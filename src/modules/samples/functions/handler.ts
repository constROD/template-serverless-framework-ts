import { archiveSample } from 'modules/samples/functions/archive';

import { SAMPLE_ROUTES } from 'modules/samples/constants';
import { type HandlerDictionary } from 'shared/types/handler';
import { type Route } from 'shared/types/http';
import { makeRouterHandler } from 'shared/utils/handler';
import { makeSwaggerPaths } from 'shared/utils/swagger';
import { createSample } from './create';
import { deleteSample } from './delete';
import { getSample } from './get';
import { listOfSamples } from './list';
import { updateSample } from './update';

const handlerDictionary: HandlerDictionary<typeof SAMPLE_ROUTES> = {
  listOfSamples: listOfSamples.handler,
  getSample: getSample.handler,
  createSample: createSample.handler,
  updateSample: updateSample.handler,
  deleteSample: deleteSample.handler,
  archiveSample: archiveSample.handler,
};

const handlerRoutes: Route[] = Object.entries(SAMPLE_ROUTES).map(([handlerName, route]) => ({
  ...route,
  handler: handlerDictionary[handlerName as keyof typeof handlerDictionary],
}));

export const run = makeRouterHandler(handlerRoutes);

export const samplesSwaggerPaths = makeSwaggerPaths([
  listOfSamples.docs,
  getSample.docs,
  createSample.docs,
  updateSample.docs,
  deleteSample.docs,
  archiveSample.docs,
]);

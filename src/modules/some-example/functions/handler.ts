import { SOME_EXAMPLE_ROUTES } from 'modules/some-example/constants';
import { type HandlerDictionary } from 'shared/types/handler';
import { type Route } from 'shared/types/http';
import { makeRouterHandler } from 'shared/utils/handler';
import { makeSwaggerPaths } from 'shared/utils/swagger';
import { listOfSomeExample } from './list';

/* Consolidation of handlers */
const handlerDictionary: HandlerDictionary<typeof SOME_EXAMPLE_ROUTES> = {
  listOfSomeExample: listOfSomeExample.handler,
};

/* Combination of routes and handlers for middy `httpRouterHandler` */
const handlerRoutes: Route[] = Object.entries(SOME_EXAMPLE_ROUTES).map(([handlerName, route]) => ({
  ...route,
  handler: handlerDictionary[handlerName as keyof typeof SOME_EXAMPLE_ROUTES],
}));

/* Entrypoint of lambda functions */
export const run = makeRouterHandler(handlerRoutes);

/* Consolidation of swagger docs */
export const someExampleSwaggerPaths = makeSwaggerPaths([listOfSomeExample.docs]);

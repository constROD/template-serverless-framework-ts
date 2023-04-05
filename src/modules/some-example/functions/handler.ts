import { SOME_EXAMPLE_ROUTES } from 'modules/some-example/constants';
import { type HandlerDictionary, type HandlerRoute } from 'shared/types/handler';
import { makeRouterHandler } from 'shared/utils/handler';
import { makeSwaggerPaths } from 'shared/utils/swagger';
import { listOfSomeExample } from './list';

/* Consolidation of handlers */
const handlerDictionary: HandlerDictionary<typeof SOME_EXAMPLE_ROUTES> = {
  listOfSomeExample: listOfSomeExample.handler,
};

/* Combination of routes and handlers for middy `httpRouterHandler` */
const handlerRoutes = Object.entries(SOME_EXAMPLE_ROUTES).map(([handlerName, route]) => ({
  ...route,
  handler: handlerDictionary[handlerName as keyof typeof handlerDictionary],
})) as HandlerRoute[];

/* Entrypoint of lambda functions */
export const run = makeRouterHandler(handlerRoutes);

/* Consolidation of swagger docs */
export const docs = makeSwaggerPaths([listOfSomeExample.docs]);

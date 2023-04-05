import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpRouterHandler from '@middy/http-router';
import { type Handler } from 'aws-lambda';
import { type HandlerRoute, type Route } from 'shared/types/handler';
import { makeAPIResponse } from './http';

interface HandlerOption {
  parseBodyToJson: boolean;
}

interface MakeHandlerOption {
  handler: Handler;
  options?: HandlerOption;
}

/**
 * Make handler for lambda function
 *
 * @param handler httpRouterHandler or any other handler
 * @param options options for the handler
 * @returns middyfied handler
 *
 * @example
 *
 * const handler = makeHandler({
 *  handler: async (event) => {
 *    return makeAPIResponse({ type: 'Success', data: { event } });
 *  }
 * });
 *
 * or
 *
 * const handler = makeHandler({ handler: httpRouterHandler(routes) });
 */

export const makeHandler = ({
  handler,
  options = { parseBodyToJson: true },
}: MakeHandlerOption) => {
  const { parseBodyToJson } = options;

  let middyfiedHandler = middy(handler)
    .use(
      httpErrorHandler({
        logger(error) {
          // eslint-disable-next-line no-console
          console.debug('HANDLER ERROR: ', { error });
        },
      })
    )
    .use({
      onError: ({ error, response: data }) =>
        makeAPIResponse({
          type: 'ServerError',
          data,
          error,
        }),
    });

  if (parseBodyToJson) middyfiedHandler = middyfiedHandler.use(jsonBodyParser());

  return middyfiedHandler;
};

/**
 * Make handler for lambda function with httpRouterHandler
 *
 * @param routes Array of routes from @middy/http-router
 * @returns makeHandler with httpRouterHandler
 */

export const makeRouterHandler = (routes: HandlerRoute[]) =>
  makeHandler({
    handler: httpRouterHandler(routes),
  });

/**
 * Make handler path
 *
 * @param moduleName module name
 * @param handlerName handler name
 * @returns handler path for lambda function
 */

export const makeHandlerPath = (moduleName: string, handlerName?: string) =>
  `src/modules/${moduleName}/functions/${handlerName || 'handler'}.run`;

export type MakeRoutesOption<TRoutes> = Record<keyof TRoutes, Route>;

/**
 * Make routes for lambda function
 *
 * @param routes Constant routes of the module
 * @returns Event routes httpApi for lambda function
 */

export const makeRoutes = <TRoutes>(routes: MakeRoutesOption<TRoutes>) => {
  const events = Object.entries(routes as object).map(([, route]) => ({
    httpApi: {
      method: route.method,
      path: route.path,
    },
  }));

  return events;
};

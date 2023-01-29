/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import jsonBodyParser from '@middy/http-json-body-parser';
import httpRouterHandler from '@middy/http-router';
import { Handler } from 'aws-lambda';
import { APIResponseTypes } from 'shared/constants/api';
import { createAPIResponse } from 'shared/helpers/api';
import { Route } from 'shared/types/api';

interface HandlerOptions {
  parseBodyToJson: boolean;
}

export const createHandler = (
  handler: Handler,
  options: HandlerOptions = { parseBodyToJson: true }
) => {
  const { parseBodyToJson } = options;

  let middyfiedHandler = middy(handler)
    .use(
      httpErrorHandler({
        logger(error) {
          console.error('Error: ', { error });
        },
      })
    )
    .use({
      onError: ({ error, response }) => {
        if (error)
          return createAPIResponse({
            type: APIResponseTypes.ServerError,
            response: { error },
          });
        return response;
      },
    });

  if (parseBodyToJson) {
    middyfiedHandler = middyfiedHandler.use(jsonBodyParser());
  }

  return middyfiedHandler;
};

export const createRoutes = (routes: Route[]) => createHandler(httpRouterHandler(routes));

export const createHandlerConfig = (fnName: string) => `src/functions/${fnName}/handler.run`;

export const createRoutesConfig = (routes: { method: string; path: string }[]) =>
  routes.map(({ method, path }) => ({ httpApi: { method, path } }));

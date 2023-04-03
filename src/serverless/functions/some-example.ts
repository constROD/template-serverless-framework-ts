// eslint-disable-next-line import/no-extraneous-dependencies
import { type AWS } from '@serverless/typescript';
import { SOME_EXAMPLE_ROUTES } from 'modules/some-example/constants';
import { FUNCTIONS } from 'serverless/constants';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';

export const someExampleFnConfig: AWS['functions'] = {
  [FUNCTIONS.SomeExample.key]: {
    handler: makeHandlerPath(FUNCTIONS.SomeExample.name),
    events: makeRoutes(SOME_EXAMPLE_ROUTES),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
};

import { type AWS } from '@serverless/typescript';
import { SOME_EXAMPLE_ROUTES } from 'modules/some-example/constants';
import { FUNCTIONS } from 'serverless/constants';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';

export const someExampleFnConfig: AWS['functions'] = {
  [FUNCTIONS.SomeExample.Ref]: {
    handler: makeHandlerPath(FUNCTIONS.SomeExample.Name),
    events: makeRoutes(SOME_EXAMPLE_ROUTES),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
};

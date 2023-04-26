import { type AWS } from '@serverless/typescript';
import { SOME_EXAMPLE_ROUTES } from 'modules/some-example/constants';
import { FUNCTIONS } from 'serverless/constants';
import { transformToPascal } from 'shared/utils/commons';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';

const SomeExamplePascalCase = transformToPascal(FUNCTIONS.SomeExample);

export const someExampleFnConfig: AWS['functions'] = {
  [SomeExamplePascalCase]: {
    handler: makeHandlerPath(FUNCTIONS.SomeExample),
    events: makeRoutes(SOME_EXAMPLE_ROUTES),
    environment: {
      /* Put here all the environment variables that you need */
    },
  },
};

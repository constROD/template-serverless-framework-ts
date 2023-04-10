import { type AWS } from '@serverless/typescript';
import { SWAGGER_ROUTES } from 'modules/swagger/constants';
import { FUNCTIONS } from 'serverless/constants';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';
import { samplesFnConfig } from './samples';
import { someExampleFnConfig } from './some-example';

export const functions: AWS['functions'] = {
  [FUNCTIONS.Swagger.key]: {
    handler: makeHandlerPath(FUNCTIONS.Swagger.name),
    events: makeRoutes(SWAGGER_ROUTES),
    package: {
      patterns: ['./src/modules/swagger/**/*.ts'],
    },
  },
  ...samplesFnConfig,
  ...someExampleFnConfig,
};

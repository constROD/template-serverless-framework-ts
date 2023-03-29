// eslint-disable-next-line import/no-extraneous-dependencies
import { type AWS } from '@serverless/typescript';
import { SWAGGER_ROUTES } from 'modules/swagger/constants';
import { FUNCTIONS } from 'serverless/constants';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';
import { samplesFnConfig } from './samples';

export const functions: AWS['functions'] = {
  [FUNCTIONS.Swagger]: {
    handler: makeHandlerPath(FUNCTIONS.Swagger),
    events: makeRoutes(SWAGGER_ROUTES),
    package: {
      patterns: ['./src/modules/swagger/**/*.ts'],
    },
  },
  ...samplesFnConfig,
};

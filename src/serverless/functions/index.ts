import { type AWS } from '@serverless/typescript';
import { SWAGGER_ROUTES } from 'modules/swagger/constants';
import { FUNCTIONS } from 'serverless/constants';
import { transformToPascal } from 'shared/utils/commons';
import { makeHandlerPath, makeRoutes } from 'shared/utils/handler';
import { samplesFnConfig } from './samples';
import { someExampleFnConfig } from './some-example';

const SwaggerPascalCase = transformToPascal(FUNCTIONS.Swagger);

export const functions: AWS['functions'] = {
  [SwaggerPascalCase]: {
    handler: makeHandlerPath(FUNCTIONS.Swagger),
    events: makeRoutes(SWAGGER_ROUTES),
    package: {
      patterns: ['./src/modules/swagger/**/*.ts'],
    },
  },
  ...samplesFnConfig,
  ...someExampleFnConfig,
};

import { docs as samplesDocs } from 'modules/samples/functions/handler';
import { docs as someExampleDocs } from 'modules/some-example/functions/handler';
import { version } from 'package.json';
import { SERVICE_NAME } from 'serverless/constants';
import { transformToPascal } from 'shared/utils/commons';
import swaggerJsdoc from 'swagger-jsdoc';

const serviceName = transformToPascal(SERVICE_NAME);

const options: swaggerJsdoc.OAS3Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: `${serviceName} API`,
      version,
    },
    paths: {
      ...samplesDocs,
      ...someExampleDocs,
    },
  },
  apis: [],
};

export const openApiSchema = swaggerJsdoc(options);

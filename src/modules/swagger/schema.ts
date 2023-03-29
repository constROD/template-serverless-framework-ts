import { samplesSwaggerPaths } from 'modules/samples/functions/handler';
import { version } from 'package.json';
import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.OAS3Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample API',
      version,
    },
    paths: {
      ...samplesSwaggerPaths,
    },
  },
  apis: [],
};

export const openApiSchema = swaggerJsdoc(options);

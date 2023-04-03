import { type Handler } from 'aws-lambda';
import { openApiSchema } from 'modules/swagger/schema';
import { type APIGatewayEventType } from 'shared/types/http';
import { SWAGGER_ROUTES } from '../constants';

const handler: Handler = async (event: APIGatewayEventType) => {
  const title = 'Service API';

  if (event.rawPath === SWAGGER_ROUTES.swaggerJson.path) {
    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(openApiSchema),
    };
  }

  const body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@3/swagger-ui.css">
    </head>
    <body>
        <div id="swagger"></div>
        <script src="https://unpkg.com/swagger-ui-dist@3/swagger-ui-bundle.js"></script>
        <script>
          SwaggerUIBundle({
            dom_id: '#swagger',
            url: '${SWAGGER_ROUTES.swaggerJson.path}'
        });
        </script>
    </body>
    </html>`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body,
  };
};

export const run = handler;

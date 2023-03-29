import { Method } from '@middy/http-router';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
  docs: {
    method: Method.Get,
    path: '/',
  },
  swaggerJson: {
    method: Method.Get,
    path: '/swagger.json',
  },
} as const;

export const SWAGGER_ROUTES: MakeRoutesOption<typeof routes> = routes;

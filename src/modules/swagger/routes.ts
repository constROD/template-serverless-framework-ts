import { Method } from '@middy/http-router';
import { Route } from 'shared/types/api';

export const swaggerRoutes: Omit<Route, 'handler'>[] = [
  {
    method: Method.Get,
    path: '/docs',
  },
  {
    method: Method.Get,
    path: '/swagger.json',
  },
];

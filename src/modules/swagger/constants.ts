import { type Route } from 'shared/types/http';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes: Record<string, Omit<Route, 'handler'>> = {
  docs: {
    method: 'GET',
    path: '/',
  },
  swaggerJson: {
    method: 'GET',
    path: '/swagger.json',
  },
} as const;

export const SWAGGER_ROUTES: MakeRoutesOption<typeof routes> = routes;

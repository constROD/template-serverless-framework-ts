import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
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

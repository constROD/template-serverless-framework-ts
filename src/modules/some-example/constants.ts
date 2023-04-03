import { Method } from '@middy/http-router';
import { FUNCTIONS } from 'serverless/constants';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
  listOfSomeExample: {
    method: Method.Get,
    path: `/${FUNCTIONS.SomeExample.name}`,
  },
} as const;

export const SOME_EXAMPLE_ROUTES: MakeRoutesOption<typeof routes> = routes;

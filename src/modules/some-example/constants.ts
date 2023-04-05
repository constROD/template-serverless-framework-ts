import { FUNCTIONS } from 'serverless/constants';
import { type Route } from 'shared/types/http';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes: Record<string, Omit<Route, 'handler'>> = {
  listOfSomeExample: {
    method: 'GET',
    path: `/${FUNCTIONS.SomeExample.name}`,
  },
} as const;

export const SOME_EXAMPLE_ROUTES: MakeRoutesOption<typeof routes> = routes;

import { FUNCTIONS } from 'serverless/constants';
import { type MakeRoutesOption } from 'shared/utils/handler';

const routes = {
  listOfSomeExample: {
    method: 'GET',
    path: `/${FUNCTIONS.SomeExample.Name}`,
  },
} as const;

export const SOME_EXAMPLE_ROUTES: MakeRoutesOption<typeof routes> = routes;

import { APIResponseTypes, API_RESPONSES } from 'shared/constants/api';
import { APIResponse } from 'shared/types/api';

const commonHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'Content-Type': 'application/json',
};

export const createAPIResponse = <R>({
  type,
  response,
}: {
  type: APIResponseTypes;
  response?: Partial<APIResponse<R>>;
}) => ({
  statusCode: API_RESPONSES[type].statusCode,
  headers: commonHeaders,
  body: JSON.stringify({
    message: API_RESPONSES[type].message,
    code: API_RESPONSES[type].code,
    ...response,
  }),
});

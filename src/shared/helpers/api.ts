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
  isRaw = false,
}: {
  type: APIResponseTypes;
  response?: R;
  isRaw?: boolean;
}) => {
  if (isRaw)
    return {
      statusCode: API_RESPONSES[type].statusCode,
      headers: commonHeaders,
      body: (response ? JSON.stringify({ ...response }) : {}) as R,
    };

  return {
    statusCode: API_RESPONSES[type].statusCode,
    headers: commonHeaders,
    body: JSON.stringify({
      message: API_RESPONSES[type].message,
      code: API_RESPONSES[type].code,
      ...response,
    }) as Partial<APIResponse<R>>,
  };
};

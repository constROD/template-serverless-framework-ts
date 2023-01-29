/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import middy from '@middy/core';
import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { APIResponseTypes } from 'shared/constants/api';
import { createAPIResponse } from 'shared/helpers/api';
import { APIRequest } from 'shared/types/api';
import { z } from 'zod';

type EventKey = 'body' | 'query' | 'path' | 'headers';

export const validationMiddleware = ({
  type = ['body'],
  validatorSchema,
}: {
  type: EventKey[];
  validatorSchema: z.ZodSchema;
}) => {
  const before: middy.MiddlewareFn<APIGatewayProxyEventV2> = ({ event }) => {
    const eventKeys = {
      body: 'body',
      query: 'queryStringParameters',
      path: 'pathParameters',
      headers: 'headers',
    };

    const valuesToValidate = type.reduce((obj, currentType) => {
      const eventKey = eventKeys[currentType];
      const key = eventKey as keyof APIGatewayProxyEventV2;
      if (event[key]) return { ...(obj as object), ...(event[key] as object) };
      return obj;
    }, {});

    try {
      const data = validatorSchema.parse(valuesToValidate);

      (event as APIGatewayProxyEventV2 & { custom: APIRequest }).custom = {
        ...(event as APIGatewayProxyEventV2 & { custom: APIRequest }).custom,
        request: { ...data },
      };
    } catch (error) {
      return createAPIResponse({
        type: APIResponseTypes.BadRequest,
        response: { error },
      });
    }
  };
  return { before };
};

export const authorizeMiddleware = ({ permission }: { permission: string }) => {
  const before: middy.MiddlewareFn<APIGatewayProxyEventV2> = ({ event }) => {
    const accessToken = event.headers['x-access-token'];

    if (!accessToken) {
      return createAPIResponse({
        type: APIResponseTypes.Unauthorized,
        response: { message: 'Unauthorized' },
      });
    }

    // TODO: Implement the authorization logic (Call to User Service)
    // eslint-disable-next-line no-console
    console.log({ permission });
  };

  return { before };
};

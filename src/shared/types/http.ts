import { type APIGatewayProxyEventV2, type Handler } from 'aws-lambda';

export interface Route {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  handler: Handler;
}

export type APIGatewayEventType<TEvent = undefined> = TEvent extends undefined
  ? APIGatewayProxyEventV2
  : Omit<APIGatewayProxyEventV2, keyof TEvent> & TEvent;

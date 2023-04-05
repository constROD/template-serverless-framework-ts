import { type MiddyfiedHandler } from '@middy/core';
import { type Method } from '@middy/http-router';
import { type Handler } from 'aws-lambda';

export interface Route {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
}

export type HandlerRoute = Omit<Route, 'method'> & { method: Method; handler: Handler };

export type HandlerDictionary<TRoutes> = Record<keyof TRoutes, MiddyfiedHandler>;

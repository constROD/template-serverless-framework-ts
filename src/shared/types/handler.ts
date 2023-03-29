import { type MiddyfiedHandler } from '@middy/core';

export type HandlerDictionary<TRoutes> = Record<keyof TRoutes, MiddyfiedHandler>;

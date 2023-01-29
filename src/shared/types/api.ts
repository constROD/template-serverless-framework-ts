import { Method } from '@middy/http-router';
import { Handler } from 'aws-lambda';
import { Code } from 'shared/constants/api';

export interface Route {
  method: Method;
  path: string;
  handler: Handler;
}

export interface Pagination {
  current: number;
  next: number;
  prev: number;
  pageSize: number;
}

export interface APIRequest<R = unknown> {
  request: R;
  pagination?: Pagination;
}

export interface APIResponse<R = unknown> {
  code: Code;
  message: string;
  records?: R[];
  totalRecords?: number;
  pagination?: Pagination;
  error?: unknown;
}

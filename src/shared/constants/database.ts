import { Env } from './config';

export enum Entities {
  Sample = 'sample',
}

// TODO: Uncomment this line when you have a database
export const DB_HOST = process.env[Env.DB_HOST];
export const DB_PORT = Number(process.env[Env.DB_PORT]);
export const DB_USERNAME = process.env[Env.DB_USERNAME];
export const DB_PASSWORD = process.env[Env.DB_PASSWORD];
export const DB_NAME = process.env[Env.DB_NAME];

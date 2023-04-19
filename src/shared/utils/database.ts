import knex, { type Knex } from 'knex';
import pg from 'pg';
import { env } from 'shared/constants/environments';

pg.types.setTypeParser(pg.types.builtins.INT8, (value: string) => Number(value));
pg.types.setTypeParser(pg.types.builtins.FLOAT8, (value: string) => Number(value));
pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value: string) => Number(value));

const connectionConfig: Partial<Knex.PgConnectionConfig> = {
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USERNAME,
  password: env.DB_PASSWORD,
};

const pool: Knex.Config['pool'] = { min: 1, max: 1 };

/**
 *
 * @param database a database name
 * @returns knex instance
 */

const connect = (database: string) =>
  knex({
    client: 'pg',
    connection: {
      ...connectionConfig,
      database,
    },
    pool,
  });

/**
 * Establishes a connection to the database.
 */
export const connection = connect(env.DB_NAME);

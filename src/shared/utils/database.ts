import knex, { Knex } from 'knex';
import pg from 'pg';
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from 'shared/constants/database';

pg.types.setTypeParser(pg.types.builtins.INT8, (value: string) => Number(value));
pg.types.setTypeParser(pg.types.builtins.FLOAT8, (value: string) => Number(value));
pg.types.setTypeParser(pg.types.builtins.NUMERIC, (value: string) => Number(value));

const client = 'pg';
const commonConnectionProperties: Partial<Knex.PgConnectionConfig> = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
};

const pool: Knex.Config['pool'] = { min: 1, max: 1 };

export const getKnexConnection = (database: string) =>
  knex({
    client,
    connection: {
      ...commonConnectionProperties,
      database,
    },
    pool,
  });

/* eslint-disable no-nested-ternary */
import { Knex } from 'knex';

/**
 * TODO: Add pagination
 */

export class PGService<Schema = unknown, Create = unknown, Update = unknown> {
  protected connection: Knex;

  protected tableName: string;

  protected searchFields: string[];

  protected raw: Knex.RawBuilder;

  protected ref: Knex.RefBuilder;

  protected transaction: Knex.Transaction;

  constructor({ connection, tableName }: { connection: Knex; tableName: string }) {
    this.connection = connection;
    this.tableName = tableName;
    this.raw = connection.raw;
    this.ref = connection.ref;
  }

  get = async <S = Schema>(id: string): Promise<S[]> => {
    const records = (await this.connection.select('*').from(this.tableName).where('id', id)) as S[];
    return records;
  };

  list = async <S = Schema>(): Promise<{ records: S[]; totalRecords: number }> => {
    const records = (await this.connection.select('*').from(this.tableName)) as S[];
    const [total] = (await this.connection(this.tableName).count('id', {
      as: 'totalRecords',
    })) as { totalRecords: number }[];
    return { records, totalRecords: total.totalRecords };
  };

  create = async <V = Create, S = Schema>(values: V): Promise<S[]> => {
    const records = (await this.connection
      .insert(values)
      .into(this.tableName)
      .returning('*')) as S[];
    return records;
  };

  update = async <V = Update, S = Schema>(id: string, values: Partial<V>): Promise<S[]> => {
    const records = (await this.connection(this.tableName)
      .update({ ...values, updatedAt: 'NOW()' })
      .where('id', id)
      .returning('*')) as S[];
    return records;
  };

  archive = async <S = Schema>(ids: string[]): Promise<S[]> => {
    const records = (await this.connection(this.tableName)
      .update({ deletedAt: 'NOW()' })
      .whereIn('id', ids)
      .returning('*')) as S[];
    return records;
  };

  delete = async <S = Schema>(ids: string[]): Promise<S[]> => {
    const records = (await this.connection(this.tableName)
      .del()
      .whereIn('id', ids)
      .returning('*')) as S[];
    return records;
  };
}

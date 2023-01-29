import { CreateSample, Sample, UpdateSample } from 'modules/samples/types';
import { Entities } from 'shared/constants/database';
import { PGService } from 'shared/services/pg';
import { getKnexConnection } from 'shared/utils/database';

export class SampleService extends PGService<Sample, CreateSample, UpdateSample> {
  constructor() {
    super({ connection: getKnexConnection('sample-db'), tableName: Entities.Sample });
  }
}

export const sampleService = new SampleService();

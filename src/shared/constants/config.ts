/* eslint-disable no-template-curly-in-string */
export const ServiceName = 'service-name';

export const DeploymentBucketName = 'project-name';

export const LambdaTimeout = 10; // In seconds

export enum Serverless {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  ServiceName = '${self:service}',
  Stage = "${opt:stage, 'dev'}",
}

export enum Customs {
  Secrets = 'secrets',
  Bucket = 'project-name-bucket',
}

export enum Stages {
  Dev = 'dev',
  Staging = 'staging',
  Prod = 'prod',
}

export enum Functions {
  Swagger = 'swagger',
  Samples = 'samples',
}

export enum Resources {
  Samples = 'samples',
}

export enum Env {
  BUCKET = 'BUCKET',
  DB_HOST = 'DB_HOST',
  DB_PORT = 'DB_PORT',
  DB_USERNAME = 'DB_USERNAME',
  DB_PASSWORD = 'DB_PASSWORD',
  DB_NAME = 'DB_NAME',
}

import { Method } from '@middy/http-router';
import { archiveSample } from 'functions/samples/archive';
import { createSample } from 'functions/samples/create';
import { deleteSample } from 'functions/samples/delete';
import { getSample } from 'functions/samples/get';
import { listOfSamples } from 'functions/samples/list';
import { updateSample } from 'functions/samples/update';
import { Functions } from 'shared/constants/config';
import { createRoutes } from 'shared/helpers/lambda';
import { Route } from 'shared/types/api';

export const sampleRoutes: Route[] = [
  {
    method: Method.Get,
    path: `/${Functions.Samples}`,
    handler: listOfSamples,
  },
  {
    method: Method.Get,
    path: `/${Functions.Samples}/{id}`,
    handler: getSample,
  },
  {
    method: Method.Post,
    path: `/${Functions.Samples}`,
    handler: createSample,
  },
  {
    method: Method.Put,
    path: `/${Functions.Samples}/{id}`,
    handler: updateSample,
  },
  {
    method: Method.Delete,
    path: `/${Functions.Samples}/{id}`,
    handler: deleteSample,
  },
  {
    method: Method.Delete,
    path: `/${Functions.Samples}/{id}/archive`,
    handler: archiveSample,
  },
];

export const run = createRoutes(sampleRoutes);

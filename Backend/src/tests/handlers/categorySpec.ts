/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Test Category endpoint responses', async () => {
  it('gets all category enpoint', async () => {
    const response = await request.get('/category/all');
    expect(response.status).toBe(200);
  });

  it('gets a specific category endpoint', async () => {
    const response = await request.get('/category/1');
    expect(response.status).toBe(200);
  });
});

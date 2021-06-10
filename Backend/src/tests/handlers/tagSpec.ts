/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Test Category endpoint responses', async () => {
  it('create a new tag', async () => {
    await request
      .post('/tag')
      .send({ title: '#up2', path: '#up2' })
      .expect(200);
  });

  it('gets the api endpoint', async () => {
    const response = await request.get('/tag/all');
    expect(response.status).toBe(200);
  });

  it('gets the images endpoint', async () => {
    const response = await request.get('/tag/1');
    expect(response.status).toBe(200);
  });
});

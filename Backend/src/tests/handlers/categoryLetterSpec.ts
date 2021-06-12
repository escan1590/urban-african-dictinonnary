/* eslint-disable no-undef */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import supertest from 'supertest';
import app from '../../server';

const request = supertest(app);

describe('Test Category_letter endpoint responses', async () => {
  it('gets all category_letter endpoint', async () => {
    const response = await request.get('/category_letter/all');
    expect(response.status).toBe(200);
  });

  it('gets a specific category_letter endpoint', async () => {
    const response = await request.get('/category_letter/1');
    expect(response.status).toBe(200);
  });
});

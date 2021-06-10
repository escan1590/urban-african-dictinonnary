/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express, { Request, Response } from 'express';
import { CategoryStore } from '../models/category';

const store = new CategoryStore();

const index = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to show the categories : ${error}`);
  }
};

const show = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    if (!id) throw new Error(`bad parameters or no parameters Provided`);
    const result = await store.show(Number(id));
    if (!result) throw new Error(`No category found`);
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to show the category`);
  }
};

const categoryRoute = (app: express.Application) => {
  app.get('/category/all', index);
  app.get('/category/:id', show);
};

export default categoryRoute;

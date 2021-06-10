/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express, { Request, Response } from 'express';
import { CategoryLetterStore } from '../models/categoryLetter';

const store = new CategoryLetterStore();

const index = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to show category_letter items : ${error}`);
  }
};

const show = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    if (!id) throw new Error(`bad parameters or no parameters Provided`);
    const result = await store.show(Number(id));
    if (!result) throw new Error(`No category_letter found`);
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to show the category_letter item`);
  }
};

const categoryLetterRoute = (app: express.Application) => {
  app.get('/category_letter/all', index);
  app.get('/category_letter/:id', show);
};

export default categoryLetterRoute;

/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express, { Request, Response } from 'express';
import { TagStore } from '../models/tag';

const store = new TagStore();

const index = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to show the tags : ${error}`);
  }
};

const show = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    if (!id) throw new Error(`bad parameters or no parameters Provided`);
    const result = await store.show(Number(id));
    if (!result) throw new Error(`No tag found`);
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to show the tag`);
  }
};

const create = async (_req: Request, res: Response) => {
  try {
    interface Parameter {
      title: string;
      path: string;
    }
    const { title, path }: Parameter = _req.body;
    if (!title || !path) throw new Error(`Missing paramaters`);
    const result = await store.create(title, path);
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to create the tag : ${error}`);
  }
};

const tagRoute = (app: express.Application) => {
  app.get('/tag/all', index);
  app.get('/tag/:id', show);
  app.post('/tag', express.json(), create);
};

export default tagRoute;

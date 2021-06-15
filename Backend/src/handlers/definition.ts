/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express, { Request, Response } from 'express';
import { DefinitionStore } from '../models/definition';
import { date, findLetterId } from '../helpers/utils';
import { verifyAuth, verifyAuthId } from '../middleware/verifyAuth';
import { titleLeast, descLeast, expLeast } from '../helpers/config';

const store = new DefinitionStore();

const index = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    if (!result) throw new Error('No definitions to fetch');
    res.send(result);
  } catch (error) {
    res.status(400).send(`unable fetch definitions : ${error}`);
  }
};

// TODO create a show that only show definition for a particular user id

const indexUser = async (_req: Request, res: Response) => {
  try {
    const { authorId } = _req.params;
    if (!authorId) throw new Error('Missing parameter');
    const result = await store.indexUser(authorId);
    if (!result) throw new Error('No definition found');
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to fetch definitions : ${error}`);
  }
};

const show = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    if (!id) throw new Error('Missing parameter');
    const result = await store.show(id);
    if (!result) throw new Error('No definition found');
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to fetch this definition : ${error}`);
  }
};

const create = async (_req: Request, res: Response) => {
  try {
    const { categoryId, title, description, exemple } = _req.body;
    const authorId = _req.idUser;
    const categoryLetterId = findLetterId(title);
    const createdAt = date(Date.now());
    const updatedAt = createdAt;
    const result = await store.create(
      authorId,
      categoryId,
      categoryLetterId,
      title,
      description,
      exemple,
      true,
      createdAt,
      updatedAt
    );
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to create the definition : ${error}`);
  }
};

// TODO create a show that only show definition for a particular user id

const update = async (_req: Request, res: Response) => {
  try {
    const { id } = _req.params;
    const {
      title,
      description,
      exemple,
    }: { title?: string; description?: string; exemple?: string } = _req.body;
    if (!title || !description || !exemple)
      throw new Error(
        'cannot have empty entries for title, description or exemple'
      );
    if (title.length < titleLeast)
      throw new Error(
        `title too short must have at least ${titleLeast} characters`
      );
    if (description.length < descLeast)
      throw new Error(
        `description too short must have at least ${descLeast} characters`
      );
    if (description.length < expLeast)
      throw new Error(
        `exemple too short must have at least ${expLeast} characters`
      );
    const updatedAt = date(Date.now());
    const result = await store.update(
      id,
      title,
      description,
      exemple,
      updatedAt
    );
    res.send(result);
  } catch (error) {
    res.status(400).send(``);
  }
};
const definitionRoute = (app: express.Application) => {
  app.get('/definition/all', index);
  app.get('/definition/:authorId', verifyAuthId, indexUser);
  app.get('/definition/:id', show);
  app.post('/definition', verifyAuth, express.json(), create);
  app.put('/definition/:id', verifyAuth, update);
};

export default definitionRoute;

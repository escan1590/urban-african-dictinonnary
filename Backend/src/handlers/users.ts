/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';
import { date } from '../helpers/utils';
import { UserStore } from '../models/users';
import { verifyAuthId } from '../middleware/verifyAuth';

dotenv.config();
const store = new UserStore();
const secret: jwt.Secret = process.env.TOKEN_SECRET as string;

const index = async (_req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to show users items : ${error}`);
  }
};

// Should check if the username was the good one berfore allowing this
const show = async (_req: Request, res: Response) => {
  try {
    const { username } = _req.params;
    if (!username) throw new Error('No username provided');
    const result = await store.show(username);
    res.send(result);
  } catch (error) {
    res.status(400).send(`Unable to show user : ${error}`);
  }
};

const create = async (_req: Request, res: Response) => {
  try {
    if (!_req.body) throw new Error('No datas Provided');
    const { name, username, email, password } = _req.body;
    const id = uuid();
    const createdAt = date(Date.now());
    const newUserCreated = await store.create(
      id,
      name,
      username,
      email,
      password,
      createdAt
    );
    const token = jwt.sign({ user: newUserCreated }, secret);
    res.json(token);
  } catch (error) {
    res.status(400).send(`Unable to create user : ${error}`);
  }
};

const authenticate = async (_req: Request, res: Response) => {
  try {
    if (!_req.body.username || !_req.body.password)
      throw new Error(`password or username missing`);
    const { username, password } = _req.body;
    const signedInUser = await store.authenticate(username, password);
    if (!signedInUser) throw new Error(`Wrong password or Username`);
    const token = jwt.sign({ user: signedInUser }, secret);
    res.json(token);
  } catch (error) {
    res.status(400).send(`Unable to authenticate : ${error}`);
  }
};

// const update = (_req: Request, res: Response) => {
//   const user = {
//     id: _req.params.id,
//     username: _req.body.username,
//     password: _req.body.password,
//     email: _req.body.email,
//   };
//   try {
//     const authorizationHeader = _req.headers.authorization;
//     const token = authorizationHeader?.split(' ')[1] as string;
//     const decoded = jwt.verify(token, secret);
//     if (decoded.id !== user.id) {
//       throw new Error(`Not authorize to save modifications`);
//     }
//     store.update()
//   } catch (error) {
//     res.status(400).send(`Unable to upadte user : ${error}`);
//   }
// };

const remove = (_req: Request, res: Response) => {
  const { username } = _req.params;

  try {
    const user = store.delete(username);
    res.send(user);
  } catch (error) {
    res.status(400).send(`Unable to delete user : ${error}`);
  }
};

const userRoute = (app: express.Application) => {
  app.get('/user/all', index);
  app.get('/user/:id', verifyAuthId, show);
  app.post('user', express.json(), create);
  app.post('user/login', express.json(), authenticate);
  app.delete('user/:id/:username', verifyAuthId, remove);
};

export default userRoute;

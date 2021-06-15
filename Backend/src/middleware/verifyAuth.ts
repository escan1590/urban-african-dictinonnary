/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User, UserAuth } from '../models/users';

dotenv.config();

export const verifyAuth = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorizationHeader = _req.headers.authorization;
    const token = authorizationHeader?.split(' ')[1] as string;
    const secret = process.env.TOKEN_SECRET as string;
    const { user } = jwt.verify(token, secret) as { user: UserAuth | User };
    // eslint-disable-next-line no-param-reassign
    _req.idUser = user.id;
    next();
  } catch (error) {
    res.status(401);
    res.json(`Unable to authenticate : ${error}`);
    // eslint-disable-next-line no-useless-return
    return;
  }
};

export const verifyAuthId = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const userCheck: { id?: string; username?: string } = {
    id: _req.params.id,
    username: _req.params.username,
  };

  try {
    const authorizationHeader = _req.headers.authorization;
    const token = authorizationHeader?.split(' ')[1] as string;
    const secret = process.env.TOKEN_SECRET as string;
    const { user }: { user: UserAuth | User } = jwt.verify(token, secret) as {
      user: UserAuth | User;
    };
    if (user.id !== userCheck.id || user.username !== userCheck.username) {
      throw new Error('authorization denied');
    }
    next();
  } catch (error) {
    res.status(401);
    res.json(`Unable to authenticate : ${error}`);
    // eslint-disable-next-line no-useless-return
    return;
  }
};

export const verifyAuthIdDef = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  const userCheck: { authorId?: string } = {
    authorId: _req.params.authorId,
  };

  try {
    const authorizationHeader = _req.headers.authorization;
    const token = authorizationHeader?.split(' ')[1] as string;
    const secret = process.env.TOKEN_SECRET as string;
    const { user }: { user: UserAuth | User } = jwt.verify(token, secret) as {
      user: UserAuth | User;
    };
    if (user.id !== userCheck.authorId) {
      throw new Error('authorization denied');
    }
    next();
  } catch (error) {
    res.status(401);
    res.json(`Unable to authenticate : ${error}`);
    // eslint-disable-next-line no-useless-return
    return;
  }
};

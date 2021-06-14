/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UserAuth } from '../models/users';

dotenv.config();

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader?.split(' ')[1] as string;
    const secret = process.env.TOKEN_SECRET as string;
    jwt.verify(token, secret);

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
    const { user }: { user: UserAuth } = jwt.verify(token, secret) as {
      user: UserAuth;
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

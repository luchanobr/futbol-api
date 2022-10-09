import { SECRET_AUTH } from '@/config';
import { HttpException } from '@/exceptions/http-exception';
import { findUserById } from '@/services/auth.service';
import { verify } from 'jsonwebtoken';
import { User } from '@/interfaces/user.interface';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = async (req: Request & { user?: User }, res: Response, next: NextFunction) => {
  try {
    const authorization = req.header('Authorization');
    const token = authorization ? authorization.split('Bearer ')[1] : null;
    if (authorization && token) {
      const secret = SECRET_AUTH as string;
      const { id } = (await verify(token, secret)) as { id: string };
      const user = await findUserById(id);
      if (user && user.rol === 'admin') {
        req.user = user;
        next();
      }
    } else {
      throw new HttpException(401, 'Unauthorized');
    }
  } catch (error) {
    next(error);
  }
};

const logginMiddleware = async (req: Request & { user?: User }, res: Response, next: NextFunction) => {
  try {
    const authorization = req.header('Authorization');
    const token = authorization ? authorization.split('Bearer ')[1] : null;
    if (authorization && token) {
      const secret = SECRET_AUTH as string;
      const { id } = (await verify(token, secret)) as { id: string };
      const user = await findUserById(id);
      if (user) {
        req.user = user;
        next();
      }
    } else {
      throw new HttpException(401, 'Unauthorized');
    }
  } catch (error) {
    next(error);
  }
};

export { authMiddleware, logginMiddleware };

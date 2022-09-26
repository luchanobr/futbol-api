import { SECRET_AUTH } from '@/config';
import { HttpException } from '@/exceptions/http-exception';
import { ZodException } from '@/exceptions/zod.exception';
import { user } from '@/interfaces/user.interface';
import { findAllUsers, insertUser } from '@/services/auth.service';
import { hash, compare } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newUser = user.omit({ id: true }).safeParse(req.body);
    if (!newUser.success) throw new ZodException(newUser.error.flatten());
    const userAlredyExist = await findAllUsers({ email: newUser.data.email });
    if (userAlredyExist.length > 0)
      throw new HttpException(409, `another account exist with this email: ${newUser.data.email} `);
    const hashedPassword = await hash(newUser.data.password, 10);
    const result = await insertUser({ ...newUser.data, password: hashedPassword });

    res.status(201).json({ data: result.identifiers, status: 201, message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const credentials = user.omit({ id: true }).safeParse(req.body);
    if (!credentials.success) throw new ZodException(credentials.error.flatten());
    const userAlredyExist = await findAllUsers({ email: credentials.data.email });
    if (userAlredyExist.length === 0) throw new HttpException(409, 'User not found');
    const passwordMatching = await compare(credentials.data.password, userAlredyExist[0].password);
    if (!passwordMatching) throw new HttpException(409, 'Password not matching');
    const tokenData = { id: userAlredyExist[0].id };
    const token = sign(tokenData, SECRET_AUTH as string);
    res.status(200).json({ data: { token }, status: 200, message: 'Logging' });
  } catch (error) {
    next(error);
  }
};

export { createUser, login };

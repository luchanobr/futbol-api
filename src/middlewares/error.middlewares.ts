import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/http-exception';
import { ZodException } from '@/exceptions/zod.exception';

const errorMiddleware = (error: HttpException | ZodException<any>, req: Request, res: Response, next: NextFunction) => {
  try {
    console.error(`[${req.method}] ${req.path} >> StatusCode:: ${error.status}, Message:: ${error.message}`);
    res.status(error.status).json({ ...error, message: error.message });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;

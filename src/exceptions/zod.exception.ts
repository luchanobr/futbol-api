import { typeToFlattenedError } from 'zod';
import { HttpException } from './http-exception';

export class ZodException<T> extends HttpException {
  public error: typeToFlattenedError<T>;
  constructor(error: typeToFlattenedError<T>, status = 400, message = 'Bad request') {
    super(status, message);
    this.error = error;
  }
}

export class HttpException extends Error {
  public status: number;
  public message: string;

  constructor(status = 500, message = 'Something when wrong') {
    super(message);
    this.status = status;
    this.message = message;
  }
}

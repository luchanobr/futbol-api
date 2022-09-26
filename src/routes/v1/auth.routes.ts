import { createUser, login } from '@/controllers/auth.controller';
import { Router } from 'express';

const path = '/auth';

const authRouter = Router();

authRouter.post(`${path}/signup`, createUser);
authRouter.post(`${path}/login`, login);

export { authRouter };

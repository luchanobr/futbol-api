import { Router } from 'express';
import { authRouter } from './auth.routes';
import teamsRouter from './teams.routes';

const routerV1 = Router();

routerV1.use(teamsRouter);
routerV1.use(authRouter);

export default routerV1;

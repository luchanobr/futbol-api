import { createTeam, getTeamById, getTeams } from '@/controllers/teams.controller';
import { authMiddleware } from '@/middlewares/auth.middlewares';
import { Router } from 'express';

const path = '/teams';

const teamsRouter = Router();

teamsRouter.get(path, getTeams);
teamsRouter.get(`${path}/:id`, getTeamById);
teamsRouter.post(path, authMiddleware, createTeam);

export default teamsRouter;

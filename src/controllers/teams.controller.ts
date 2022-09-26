import { ZodException } from '@/exceptions/zod.exception';
import { team } from '@/interfaces/team.interface';
import { User } from '@/interfaces/user.interface';
import { findAllTeams, findTeamById, insertTeam } from '@/services/teams.service';
import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const getTeams = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const query = team.partial().omit({ id: true }).safeParse(req.query);
    if (!query.success) throw new ZodException(query.error.flatten());
    const teams = await findAllTeams(query.data);

    res.status(200).json({ data: teams, status: 200, message: 'OK' });
  } catch (error) {
    next(error);
  }
};

const createTeam = async (req: Request & { user?: User }, res: Response, next: NextFunction) => {
  try {
    const newTeam = team.omit({ id: true }).safeParse(req.body);
    if (!newTeam.success) throw new ZodException(newTeam.error.flatten());
    const teams = await insertTeam(newTeam.data);
    res.status(201).json({ data: teams.identifiers, status: 201, message: 'Team created successfully' });
  } catch (error) {
    next(error);
  }
};

const getTeamById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = z.string().uuid().safeParse(req.params.id);
    if (!id.success) throw new ZodException(id.error.flatten());
    const teams = await findTeamById(id.data);
    res.status(200).json({ data: teams, status: 200, message: 'OK' });
  } catch (error) {
    next(error);
  }
};

export { getTeams, createTeam, getTeamById };

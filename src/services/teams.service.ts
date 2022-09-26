import { db } from '@/databases';
import { Teams } from '@/entities/teams.entity';
import { Team } from '@/interfaces/team.interface';

const teamRepository = db.getRepository(Teams);

const findAllTeams = async (query: Partial<Team>) => {
  const teams = await teamRepository.findBy(query);
  return teams;
};

const insertTeam = async (team: Team) => {
  const newTeam = await db.createQueryBuilder().insert().into(Teams).values(team).execute();
  return newTeam;
};

const findTeamById = async (id: string) => {
  const team = await teamRepository.findOneBy({ id: id });
  return team;
};

export { findAllTeams, insertTeam, findTeamById };

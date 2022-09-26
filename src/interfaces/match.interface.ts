import { z } from 'zod';
import { stadium } from './stadiums.interface';
import { team } from './team.interface';

const match = z.object({
  id: z.string().uuid().optional(),
  teamHome: z.union([team, z.string().uuid()]),
  teamAway: z.union([team, z.string().uuid()]),
  stadium: z.union([stadium, z.string().uuid()]),
  type: z.string().trim().min(1).max(50, 'max 50 characteres'),
  date: z.preprocess(
    (arg) => {
      if (typeof arg === 'string' || arg instanceof Date) return new Date(arg);
    },
    z.date().transform((arg) => arg.toISOString()),
  ),
  teamHomeScore: z.number().int().nonnegative().default(0),
  teamAwayScore: z.number().int().nonnegative().default(0),
  penaltiesHome: z.number().int().nonnegative().optional(),
  penaltiesAway: z.number().int().nonnegative().optional(),
});

type Match = z.output<typeof match>;
type MatchInput = z.input<typeof match>;

export { match, Match, MatchInput };

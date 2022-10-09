import { z } from 'zod';
import { confederation } from './confederation.interface';

const team = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1).max(20, 'max length is 20 characteres'),
  flag: z.string().min(1, 'flags is required'),
  code: z.string().trim().min(1).max(5, 'max length is 5 characteres'),
  federation: z.string().trim().min(1).max(100, 'max length is 1 characteres'),
  federationCode: z.string().trim().min(1).max(5, 'max length is 5 characteres'),
  federationFlag: z.string().min(1, 'federation flag is required'),
  confederation: z.union([confederation, z.string().uuid()]),
});

type Team = z.infer<typeof team>;

export { team, Team };

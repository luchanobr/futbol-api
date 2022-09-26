import { z } from 'zod';

const team = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1).max(20, 'max length is 20 characteres'),
  flag: z.string().url('invalid url').min(1, 'flags is required'),
  code: z.string().trim().min(1).max(10, 'max length is 10 characteres'),
  iso2: z.string().trim().min(1).max(10, 'max length is 10 characteres'),
  group: z.string().trim().min(1).max(1, 'max length is 1 characteres'),
});

type Team = z.infer<typeof team>;

export { team, Team };

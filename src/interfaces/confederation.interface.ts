import { z } from 'zod';

const confederation = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1).max(60, 'max length is 60 characteres'),
  code: z.string().trim().min(1).max(15, 'max length is 5 characteres'),
});

type Confederation = z.infer<typeof confederation>;

export { confederation, Confederation };

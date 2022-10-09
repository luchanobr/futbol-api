import { z } from 'zod';

const user = z.object({
  id: z.string().uuid().optional(),
  email: z.string().email(),
  password: z.string().trim().min(6, 'min 6 characteres').max(15, 'max 15 charactres'),
  rol: z.enum(['admin', 'user']),
});

type User = z.infer<typeof user>;

export { user, User };

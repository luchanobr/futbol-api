import { z } from 'zod';

const stadium = z.object({
  id: z.string().uuid().optional(),
  name: z.string().trim().min(1, 'name is required').max(50, 'max 50 characteres'),
  location: z.string().trim().min(1, 'location is required').max(50, 'max 50 characteres'),
  img: z.string().url().min(1, 'img is required'),
  capacity: z.number().int().positive(),
});

type Stadium = z.infer<typeof stadium>;

export { stadium, Stadium };

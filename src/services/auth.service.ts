import { db } from '@/databases';
import { Users } from '@/entities/users.entity';
import { User } from '@/interfaces/user.interface';

const userRepositiry = db.getRepository(Users);

const insertUser = async (user: User) => {
  const newUSer = await db.createQueryBuilder().insert().into(Users).values(user).execute();
  return newUSer;
};

const findUserById = async (id: string) => {
  const user = await userRepositiry.findOneBy({ id });
  return user;
};

const findAllUsers = async (user: Partial<User>) => {
  const users = await userRepositiry.findBy(user);
  return users;
};

export { insertUser, findUserById, findAllUsers };

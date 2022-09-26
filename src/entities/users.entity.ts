import { User } from '@/interfaces/user.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users implements User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true, length: 50 })
  email: string;

  @Column('varchar', { length: 100 })
  password: string;
}

import { Team } from '@/interfaces/team.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teams implements Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 20 })
  name: string;

  @Column('varchar', { length: 150 })
  flag: string;

  @Column('varchar', { length: 10 })
  code: string;

  @Column('varchar', { length: 10 })
  iso2: string;

  @Column('varchar', { length: 1 })
  group: string;
}

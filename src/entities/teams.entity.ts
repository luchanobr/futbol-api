import { Team } from '@/interfaces/team.interface';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Confederations } from './confederations.entity';

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

  @Column('varchar', { length: 100 })
  federation: string;

  @Column('varchar', { length: 10 })
  federationCode: string;

  @Column('varchar', { length: 150 })
  federationFlag: string;

  @OneToOne(() => Confederations)
  @JoinColumn()
  confederation: Confederations;
}

import { Confederation } from '@/interfaces/confederation.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Confederations implements Confederation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 60 })
  name: string;

  @Column('varchar', { length: 15 })
  code: string;
}

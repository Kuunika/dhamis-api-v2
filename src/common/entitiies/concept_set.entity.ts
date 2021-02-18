import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Concept } from './concept.entity';

@Entity({
  name: 'concept_set',
})
export class ConceptSet {
  @PrimaryGeneratedColumn()
  ID: number;
  
  concept_ID_set: Concept;
  
  concept_ID_member: Concept;

  @Column()
  sort_weight: number;

  @Column()
  calc_weight: number;

  @Column({ name: 'calc operator' })
  calcOperator: string;

  @Column()
  User: string;

  @Column({ type: 'datetime' })
  TimeStamp: Date;

  @Column()
  UpdateUser: string;

  @Column({ type: 'datetime' })
  UpdateTimeStamp: Date;

  @Column()
  Retired: number;

  @Column()
  RetiredUser: string;

  @Column({ type: 'datetime' })
  RetiredTimeStamp: Date;

  @Column({ type: 'datetime' })
  access_timestamp: Date;
}

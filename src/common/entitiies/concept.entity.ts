import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ConceptSet } from './concept_set.entity';

@Entity({
  name: 'concept',
})
export class Concept {
  @PrimaryGeneratedColumn()
  ID: number;
  //TODO: Create Relationship
  //TODO: Figure Out how to handle self referencing relationship
  //concept_ID_parent	int	NO	((2))	dbo.concept(ID)
  @Column()
  concept_name: string;
  @Column()
  concept_name_short: string;
  @Column()
  concept_description: string;
  @Column()
  sort_weight: number;
  @Column()
  legacy_code_ID: number;
  @Column()
  User: string;
  @Column()
  TimeStamp: Date;
  @Column()
  UpdateUser: string;
  @Column()
  UpdateTimeStamp: Date;
  @Column()
  Retired: number;
  @Column()
  RetiredUser: string;
  @Column()
  RetiredTimeStamp: Date;
  @Column()
  access_timestamp: Date;
  @OneToMany(() => ConceptSet, (conceptSet) => conceptSet.concept_ID_set)
  concept_ID_set: ConceptSet[];
  @OneToMany(() => ConceptSet, (conceptSet) => conceptSet.concept_ID_member)
  concept_ID_member: ConceptSet[];
}

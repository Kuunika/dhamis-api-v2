import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ArtClinicObs } from './art_clinic_obs.entity';

@Entity()
export class CodeYearQuarter {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  year: number;
  @Column()
  quarter: number;
  @Column({ type: 'datetime' })
  quarter_startdate: Date;
  @Column({ type: 'datetime' })
  quarter_stopdate: Date;
  @Column()
  version_set: number;
  @Column({ type: 'datetime' })
  access_timestamp: Date;
  @OneToMany(() => ArtClinicObs, (artClinicObs) => artClinicObs.codeYearQuarter)
  artClinicObs: ArtClinicObs[];
}

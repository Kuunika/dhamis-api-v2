import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CodeHdepartment } from './code_hdepartment.entity';
import { CodeYearQuarter } from './code_year_quarter.entity';
import { ObsDimensions } from './obs_dimensions.entity';

@Entity()
export class ArtClinicObs {
  @PrimaryGeneratedColumn()
  ID: number;
  @ManyToOne(
    () => CodeYearQuarter,
    (codeYearQuarter) => codeYearQuarter.artClinicObs,
  )
  codeYearQuarter: CodeYearQuarter; // code year quorter
  @ManyToOne(() => CodeHdepartment, (hdepartment) => hdepartment.artClinicObs)
  hdepartment: CodeHdepartment; // code_hdepartment
  @Column({ type: 'datetime' })
  visit_date: Date;
  @Column({ type: 'datetime' })
  start_time: Date;
  @Column({ type: 'datetime' })
  end_time: Date;
  @Column()
  car_regno: string;
  @Column()
  car_odo: number;
  @Column()
  problems: string;
  @Column()
  ap_clinic: string;
  @Column()
  ap_supervisor: string;
  @Column()
  mentor_rsn: string;
  @Column()
  User: string;
  @Column({ type: 'datetime' })
  TimeStamp: Date;
  @Column()
  UpdateUser: string;
  @Column({ type: 'datetime' })
  UpdateTimeStamp: Date;
  @Column()
  version_set: number;
  @Column({ type: 'datetime' })
  access_timestamp: Date;
  @OneToMany(
    () => ObsDimensions,
    (obsDimensions) => obsDimensions.art_clinic_obs,
  )
  obsDimensions: ObsDimensions[];
}

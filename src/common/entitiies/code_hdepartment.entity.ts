import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ArtClinicObs } from './art_clinic_obs.entity';
import { CodeHfacility } from './code_hfacility.entity';

@Entity()
export class CodeHdepartment {
  @PrimaryGeneratedColumn()
  ID: number;
  @ManyToOne(() => CodeHfacility, (codeHfacility) => codeHfacility.hDepartment)
  hfacility: CodeHfacility;
  @Column()
  hservice: number;
  @Column()
  hservice_paed: number;
  @Column()
  hauthority: number;
  @Column()
  hsector: number;
  @Column()
  freepay: number;
  @Column()
  hservmode: number;
  @Column()
  htc_mohcertified: number;
  @Column()
  name_healthdept: number;
  @Column({ type: 'datetime' })
  service_start: Date;
  @Column({ type: 'datetime' })
  service_end: Date;
  @Column({ type: 'datetime' })
  eds_start: Date;
  @Column()
  hdepartment_hub_id: number;
  @Column()
  User: string;
  @Column({ type: 'datetime' })
  TimeStamp: Date;
  @Column()
  UpdateUser: string;
  @Column()
  UpdateTimeStamp: Date;
  @Column()
  Voided: number;
  @Column()
  VoidedBy: string;
  @Column()
  VoidedTimeStamp: Date;
  @Column()
  access_timestamp: Date;
  @OneToMany(() => ArtClinicObs, (artClinicObs) => artClinicObs.hdepartment)
  artClinicObs: ArtClinicObs[];
}

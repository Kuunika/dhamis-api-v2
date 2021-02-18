import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CodeHdepartment } from './code_hdepartment.entity';

@Entity()
export class CodeHfacility {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  hfacility_name: string;
  @Column()
  district: number;
  @Column()
  hfactype: number;
  @Column()
  rururb: number;
  @Column()
  HMIU_code: string;
  @Column()
  Site_code: string;
  @Column()
  gps_x: number;
  @Column()
  gps_y: number;
  @Column()
  User: string;
  @Column({ type: 'datetime' })
  TimeStamp: Date;
  @Column()
  UpdateUser: string;
  @Column({ type: 'datetime' })
  UpdateTimeStamp: Date;
  @Column()
  Voided: number;
  @Column()
  VoidedBy: string;
  @Column({ type: 'datetime' })
  VoidedTimeStamp: Date;
  @Column({ type: 'datetime' })
  access_timestamp: Date;
  @OneToMany(
    () => CodeHdepartment,
    (codeHdepartment) => codeHdepartment.hfacility,
  )
  hDepartment: CodeHdepartment[];
}

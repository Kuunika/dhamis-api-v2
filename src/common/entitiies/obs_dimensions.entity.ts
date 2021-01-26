import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { ArtClinicObs } from './art_clinic_obs.entity';
import { Obs } from './obs.entity';

@Entity({
  name: 'obs_dimensions',
})
export class ObsDimensions {
  @PrimaryGeneratedColumn()
  ID: number;
  @ManyToOne(
    () => ArtClinicObs,
    (art_clinic_obs) => art_clinic_obs.obsDimensions,
  )
  art_clinic_obs: ArtClinicObs;
  @Column()
  period_report: number;
  @Column()
  sub_group: number;
  @Column()
  User: string;
  @Column({ type: 'datetime' })
  TimeStamp: Date;
  @Column({ type: 'datetime' })
  access_timestamp: Date;
  @OneToMany(() => Obs, (obs) => obs.obs_dimensions_ID)
  obs: Obs[];
}

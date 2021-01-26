import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { ObsDimensions } from './obs_dimensions.entity';

@Entity({
  name: 'obs',
})
export class Obs {
  @PrimaryGeneratedColumn()
  ID: number;
  @ManyToMany(() => ObsDimensions, (obs_dimension) => obs_dimension.obs)
  obs_dimensions_ID: ObsDimensions;
  @Column()
  data_element: number;
  @Column()
  data_value: number;
  @Column()
  access_timestamp: Date;
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArtAccom {
  @PrimaryGeneratedColumn()
  ID: number;

  @Column()
  AccomName: string;

  @Column()
  Phone: string;

  @Column()
  District_ID: number;

  @Column({ type: 'datetime' })
  access_timestamp: Date;
}

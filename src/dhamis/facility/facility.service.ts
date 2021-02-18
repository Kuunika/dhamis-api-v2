import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

export interface Facility {
  hfacility_id: number;
}

@Injectable()
export class FacilityService {
  constructor(private connection: Connection) {}

  async getAllFacilities(): Promise<Facility[]> {
    return this.connection.query(
      `SELECT DISTINCT hfacility_id FROM code_hdepartment;`,
    );
  }
}

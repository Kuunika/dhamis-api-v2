import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

export interface Facility {
  ID: number;
  hfacility_name: string;
  Site_code: string;
}

@Injectable()
export class FacilityService {
  constructor(private connection: Connection) { }

  async getAllFacilities(): Promise<Facility[]> {
    return this.connection.query(
      `SELECT DISTINCT
        ID,
        hfacility_name,
        Site_code
      FROM
        code_hfacility;`,
    );
  }
}

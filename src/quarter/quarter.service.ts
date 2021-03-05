import { Injectable } from '@nestjs/common';
import { Quarter } from 'src/common/interfaces/quarter';
import { Connection } from 'typeorm/connection/Connection';

@Injectable()
export class QuarterService {
  constructor(private connection: Connection) {}

  async getAllAvailableQuarters(): Promise<Quarter[]> {
    return this.connection.query(
      `SELECT ID as id, year, quarter FROM dbo.code_year_quarter;`,
    );
  }
}

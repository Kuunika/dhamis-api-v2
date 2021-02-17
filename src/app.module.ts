import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HivCareClinicModule } from './facility-report/facility-report.module';
import { DhaArtSectionService } from './dhamis/dha-art-section/dha-art-section.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { DEFAULT_DB_SERVER_PORT } from './common/constants/configuration.constants';
import { FacilityService } from './dhamis/facility/facility.service';

config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT ?? DEFAULT_DB_SERVER_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: false,
    }),
    HivCareClinicModule,
  ],
  controllers: [AppController],
  providers: [AppService, DhaArtSectionService, FacilityService],
})
export class AppModule {}

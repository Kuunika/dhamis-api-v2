import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HivCareClinicModule } from './facility-report/facility-report.module';
import { DhaArtSectionService } from './dhamis/dha-art-section/dha-art-section.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { DEFAULT_DB_SERVER_PORT } from './common/constants/configuration.constants';
import { FacilityService } from './dhamis/facility/facility.service';
import { env } from './common/helper';

config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: env('DB_HOST'),
      port: +env('DB_PORT') ?? DEFAULT_DB_SERVER_PORT,
      username: env('DB_USERNAME'),
      password: env('DB_PASSWORD'),
      database: env('DB_NAME'),
      entities: [],
      synchronize: false,
      options: {
        enableAnsiNullDefault: true,
      },
    }),
    HivCareClinicModule,
  ],
  controllers: [AppController],
  providers: [AppService, DhaArtSectionService, FacilityService],
})
export class AppModule {}

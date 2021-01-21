import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HivCareClinicModule } from './hiv-care-clinic/hiv-care-clinic.module';
import { DhaArtSectionService } from './dhamis/dha-art-section/dha-art-section.service';

@Module({
  imports: [HivCareClinicModule],
  controllers: [AppController],
  providers: [AppService, DhaArtSectionService],
})
export class AppModule {}

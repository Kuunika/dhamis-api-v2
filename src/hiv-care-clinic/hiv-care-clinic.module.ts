import { Module } from '@nestjs/common';
import { DhaArtSectionService } from 'src/dhamis/dha-art-section/dha-art-section.service';
import { HivCareClinicController } from './hiv-care-clinic.controller';
import { HivCareClinicService } from './hiv-care-clinic.service';

@Module({
  controllers: [HivCareClinicController],
  providers: [HivCareClinicService, DhaArtSectionService],
})
export class HivCareClinicModule {}

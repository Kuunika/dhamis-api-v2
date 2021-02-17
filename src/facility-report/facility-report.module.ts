import { Module } from '@nestjs/common';
import { DhaArtSectionService } from '../dhamis/dha-art-section/dha-art-section.service';
import { FacilityService } from '../dhamis/facility/facility.service';
import { FacilityReportController } from './facility-report.controller';
import { facilityReportService } from './facility-report.service';

@Module({
  controllers: [FacilityReportController],
  providers: [facilityReportService, DhaArtSectionService, FacilityService],
})
export class HivCareClinicModule {}

import { Controller, Get, Param } from '@nestjs/common';
import { FacilityReport } from '../common/enums/facility-report.enum';
import { facilityReportService } from './facility-report.service';

@Controller('')
export class FacilityReportController {
  constructor(private hivCareClinicService: facilityReportService) {}

  @Get('artoutcomesprimarysecondary/:yearQuarter/')
  getArtOutcomesPrimarySecondary(@Param('yearQuarter') yearQuarterId: number) {
    return this.hivCareClinicService.getDhaArtResults(
      yearQuarterId,
      FacilityReport.ART_OUTCOMES_PRIMARY_SECONDARY,
    );
  }

  @Get('hivcareclinic/:yearQuarter')
  getHivCareClinic(@Param('yearQuarter') yearQuarterId: number) {
    return this.hivCareClinicService.getDhaArtResults(
      yearQuarterId,
      FacilityReport.HIV_CARE_CLINIC,
    );
  }

  @Get('artclinic/:yearQuarter')
  getARTClinic(@Param('yearQuarter') yearQuarterId: number) {
    return this.hivCareClinicService.getDhaArtResults(
      yearQuarterId,
      FacilityReport.ART_CLINIC,
    );
  }
}

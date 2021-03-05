import { Injectable } from '@nestjs/common';
import { FacilityService } from '../dhamis/facility/facility.service';
import { FacilityReportDto } from '../common/dto/facility-report.dto';
import { DhaArtSectionService } from '../dhamis/dha-art-section/dha-art-section.service';
import { FacilityReport } from '../common/enums/facility-report.enum';
import {
  ART_CLINIC,
  ART_OUTCOMES_PRIMARY_SECONDARY,
  HIV_CARE_CLINIC,
} from '../common/constants/return-message.constants';

@Injectable()
export class facilityReportService {
  constructor(
    private dhaArtSectionService: DhaArtSectionService,
    private facilityService: FacilityService,
  ) {}

  async getDhaArtResults(
    yearQuarterId: number,
    facilityReport: FacilityReport,
  ): Promise<FacilityReportDto> {
    const facilityIds = await this.facilityService
      .getAllFacilities()
      .then((facilities) =>
        facilities.map((facility) => facility.hfacility_id),
      );

    const all_facilities = [];
    let year_quarter;

    const stmt = await this.getFacilityReporting(facilityReport, yearQuarterId);

    for (const facilityID of facilityIds) {
      const getHivCareClinicValues_Arr = [];
      let facility_code;

      stmt
        .filter((i) => i.hfacility_id === facilityID)
        .forEach((element) => {
          facility_code = element.hfacility_id;
          year_quarter = element.quarter;
          getHivCareClinicValues_Arr.push({
            'product-code': element.product_code,
            value: element.data_value,
            'concept-name': element.concept_name,
          });
        });

      all_facilities.push({
        'facility-code': facility_code,
        values: getHivCareClinicValues_Arr,
      });
    }

    return {
      description: `${this.getReturnMessage(facilityReport)} ${year_quarter}`,
      'reporting-period': year_quarter,
      facilities: all_facilities,
    };
  }

  private getReturnMessage(facilityReport: FacilityReport): string {
    let returnMessage: string;

    switch (facilityReport) {
      case FacilityReport.HIV_CARE_CLINIC:
        returnMessage = HIV_CARE_CLINIC;
        break;
      case FacilityReport.ART_OUTCOMES_PRIMARY_SECONDARY:
        returnMessage = ART_OUTCOMES_PRIMARY_SECONDARY;
        break;
      case FacilityReport.ART_CLINIC:
        returnMessage = ART_CLINIC;
        break;
    }

    return returnMessage;
  }

  private getFacilityReporting(
    facilityReport: FacilityReport,
    yearQuarterId: number,
  ) {
    switch (facilityReport) {
      case FacilityReport.ART_CLINIC:
        return this.dhaArtSectionService.getHccRegistration(yearQuarterId);
      case FacilityReport.ART_OUTCOMES_PRIMARY_SECONDARY:
        return this.dhaArtSectionService.getArtOutcomesPrimarySecondary(
          yearQuarterId,
        );
      case FacilityReport.HIV_CARE_CLINIC:
        return this.dhaArtSectionService.getArtRegistration(yearQuarterId);
    }
  }
}

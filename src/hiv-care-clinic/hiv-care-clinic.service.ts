import { Injectable } from '@nestjs/common';
import { HivCareClinicDto } from '../common/dto/hiv-care-clinic.dto';
import { DhaArtSectionService } from '../dhamis/dha-art-section/dha-art-section.service';

@Injectable()
export class HivCareClinicService {
  constructor(private readonly dhaArtSectionService: DhaArtSectionService) {}

  async getArtOutcomesPrimarySecondary(
    yearQuarterId: number,
    ou: string,
  ): Promise<HivCareClinicDto> {
    const ou_array = ou.split(',');

    const all_facilities = [];
    let year_quarter;

    for (const facilityID of ou_array) {
      const getHivCareClinicValues_Arr = [];
      let facility_code;

      const stmt = await this.dhaArtSectionService.getArtOutcomesPrimarySecondary(
        yearQuarterId,
        +facilityID,
      );

      stmt.forEach((element) => {
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
      description: `ART HCC Migration for ${year_quarter}`,
      'reporting-period': year_quarter,
      facilities: all_facilities,
    };
  }
}

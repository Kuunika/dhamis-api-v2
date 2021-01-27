import { Controller, Get, Param } from '@nestjs/common';
import { HivCareClinicService } from './hiv-care-clinic.service';

@Controller('hiv-care-clinic')
export class HivCareClinicController {
  constructor(private hivCareClinicService: HivCareClinicService) {}

  @Get(':yearQuarter/:ou')
  getArtOutcomesPrimarySecondary(
    @Param('yearQuarter') yearQuarterId: number,
    @Param('ou') ou: string,
  ) {
    return this.hivCareClinicService.getArtOutcomesPrimarySecondary(
      yearQuarterId,
      ou,
    );
  }
}

import { Module } from '@nestjs/common';
import { HivCareClinicController } from './hiv-care-clinic.controller';
import { HivCareClinicService } from './hiv-care-clinic.service';

@Module({
  controllers: [HivCareClinicController],
  providers: [HivCareClinicService]
})
export class HivCareClinicModule {

}

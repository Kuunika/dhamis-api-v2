import { Test, TestingModule } from '@nestjs/testing';
import { HivCareClinicService } from './hiv-care-clinic.service';

describe('HivCareClinicService', () => {
  let service: HivCareClinicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HivCareClinicService],
    }).compile();

    service = module.get<HivCareClinicService>(HivCareClinicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

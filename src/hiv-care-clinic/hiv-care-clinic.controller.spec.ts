import { Test, TestingModule } from '@nestjs/testing';
import { HivCareClinicController } from './hiv-care-clinic.controller';

describe('HivCareClinicController', () => {
  let controller: HivCareClinicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HivCareClinicController],
    }).compile();

    controller = module.get<HivCareClinicController>(HivCareClinicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FacilityReportController } from './facility-report.controller';

describe('HivCareClinicController', () => {
  let controller: FacilityReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FacilityReportController],
    }).compile();

    controller = module.get<FacilityReportController>(FacilityReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

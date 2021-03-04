import { Test, TestingModule } from '@nestjs/testing';
import { DhaArtSectionService } from '../dhamis/dha-art-section/dha-art-section.service';
import { facilityReportService } from './facility-report.service';
import { MockDhaArtSectionService } from './mocks/dha-art-section.mock.service';
import { FacilityService } from '../dhamis/facility/facility.service';
import { MockFacilityService } from './mocks/facility.mock.service';
import { FacilityReport } from '../common/enums/facility-report.enum';

describe('HivCareClinicService', () => {
  let service: facilityReportService;

  beforeAll(async () => {
    const dhaArtSectionServiceProvider = {
      provide: DhaArtSectionService,
      useClass: MockDhaArtSectionService,
    };
    const facilityServiceProvider = {
      provide: FacilityService,
      useClass: MockFacilityService,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        facilityReportService,
        dhaArtSectionServiceProvider,
        facilityServiceProvider,
      ],
    }).compile();

    service = module.get<facilityReportService>(facilityReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it.each([
    [
      FacilityReport.ART_OUTCOMES_PRIMARY_SECONDARY,
      'ART Primary Secondary Outcomes Migration for 91793',
    ],
    [FacilityReport.ART_CLINIC, 'ART Clinic Migration for 91793'],
    [FacilityReport.HIV_CARE_CLINIC, 'ART HCC Migration for 91793'],
  ])(
    'should return FacilityReportDto with correct description',
    async (facilityReport: FacilityReport, description: string) => {
      const result = await service.getDhaArtResults(91793, facilityReport);
      console.log(result);
      expect(result).toBeDefined();
      expect(result).not.toBeNull();
      expect(result.description).toMatch(description);
    },
  );
});

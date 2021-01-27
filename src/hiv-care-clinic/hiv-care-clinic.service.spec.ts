import { Test, TestingModule } from '@nestjs/testing';
import { NoResultsFoundException } from '../common/exceptions/no-results-found.exception';
import { DhaArtSectionService } from '../dhamis/dha-art-section/dha-art-section.service';
import { HivCareClinicService } from './hiv-care-clinic.service';
import { MoqDhaArtSectionService } from './mocks/dha-art-section.mock.service';
import { HivCareClinicDto } from '../common/dto/hiv-care-clinic.dto';

describe('HivCareClinicService', () => {
  let service: HivCareClinicService;
  let helper: DhaArtSectionService;

  beforeAll(async () => {
    const DhaArtSectionServiceProvider = {
      provide: DhaArtSectionService,
      useClass: MoqDhaArtSectionService,
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [HivCareClinicService, DhaArtSectionServiceProvider],
    }).compile();

    service = module.get<HivCareClinicService>(HivCareClinicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  //TODO: Implement
  /*
  it('should throw NoResultsFoundException', async () => {
    try {
      await service.getArtOutcomesPrimarySecondary(97876, 'morm,joejdo');
    } catch (error) {
      expect(error).toBeInstanceOf(NoResultsFoundException);
      console.log(error.message);
    }
  });
  */

  it('should return HccRegistration object when given correct', async () => {
    const result = await service.getArtOutcomesPrimarySecondary(97876, '21,32');
    expect(result).toBeDefined();
    expect(result).not.toBeNull();
    console.log(result);
  });
});

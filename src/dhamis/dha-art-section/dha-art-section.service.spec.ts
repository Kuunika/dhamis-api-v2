import { Test, TestingModule } from '@nestjs/testing';
import { DhaArtSectionService } from './dha-art-section.service';

describe('DhaArtSectionService', () => {
  let service: DhaArtSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DhaArtSectionService],
    }).compile();

    service = module.get<DhaArtSectionService>(DhaArtSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

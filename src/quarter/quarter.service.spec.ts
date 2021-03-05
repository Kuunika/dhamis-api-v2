import { Test, TestingModule } from '@nestjs/testing';
import { QuarterService } from './quarter.service';

describe('QuarterService', () => {
  let service: QuarterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuarterService],
    }).compile();

    service = module.get<QuarterService>(QuarterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { QuarterController } from './quarter.controller';

describe('QuarterController', () => {
  let controller: QuarterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuarterController],
    }).compile();

    controller = module.get<QuarterController>(QuarterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

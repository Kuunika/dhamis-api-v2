import { Test, TestingModule } from '@nestjs/testing';
import { QuartersController } from './quarter.controller';

describe('QuarterController', () => {
  let controller: QuartersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuartersController],
    }).compile();

    controller = module.get<QuartersController>(QuartersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

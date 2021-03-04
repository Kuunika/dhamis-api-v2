import { Module } from '@nestjs/common';
import { QuarterController } from './quarter.controller';
import { QuarterService } from './quarter.service';

@Module({
  controllers: [QuarterController],
  providers: [QuarterService]
})
export class QuarterModule {}

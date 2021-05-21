import { Module } from '@nestjs/common';
import { QuartersController } from './quarter.controller';
import { QuarterService } from './quarter.service';

@Module({
  controllers: [QuartersController],
  providers: [QuarterService],
})
export class QuarterModule { }

import { Controller, Get } from '@nestjs/common';
import { QuarterService } from './quarter.service';

@Controller('quarter')
export class QuarterController {
  constructor(private quarterServer: QuarterService) {}

  @Get()
  getALlQuarters() {
    return this.quarterServer.getAllAvailableQuarters();
  }
}

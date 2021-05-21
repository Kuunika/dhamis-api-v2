import { Controller, Get } from '@nestjs/common';
import { QuarterService } from './quarter.service';

@Controller('quarters')
export class QuartersController {
  constructor(private quarterServer: QuarterService) { }

  @Get()
  getALlQuarters() {
    return this.quarterServer.getAllAvailableQuarters();
  }
}

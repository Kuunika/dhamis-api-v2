import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class DhamisModule {
  static register(): DynamicModule {
    return {
      module: DhamisModule,
    };
  }
}

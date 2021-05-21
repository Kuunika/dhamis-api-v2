import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './common/helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('dhamis/api/v2');
  const server = await app.listen(env('PORT') ?? 3000);
  server.setTimeout(600_000);
}
bootstrap();

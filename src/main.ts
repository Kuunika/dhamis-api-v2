import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './common/helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const server = await app.listen(env('PORT') ?? 3000);
  server.setTimeout(25_000);
}
bootstrap();

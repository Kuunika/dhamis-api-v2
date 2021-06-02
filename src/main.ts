import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './common/helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('dhamis/v2/api');
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
  });
  const server = await app.listen(env('PORT') ?? 3000);
  server.setTimeout(600_000);
}
bootstrap();

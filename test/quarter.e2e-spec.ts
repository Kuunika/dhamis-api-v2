import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('QuarterController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/quarter (GET)', () => {
    return request(app.getHttpServer())
      .get('/quarter')
      .expect(200)
      .expect((res: request.Response) => {
        const { body } = res;
        expect(body).not.toBeNull();
      });
  });
});

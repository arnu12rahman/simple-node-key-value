import { NestFactory } from '@nestjs/core';
import { APP_NAME, APP_PORT } from './constants';
import { ValidationPipe } from '@nestjs/common';
import { SampleModule } from './sample.module';

async function bootstrap() {
  const app = await NestFactory.create(SampleModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(APP_PORT);

  console.log(`Running service of ${APP_NAME} on port: ${APP_PORT}`);
}
bootstrap();

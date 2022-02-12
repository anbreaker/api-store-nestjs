import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Ignore fields that are not inDTO
      forbidNonWhitelisted: true, // Alert fields that are not inDTO
    }),
  );

  await app.listen(3000);
}
bootstrap();

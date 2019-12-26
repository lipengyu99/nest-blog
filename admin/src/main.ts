import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await mongoose.connect('mongodb://localhost/nest-blog', { useNewUrlParser: true, useFindAndModify: false, dbName: "nest-blog",useCreateIndex :true});

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription(' API 描述')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  
  await app.listen(3000);
  console.log('http://127.0.0.1:3000')
}
bootstrap();

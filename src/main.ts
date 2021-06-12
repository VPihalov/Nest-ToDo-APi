import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  
  const config = new DocumentBuilder()
  .setTitle('Todo documentation')
  .setDescription('The Todo API description')
  .setVersion('1.0')
  .addTag('todo')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();

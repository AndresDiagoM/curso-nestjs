import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove properties that do not have decorators
      forbidNonWhitelisted: true, // throw an error if properties are not whitelisted
      transform: true // transform payloads to DTO instances
    })
  )
  await app.listen(3000)
}
bootstrap()

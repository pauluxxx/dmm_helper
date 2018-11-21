import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {join} from 'path';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useStaticAssets(join(__dirname, '../../client', 'dist'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');

    await app.listen(3005);
}
bootstrap();

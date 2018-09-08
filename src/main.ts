import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './app.module';
import * as path from "path";
declare const module: any;

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);
    app.useStaticAssets(path.resolve('dist', 'assets'));
    app.setBaseViewsDir(path.resolve('dist', 'views'));
    app.setViewEngine('hbs');
    await app.listen(3000);
    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();

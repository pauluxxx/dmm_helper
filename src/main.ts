import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import {join} from "path";
import * as path from "path";

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
    app.setBaseViewsDir(path.resolve('dist','views'));
      app.setViewEngine('hbs');
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

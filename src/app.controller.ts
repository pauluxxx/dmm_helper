import {Get, Controller, Render } from '@nestjs/common';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @Render('index.hbs')
    root() {
        return {m: this.appService.get()};
    }
}

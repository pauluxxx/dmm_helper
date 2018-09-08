import {Get, Controller, Render} from '@nestjs/common';
import {AppService} from './app.service';
import './assets/style.css';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @Render('index')
    root() {
        let data: any = {};
        data.m = 'message';
        data.styles = [
            {href:'./styles.css'}
        ];
        data.navs = [{'href':'/dashboard','text':'Dashboard'},{'href':'/history','text':'History'}];
        data.title = 'Dashoboard';
        data.text_about = 'put your data';
        data.btn_upload = 'Upload';
        data.btn_upload_url = '/put_cvs';
        return data;
    }
}

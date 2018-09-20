import {Get, Controller, Request, Response, Post} from '@nestjs/common';
import {AppService} from './app.service';
import {UseInterceptors, FileInterceptor, UploadedFile} from '@nestjs/common'
import {diskStorage} from 'multer'
import {extname} from 'path'

@Controller('api')
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Post('/process')
    processData(@Request() req): string {
        console.log(req.body.methods);
        return this.appService.root();
    }
    @Get('upload')
    root(@Request() req): string {
        console.log(req);
        return this.appService.root();
    }
    @Post('/upload2')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads'
            , filename: (req, file, cb) => {
                // Generating a 32 random chars long string
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                //Calling the callback passing the random name generated with the original extension name
                cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
    }))
    async upload(@UploadedFile() file) {
        console.log(file)
    }
}

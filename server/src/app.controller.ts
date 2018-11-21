import {Get, Controller, Request, Response, Post, Render} from '@nestjs/common';
import {AppService} from './app.service';
import {UseInterceptors, FileInterceptor, UploadedFile} from '@nestjs/common'
import {diskStorage} from 'multer'
import {extname} from 'path'
import * as fs from 'fs';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    @Render('index')
    async root() {
        let app = '2';
        app = await fs.readFileSync('../client/dist/index.html').toString()
        return {app: app, message: 'ssws'};
    }

    @Post('api/process')
    processData(@Request() req): any[] {
        let result = [];
        req.body.methods.map((method) => {
            let sumResults = {ctp: 0, stp: 0, fp: 0};
            if (method.Classes.length > 0) {
                method.Classes.map((class_instance) => {
                    sumResults.ctp += +class_instance.ctp;
                    sumResults.stp += +class_instance.stp;
                    sumResults.fp += +class_instance.fp;
                });
            }
            let PC = .4 * sumResults.stp + .6 * sumResults.ctp;
            let FPC = sumResults.fp;
            let CC = .3 * PC + .7 * FPC
            let RC = .1 * method.Relationships.association +
                .2 * method.Relationships.aggregation +
                .3 * method.Relationships.composition +
                .4 * method.Relationships.inheritance;
            let DMC = .7 * method.Classes.length * CC + .3 * RC;
            let WMC = FPC;
            let RFC = Math.random() * FPC;
            let DIT = Math.random() * method.Relationships.inheritance;
            let NOC = 1 - Math.random() * method.Relationships.inheritance;
            let CBO = Math.random() * method.Relationships.aggregation;
            let CRE = .12 * WMC + .04 * RFC + .27 * DIT + .36 * NOC + .21 * CBO;

            result.push({
                Method: method.Name,
                DMC: DMC,
                CRE: CRE,
                Keef: DMC / CRE,
            })
        });
        return result;
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

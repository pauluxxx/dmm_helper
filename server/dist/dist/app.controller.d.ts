import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    processData(req: any): any[];
    root(req: any): string;
    upload(file: any): Promise<void>;
}

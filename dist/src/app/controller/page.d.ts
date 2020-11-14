import { Context } from 'midway';
import { IApiService } from '../../interface';
export declare class Page {
    ctx: Context;
    service: IApiService;
    index(): Promise<void>;
    rss(): Promise<void>;
}
export declare class User {
    ctx: Context;
    index(): Promise<void>;
}

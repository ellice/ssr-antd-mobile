import { Context } from 'midway';
import { IApiService } from '../../interface';
export declare class Api {
    ctx: Context;
    service: IApiService;
    index(): Promise<void>;
    faqs(): Promise<void>;
}

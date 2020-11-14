import { Context } from 'midway';
import { IFaqService } from '../../interface';
export interface IDataResult {
}
export declare class Faqs {
    ctx: Context;
    service: IFaqService;
    index(): Promise<void>;
    detail(): Promise<void>;
}

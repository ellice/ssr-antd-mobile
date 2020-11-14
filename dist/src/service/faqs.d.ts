import { Context } from 'midway';
import { IFaqService, IDataResult } from '../interface';
export declare class FaqsService implements IFaqService {
    ctx: Context;
    getFaqList(): Promise<IDataResult>;
}

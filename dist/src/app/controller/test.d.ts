import { Context } from 'midway';
import { FaqsService } from '../../service/faqs';
export declare class Test {
    ctx: Context;
    faqsService: FaqsService;
    index(): Promise<void>;
}

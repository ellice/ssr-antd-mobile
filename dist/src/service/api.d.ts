import { IApiService, IApiResult } from '../interface';
export declare class ApiService implements IApiService {
    index(): Promise<IApiResult>;
}

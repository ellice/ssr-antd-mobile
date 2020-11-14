
export interface IApiResult {
  news: NewsItem[]
}

export interface IDataResult {
}

interface NewsItem {
  id: string,
  title: string
}
/**
 * @description Api-Service abstractions
 */
export interface IApiService {
  index (): Promise<IApiResult> 
}

export interface IFaqService {
  getFaqList ():Promise<IDataResult>
}
import { provide,Context, inject} from 'midway'
import { IFaqService, IDataResult } from '../interface'

@provide('FaqsService')
export class FaqsService implements IFaqService  {

    @inject()
    ctx:Context


    getFaqList() :Promise<IDataResult>{
        return Promise.resolve({
            data: [
              {
                id: '1',
                title: 'Racket v7.3 Release Notes1111',
                age:12
              },
              {
                id: '2',
                title: 'Racket v7.3 Release Notes1111',
                age:12
              }
            ]
          })
        
    }
}

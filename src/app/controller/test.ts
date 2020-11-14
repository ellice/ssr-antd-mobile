import { controller, get, provide, inject, Context } from 'midway'
import { FaqsService } from '../../service/faqs'

@provide()
@controller('/test')
export class Test {

  @inject()
  ctx: Context
  
  @inject()
  faqsService:FaqsService;
  
  @get('/')  
  async index () {
    try {
      // Page为webpack打包的chunkName，项目默认的entry为Page
      this.ctx.type = 'text/html'
      this.ctx.status = 200
      this.ctx.body = await this.faqsService.getFaqList()
    } catch (error) {
      this.ctx.logger.error(`Page Controller renderToStream Error`, error)
    }
  }

}

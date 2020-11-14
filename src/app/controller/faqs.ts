import { controller, provide, inject, Context } from 'midway'
import { IFaqService } from '../../interface'
import { Config } from 'ykfe-utils'
import renderToStream from 'ykfe-utils/lib/renderToStream'
import { strapiUrl } from '../../../config/config'


const ssrConfig: Config = require('./../../../config/config.ssr')

export interface IDataResult {
}

@provide()
@controller('/')
export class Faqs {

  @inject()
  ctx: Context

  @inject("FaqsService")
  service: IFaqService

  async index () {
    try {
      const page = this.ctx.query.page - 1;
      // const keyword = this.ctx.query.keyword;
      const start = page * 20;
      const offset = (page + 1) * 20;
      const url = `${strapiUrl}/faqs?_start=${start}&_limit=${offset}`;
      const result = await this.ctx.curl(url, {
        dataType: 'json',
        timeout: 3000,
      });

      this.ctx.type = 'text/html'
      this.ctx.status = 200
      this.ctx.faqService = result
      const config = Object.assign(this.ctx.app.config, ssrConfig)
      const stream = await renderToStream(this.ctx, config)
      this.ctx.body = stream
    } catch (error) {
      this.ctx.logger.error(`Page Controller renderToStream Error`, error)
    }
  }

  async detail (){
    try {
      const {id} = this.ctx.params;
      const url = `${strapiUrl}/faqs/${id}`;
      const result = await this.ctx.curl(url, {
        dataType: 'json',
        timeout: 3000,
      });

      this.ctx.type = 'text/html'
      this.ctx.status = 200
      this.ctx.dataset = result
      const config = Object.assign(this.ctx.app.config, ssrConfig)
      const stream = await renderToStream(this.ctx, config)
      this.ctx.body = stream
    } catch (error) {
      this.ctx.logger.error(`Page Controller renderToStream Error`, error)
    }
  }


  
}

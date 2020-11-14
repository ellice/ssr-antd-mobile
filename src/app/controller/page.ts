import { controller, get, provide, inject, Context } from 'midway'
import { Config } from 'ykfe-utils'
import renderToStream from 'ykfe-utils/lib/renderToStream'
import { IApiService } from '../../interface'
import {strapiUrl,baseUrl} from '../../../config/config'

const ssrConfig: Config = require('../../../config/config.ssr')

@provide()
@controller('/')
export class Page {

  @inject()
  ctx: Context

  @inject('ApiService')
  service: IApiService

  async index () {
    try {
      // Page为webpack打包的chunkName，项目默认的entry为Page
      this.ctx.type = 'text/html'
      this.ctx.status = 200
      this.ctx.apiService = this.service.index // 将service挂载到上下文对象
      const config = Object.assign(this.ctx.app.config, ssrConfig)
      const stream = await renderToStream(this.ctx, config)
      this.ctx.body = stream
    } catch (error) {
      this.ctx.logger.error(`Page Controller renderToStream Error`, error)
    }
  }

  async rss(){
    try {
      let {sn,page} = this.ctx.params;
      
      if(typeof page =='undefined'){
        page = 0
      }
      const start = page * 20;
      const offset = (page + 1) * 20;
      const url = `${strapiUrl}/rsses?_start=${start}&_limit=${offset}`;
      // console.log("xxxxx====>",this.ctx.params,url)
      const result = await this.ctx.curl(url, {
        dataType: 'json',
        timeout: 3000,
      });

      // console.log(typeof result);
      
      if(typeof result.data !== 'undefined'){
        console.log(result.data)
        // result.data.forEach((v,k,array) => {
          for(var _i = 0; _i < result.data.length; _i++){
            result.data[_i].url = baseUrl+"/s/"+sn
            if(typeof result.data[_i].images[0] != 'undefined'){
              result.data[_i].thumbnail = strapiUrl + result.data[_i].images[0].formats.thumbnail.url
            }
            
        };
      }

      
      // Page为webpack打包的chunkName，项目默认的entry为Page
      this.ctx.type = 'text/html'
      this.ctx.status = 200
      this.ctx.dataset = Object.assign(result,sn)
      const config = Object.assign(this.ctx.app.config, ssrConfig)
      const stream = await renderToStream(this.ctx, config)
      this.ctx.body = stream
    } catch (error) {
      this.ctx.logger.error(`Page Controller renderToStream Error`, error)
    }
  }

}

@provide()
@controller('/user')
export class User {

  @inject()
  ctx: Context

  @get('/')
  async index () {
    try {
      // Page为webpack打包的chunkName，项目默认的entry为Page
      this.ctx.type = 'text/html'
      this.ctx.status = 200
      this.ctx.body = 'hello user'
    } catch (error) {
      this.ctx.logger.error(`Page Controller renderToStream Error`, error)
    }
  }

}

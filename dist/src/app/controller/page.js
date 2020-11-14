"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Page = void 0;
const midway_1 = require("midway");
const renderToStream_1 = __importDefault(require("ykfe-utils/lib/renderToStream"));
const config_1 = require("../../../config/config");
const ssrConfig = require('../../../config/config.ssr');
let Page = class Page {
    async index() {
        try {
            // Page为webpack打包的chunkName，项目默认的entry为Page
            this.ctx.type = 'text/html';
            this.ctx.status = 200;
            this.ctx.apiService = this.service.index; // 将service挂载到上下文对象
            const config = Object.assign(this.ctx.app.config, ssrConfig);
            const stream = await renderToStream_1.default(this.ctx, config);
            this.ctx.body = stream;
        }
        catch (error) {
            this.ctx.logger.error(`Page Controller renderToStream Error`, error);
        }
    }
    async rss() {
        try {
            let { sn, page } = this.ctx.params;
            if (typeof page == 'undefined') {
                page = 0;
            }
            const start = page * 20;
            const offset = (page + 1) * 20;
            const url = `${config_1.strapiUrl}/rsses?_start=${start}&_limit=${offset}`;
            // console.log("xxxxx====>",this.ctx.params,url)
            const result = await this.ctx.curl(url, {
                dataType: 'json',
                timeout: 3000,
            });
            // console.log(typeof result);
            if (typeof result.data !== 'undefined') {
                console.log(result.data);
                // result.data.forEach((v,k,array) => {
                for (var _i = 0; _i < result.data.length; _i++) {
                    result.data[_i].url = config_1.baseUrl + "/s/" + sn;
                    if (typeof result.data[_i].images[0] != 'undefined') {
                        result.data[_i].thumbnail = config_1.strapiUrl + result.data[_i].images[0].formats.thumbnail.url;
                    }
                }
                ;
            }
            // Page为webpack打包的chunkName，项目默认的entry为Page
            this.ctx.type = 'text/html';
            this.ctx.status = 200;
            this.ctx.dataset = Object.assign(result, sn);
            const config = Object.assign(this.ctx.app.config, ssrConfig);
            const stream = await renderToStream_1.default(this.ctx, config);
            this.ctx.body = stream;
        }
        catch (error) {
            this.ctx.logger.error(`Page Controller renderToStream Error`, error);
        }
    }
};
__decorate([
    midway_1.inject(),
    __metadata("design:type", Object)
], Page.prototype, "ctx", void 0);
__decorate([
    midway_1.inject('ApiService'),
    __metadata("design:type", Object)
], Page.prototype, "service", void 0);
Page = __decorate([
    midway_1.provide(),
    midway_1.controller('/')
], Page);
exports.Page = Page;
let User = class User {
    async index() {
        try {
            // Page为webpack打包的chunkName，项目默认的entry为Page
            this.ctx.type = 'text/html';
            this.ctx.status = 200;
            this.ctx.body = 'hello user';
        }
        catch (error) {
            this.ctx.logger.error(`Page Controller renderToStream Error`, error);
        }
    }
};
__decorate([
    midway_1.inject(),
    __metadata("design:type", Object)
], User.prototype, "ctx", void 0);
__decorate([
    midway_1.get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], User.prototype, "index", null);
User = __decorate([
    midway_1.provide(),
    midway_1.controller('/user')
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlci9wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrRTtBQUVsRSxtRkFBMEQ7QUFFMUQsbURBQXdEO0FBRXhELE1BQU0sU0FBUyxHQUFXLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO0FBSS9ELElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7SUFRZixLQUFLLENBQUMsS0FBSztRQUNULElBQUk7WUFDRiwyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFBO1lBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQSxDQUFDLG1CQUFtQjtZQUM1RCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQTtZQUM1RCxNQUFNLE1BQU0sR0FBRyxNQUFNLHdCQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUE7U0FDdkI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNyRTtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsR0FBRztRQUNQLElBQUk7WUFDRixJQUFJLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBRWhD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
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
exports.Faqs = void 0;
const midway_1 = require("midway");
const renderToStream_1 = __importDefault(require("ykfe-utils/lib/renderToStream"));
const config_1 = require("../../../config/config");
const ssrConfig = require('./../../../config/config.ssr');
let Faqs = class Faqs {
    async index() {
        try {
            const page = this.ctx.query.page - 1;
            // const keyword = this.ctx.query.keyword;
            const start = page * 20;
            const offset = (page + 1) * 20;
            const url = `${config_1.strapiUrl}/faqs?_start=${start}&_limit=${offset}`;
            const result = await this.ctx.curl(url, {
                dataType: 'json',
                timeout: 3000,
            });
            this.ctx.type = 'text/html';
            this.ctx.status = 200;
            this.ctx.faqService = result;
            const config = Object.assign(this.ctx.app.config, ssrConfig);
            const stream = await renderToStream_1.default(this.ctx, config);
            this.ctx.body = stream;
        }
        catch (error) {
            this.ctx.logger.error(`Page Controller renderToStream Error`, error);
        }
    }
    async detail() {
        try {
            const { id } = this.ctx.params;
            const url = `${config_1.strapiUrl}/faqs/${id}`;
            const result = await this.ctx.curl(url, {
                dataType: 'json',
                timeout: 3000,
            });
            this.ctx.type = 'text/html';
            this.ctx.status = 200;
            this.ctx.dataset = result;
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
], Faqs.prototype, "ctx", void 0);
__decorate([
    midway_1.inject("FaqsService"),
    __metadata("design:type", Object)
], Faqs.prototype, "service", void 0);
Faqs = __decorate([
    midway_1.provide(),
    midway_1.controller('/')
], Faqs);
exports.Faqs = Faqs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlci9mYXFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE2RDtBQUc3RCxtRkFBMEQ7QUFDMUQsbURBQWtEO0FBR2xELE1BQU0sU0FBUyxHQUFXLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO0FBT2pFLElBQWEsSUFBSSxHQUFqQixNQUFhLElBQUk7SUFRZixLQUFLLENBQUMsS0FBSztRQUNULElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLDBDQUEwQztZQUMxQyxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUMvQixNQUFNLEdBQUcsR0FBRyxHQUFHLGtCQUFTLGdCQUFnQixLQUFLLFdBQVcsTUFBTSxFQUFFLENBQUM7WUFDakUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RDLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFBO1lBQzVCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQzVELE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQTtTQUN2QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3JFO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNO1FBQ1YsSUFBSTtZQUNGLE1BQU0sRUFBQyxFQUFFLEVBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUM3QixNQUFNLEdBQUcsR0FBRyxHQUFHLGtCQUFTLFNBQVMsRUFBRSxFQUFFLENBQUM7WUFDdEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RDLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixPQUFPLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFBO1lBQ3pCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFBO1lBQzVELE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQ3JELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQTtTQUN2QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3JFO0lBQ0gsQ0FBQztDQUlGLENBQUE7QUFsREM7SUFEQyxlQUFNLEVBQUU7O2lDQUNHO0FBR1o7SUFEQyxlQUFNLENBQUMsYUFBYSxDQUFDOztxQ0FDRjtBQU5ULElBQUk7SUFGaEIsZ0JBQU8sRUFBRTtJQUNULG1CQUFVLENBQUMsR0FBRyxDQUFDO0dBQ0gsSUFBSSxDQXFEaEI7QUFyRFksb0JBQUkifQ==
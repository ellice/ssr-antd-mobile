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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const midway_1 = require("midway");
const faqs_1 = require("../../service/faqs");
let Test = class Test {
    async index() {
        try {
            // Page为webpack打包的chunkName，项目默认的entry为Page
            this.ctx.type = 'text/html';
            this.ctx.status = 200;
            this.ctx.body = await this.faqsService.getFaqList();
        }
        catch (error) {
            this.ctx.logger.error(`Page Controller renderToStream Error`, error);
        }
    }
};
__decorate([
    midway_1.inject(),
    __metadata("design:type", Object)
], Test.prototype, "ctx", void 0);
__decorate([
    midway_1.inject(),
    __metadata("design:type", faqs_1.FaqsService)
], Test.prototype, "faqsService", void 0);
__decorate([
    midway_1.get('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Test.prototype, "index", null);
Test = __decorate([
    midway_1.provide(),
    midway_1.controller('/test')
], Test);
exports.Test = Test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29udHJvbGxlci90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrRTtBQUNsRSw2Q0FBZ0Q7QUFJaEQsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSTtJQVNmLEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSTtZQUNGLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUE7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUNwRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3JFO0lBQ0gsQ0FBQztDQUVGLENBQUE7QUFqQkM7SUFEQyxlQUFNLEVBQUU7O2lDQUNHO0FBR1o7SUFEQyxlQUFNLEVBQUU7OEJBQ0csa0JBQVc7eUNBQUM7QUFHeEI7SUFEQyxZQUFHLENBQUMsR0FBRyxDQUFDOzs7O2lDQVVSO0FBbEJVLElBQUk7SUFGaEIsZ0JBQU8sRUFBRTtJQUNULG1CQUFVLENBQUMsT0FBTyxDQUFDO0dBQ1AsSUFBSSxDQW9CaEI7QUFwQlksb0JBQUkifQ==
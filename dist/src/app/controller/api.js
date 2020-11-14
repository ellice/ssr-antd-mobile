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
exports.Api = void 0;
const midway_1 = require("midway");
let Api = class Api {
    async index() {
        try {
            // Page为webpack打包的chunkName，项目默认的entry为Page
            this.ctx.type = 'text/json';
            this.ctx.status = 200;
            this.ctx.body = await this.service.index();
        }
        catch (error) {
            this.ctx.logger.error(`Page Controller renderToStream Error`, error);
        }
    }
    async faqs() {
        try {
            this.ctx.type = 'text/json';
            this.ctx.status = 200;
            this.ctx.body = await this.service.index();
        }
        catch (error) {
            this.ctx.logger.error(`Page Controller renderToStream Error`, error);
        }
    }
};
__decorate([
    midway_1.inject(),
    __metadata("design:type", Object)
], Api.prototype, "ctx", void 0);
__decorate([
    midway_1.inject('ApiService'),
    __metadata("design:type", Object)
], Api.prototype, "service", void 0);
__decorate([
    midway_1.get('/getIndexData'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Api.prototype, "index", null);
__decorate([
    midway_1.get('/getfaqs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Api.prototype, "faqs", null);
Api = __decorate([
    midway_1.provide(),
    midway_1.controller('/api')
], Api);
exports.Api = Api;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwcC9jb250cm9sbGVyL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0U7QUFJbEUsSUFBYSxHQUFHLEdBQWhCLE1BQWEsR0FBRztJQU1kLEtBQUssQ0FBQyxLQUFLO1FBQ1QsSUFBSTtZQUNGLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUE7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUMzQztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1NBQ3JFO0lBQ0gsQ0FBQztJQUdELEtBQUssQ0FBQyxJQUFJO1FBQ1IsSUFBSTtZQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQTtZQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQzNDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDckU7SUFDSCxDQUFDO0NBRUYsQ0FBQTtBQTFCQztJQURDLGVBQU0sRUFBRTs7Z0NBQ0c7QUFFWjtJQURDLGVBQU0sQ0FBQyxZQUFZLENBQUM7O29DQUNEO0FBRXBCO0lBREMsWUFBRyxDQUFDLGVBQWUsQ0FBQzs7OztnQ0FVcEI7QUFHRDtJQURDLFlBQUcsQ0FBQyxVQUFVLENBQUM7Ozs7K0JBU2Y7QUExQlUsR0FBRztJQUZmLGdCQUFPLEVBQUU7SUFDVCxtQkFBVSxDQUFDLE1BQU0sQ0FBQztHQUNOLEdBQUcsQ0E0QmY7QUE1Qlksa0JBQUcifQ==
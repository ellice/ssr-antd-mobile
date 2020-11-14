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
exports.FaqsService = void 0;
const midway_1 = require("midway");
let FaqsService = class FaqsService {
    getFaqList() {
        return Promise.resolve({
            data: [
                {
                    id: '1',
                    title: 'Racket v7.3 Release Notes1111',
                    age: 12
                },
                {
                    id: '2',
                    title: 'Racket v7.3 Release Notes1111',
                    age: 12
                }
            ]
        });
    }
};
__decorate([
    midway_1.inject(),
    __metadata("design:type", Object)
], FaqsService.prototype, "ctx", void 0);
FaqsService = __decorate([
    midway_1.provide('FaqsService')
], FaqsService);
exports.FaqsService = FaqsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFxcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZXJ2aWNlL2ZhcXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQStDO0FBSS9DLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFNcEIsVUFBVTtRQUNOLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNuQixJQUFJLEVBQUU7Z0JBQ0o7b0JBQ0UsRUFBRSxFQUFFLEdBQUc7b0JBQ1AsS0FBSyxFQUFFLCtCQUErQjtvQkFDdEMsR0FBRyxFQUFDLEVBQUU7aUJBQ1A7Z0JBQ0Q7b0JBQ0UsRUFBRSxFQUFFLEdBQUc7b0JBQ1AsS0FBSyxFQUFFLCtCQUErQjtvQkFDdEMsR0FBRyxFQUFDLEVBQUU7aUJBQ1A7YUFDRjtTQUNGLENBQUMsQ0FBQTtJQUVSLENBQUM7Q0FDSixDQUFBO0FBcEJHO0lBREMsZUFBTSxFQUFFOzt3Q0FDRTtBQUhGLFdBQVc7SUFEdkIsZ0JBQU8sQ0FBQyxhQUFhLENBQUM7R0FDVixXQUFXLENBdUJ2QjtBQXZCWSxrQ0FBVyJ9
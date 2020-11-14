"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const midway_1 = require("midway");
let ApiService = class ApiService {
    index() {
        return Promise.resolve({
            news: [
                {
                    id: '1',
                    title: 'Racket v7.3 Release Notes1111'
                },
                {
                    id: '2',
                    title: 'Free Dropbox Accounts Now Only Sync to Three Devices'
                },
                {
                    id: '3',
                    title: 'Voynich Manuscript Decoded by Bristol Academic'
                },
                {
                    id: '4',
                    title: 'Burger King to Deliver Whoppers to LA Drivers Stuck in Traffic'
                },
                {
                    id: '5',
                    title: 'How much do YouTube celebrities charge to advertise your product? '
                }
            ]
        });
    }
};
ApiService = __decorate([
    midway_1.provide('ApiService')
], ApiService);
exports.ApiService = ApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2UvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG1DQUFnQztBQUloQyxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0lBRXJCLEtBQUs7UUFDSCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDckIsSUFBSSxFQUFFO2dCQUNKO29CQUNFLEVBQUUsRUFBRSxHQUFHO29CQUNQLEtBQUssRUFBRSwrQkFBK0I7aUJBQ3ZDO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxHQUFHO29CQUNQLEtBQUssRUFBRSxzREFBc0Q7aUJBQzlEO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxHQUFHO29CQUNQLEtBQUssRUFBRSxnREFBZ0Q7aUJBQ3hEO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxHQUFHO29CQUNQLEtBQUssRUFBRSxnRUFBZ0U7aUJBQ3hFO2dCQUNEO29CQUNFLEVBQUUsRUFBRSxHQUFHO29CQUNQLEtBQUssRUFBRSxvRUFBb0U7aUJBQzVFO2FBQ0Y7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQTVCWSxVQUFVO0lBRHRCLGdCQUFPLENBQUMsWUFBWSxDQUFDO0dBQ1QsVUFBVSxDQTRCdEI7QUE1QlksZ0NBQVUifQ==
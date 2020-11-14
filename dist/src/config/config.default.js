"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.default = (appInfo) => {
    const config = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1570684373953_5206';
    // add your config here
    config.middleware = [];
    config.static = {
        dir: [path.join(appInfo.appDir, '/output'), path.join(appInfo.appDir, '/src/app/public')],
        prefix: '/'
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBSzVCLGtCQUFlLENBQUMsT0FBcUIsRUFBRSxFQUFFO0lBQ3ZDLE1BQU0sTUFBTSxHQUFHLEVBQW1CLENBQUE7SUFFbEMsdUVBQXVFO0lBQ3ZFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQTtJQUVsRCx1QkFBdUI7SUFDdkIsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUVuQixDQUFBO0lBQ0QsTUFBTSxDQUFDLE1BQU0sR0FBRztRQUNkLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUN6RixNQUFNLEVBQUUsR0FBRztLQUNaLENBQUE7SUFDRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMsQ0FBQSJ9
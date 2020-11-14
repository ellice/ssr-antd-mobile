"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxy = exports.development = void 0;
exports.development = {
    watchDirs: [
        'app',
        'lib',
        'service',
        'config',
        'app.ts',
        'agent.ts',
        'interface.ts'
    ],
    overrideDefault: true
};
exports.proxy = {
    host: 'http://127.0.0.1:8000',
    match: /(\/static)|(\/sockjs-node)|(\/__webpack_dev_server__)|hot-update/
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmxvY2FsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbmZpZy9jb25maWcubG9jYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxXQUFXLEdBQUc7SUFDekIsU0FBUyxFQUFFO1FBQ1QsS0FBSztRQUNMLEtBQUs7UUFDTCxTQUFTO1FBQ1QsUUFBUTtRQUNSLFFBQVE7UUFDUixVQUFVO1FBQ1YsY0FBYztLQUNmO0lBQ0QsZUFBZSxFQUFFLElBQUk7Q0FDdEIsQ0FBQTtBQUVZLFFBQUEsS0FBSyxHQUFHO0lBQ25CLElBQUksRUFBRSx1QkFBdUI7SUFDN0IsS0FBSyxFQUFFLGtFQUFrRTtDQUMxRSxDQUFBIn0=
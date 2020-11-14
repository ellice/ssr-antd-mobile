import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';
export declare type DefaultConfig = PowerPartial<EggAppConfig>;
interface MyEggAppInfo extends EggAppInfo {
    appDir?: string;
}
declare const _default: (appInfo: MyEggAppInfo) => PowerPartial<EggAppConfig>;
export default _default;

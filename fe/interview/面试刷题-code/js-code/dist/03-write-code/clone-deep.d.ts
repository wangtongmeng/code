/**
 * @description 深拷贝
 * @author 双越老师
 */
/**
 * 深拷贝
 * @param obj obj
 * @param map weakmap 为了避免循环引用
 */
export declare function cloneDeep(obj: any, map?: WeakMap<object, any>): any;

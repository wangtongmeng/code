/**
 * @description LRU cache
 * @author 双越老师
 */
export default class LRUCache {
    private length;
    private data;
    constructor(length: number);
    set(key: any, value: any): void;
    get(key: any): any;
}

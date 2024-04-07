/**
 * @description LRU 缓存 - 不使用 Map
 * @author 双越老师
 */
export default class LRUCache {
    private length;
    private data;
    private dataLength;
    private listHead;
    private listTail;
    constructor(length: number);
    private moveToTail;
    private tryClean;
    get(key: string): any;
    set(key: string, value: any): void;
}

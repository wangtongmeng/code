/**
 * @description Event Bus
 * @author 双越老师
 */
export default class EventBus {
    /**
     * {
     *    'key1': [
     *        { fn: fn1, isOnce: false },
     *        { fn: fn2, isOnce: false },
     *        { fn: fn3, isOnce: true },
     *    ]
     *    'key2': [] // 有序
     *    'key3': []
     * }
     */
    private events;
    constructor();
    on(type: string, fn: Function, isOnce?: boolean): void;
    once(type: string, fn: Function): void;
    off(type: string, fn?: Function): void;
    emit(type: string, ...args: any[]): void;
}

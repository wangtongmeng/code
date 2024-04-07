/**
 * @description Event Bus - 拆分保存 on 和 once 事件
 * @author 双越老师
 */
export default class EventBus2 {
    private events;
    private onceEvents;
    constructor();
    on(type: string, fn: Function): void;
    once(type: string, fn: Function): void;
    off(type: string, fn?: Function): void;
    emit(type: string, ...args: any[]): void;
}

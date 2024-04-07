/**
 * @description lazy man
 * @author 双越老师
 */
declare class LazyMan {
    private name;
    private tasks;
    constructor(name: string);
    private next;
    eat(food: string): this;
    sleep(seconds: number): this;
}
declare const me: LazyMan;

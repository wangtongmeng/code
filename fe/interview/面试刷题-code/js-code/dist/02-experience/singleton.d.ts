/**
 * @description 单例模式
 * @author 双越老师
 */
declare class SingleTon {
    private static instance;
    private constructor();
    static getInstance(): SingleTon;
    fn1(): void;
    fn2(): void;
}
declare const s: SingleTon;
declare const s1: SingleTon;
declare const s2: SingleTon;

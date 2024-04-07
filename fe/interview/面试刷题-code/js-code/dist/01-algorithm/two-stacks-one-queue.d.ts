/**
 * @description 两个栈 - 一个队列
 * @author 双越老师
 */
export declare class MyQueue {
    private stack1;
    private stack2;
    /**
     * 入队
     * @param n n
     */
    add(n: number): void;
    /**
     * 出队
     */
    delete(): number | null;
    get length(): number;
}

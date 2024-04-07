/**
 * @description 用链表实现队列
 * @author 双越老师
 */
export declare class MyQueue {
    private head;
    private tail;
    private len;
    /**
     * 入队，在 tail 位置
     * @param n number
     */
    add(n: number): void;
    /**
     * 出队，在 head 位置
     */
    delete(): number | null;
    get length(): number;
}

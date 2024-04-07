/**
 * @description 反转单向链表
 * @author 双越老师
 */
export interface ILinkListNode {
    value: number;
    next?: ILinkListNode;
}
/**
 * 反转单向链表，并返回反转之后的 head node
 * @param listNode list head node
 */
export declare function reverseLinkList(listNode: ILinkListNode): ILinkListNode;
/**
 * 根据数组创建单向链表
 * @param arr number arr
 */
export declare function createLinkList(arr: number[]): ILinkListNode;

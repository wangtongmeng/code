/**
 * @description 连续字符
 * @author 双越老师
 */
interface IRes {
    char: string;
    length: number;
}
/**
 * 求连续最多的字符和次数（嵌套循环）
 * @param str str
 */
export declare function findContinuousChar1(str: string): IRes;
/**
 * 求连续最多的字符和次数（双指针）
 * @param str str
 */
export declare function findContinuousChar2(str: string): IRes;
export {};

/**
 * @description 遍历 DOM tree
 * @author 双越老师
 */
/**
 * 访问节点
 * @param n node
 */
declare function visitNode(n: Node): void;
/**
 * 深度优先遍历
 * @param root dom node
 */
declare function depthFirstTraverse1(root: Node): void;
/**
 * 深度优先遍历
 * @param root dom node
 */
declare function depthFirstTraverse2(root: Node): void;
/**
 * 广度优先遍历
 * @param root dom node
 */
declare function breadthFirstTraverse(root: Node): void;
declare const box: HTMLElement | null;

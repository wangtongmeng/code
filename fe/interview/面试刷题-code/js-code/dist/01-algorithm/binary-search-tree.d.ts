/**
 * @description 二叉搜索树
 * @author 双越老师
 */
export interface ITreeNode {
    value: number;
    left: ITreeNode | null;
    right: ITreeNode | null;
}
/**
 * 寻找 BST 里的第 K 小值
 * @param node tree node
 * @param k 第几个值
 */
export declare function getKthValue(node: ITreeNode, k: number): number | null;

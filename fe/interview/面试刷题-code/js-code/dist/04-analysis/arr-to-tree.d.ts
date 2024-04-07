/**
 * @description array to tree
 * @author 双越老师
 */
interface IArrayItem {
    id: number;
    name: string;
    parentId: number;
}
interface ITreeNode {
    id: number;
    name: string;
    children?: ITreeNode[];
}
declare function convert(arr: IArrayItem[]): ITreeNode | null;
declare const arr: {
    id: number;
    name: string;
    parentId: number;
}[];
declare const tree: ITreeNode | null;

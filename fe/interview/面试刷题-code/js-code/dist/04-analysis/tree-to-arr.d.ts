/**
 * @description tree to arr
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
declare function convert1(root: ITreeNode): IArrayItem[];
declare const obj: {
    id: number;
    name: string;
    children: {
        id: number;
        name: string;
        children: {
            id: number;
            name: string;
        }[];
    }[];
};
declare const arr1: IArrayItem[];

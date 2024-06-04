// 联合类型（并集） 交叉类型（交集）
// 交叉类型 同时是两个类型的子类型，最终的值可以赋予给任何的类型

interface Person1 {
  handsome: string;
}
interface Person2 {
  high: string;
}
let person: Person1 | Person2 = {
  handsome: "男", // 满足类型中的一个即可，或的关系
};
// 交叉类型 同时是两个类型的子类型，最终的结果可以赋予给任何的父类型
let person1: Person1 & Person2 = {
  handsome: "男",
  high: "高",
};
// 子类型可以赋予给父类型（子类型的结构要包含父类型的结构）
let person2: Person1 = person1;
let person3: Person2 = person1;

// 如果两个类型不相同没有交集 & 后的结果是 never

// 快速扩展属性
let obj = { name: "lisi", age: 1 };
let obj1: { name: string; age: number; address: string } = obj as typeof obj & {
  address: string;
};

export {};

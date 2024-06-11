// 之前学过的内置类型 Exclude Extract NonNullable，infer相关的 ReturnType Paramters InstanceType... 这些都是基于集合、条件来操作的

// 基于对象操作(映射类型)的内置类型 见9.基于对象类型.ts 这里继续补充

// Pick 挑选 Omit 去掉某些属性 (和 Exclude Extract 的区别，这两个更偏向集合的操作)
// Pick Omit 是对象的结构操作

type Person = {
  name: string;
  age: number;
};

type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type PickPerson = Pick<Person, "name" | "age">;
// {
//   name: string;
//   age: number;
// }
type anyType = keyof any; //  string | number | symbol
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type OmitPerson = Omit<Person, "name">;
// {
//   age: number;
// }

//  Record -> 取代 object 的
// T extends object -> Record<string, any>
let obj: Record<string, any> = { name: "lisi", age: 18 };
function map<K extends string, V, R>(
  obj: Record<K, V>,
  callback: (item: V, key: K) => R
) {
  let result = {} as Record<K, R>;
  for (let key in obj) {
    result[key] = callback(obj[key], key);
  }
  return result;
}

// 1) 根据传入的值进行类型推导 name 和 age 会赋予给K ，对象的值的字面量类型会赋值给V
// 2) 拿到 callback 的返回值 R 会根据其返回值来推导出 string (string | number + string = string)
// 3) 映射成一个新的 record 这个新的record 由 K 和 R 组成
map({ name: "lisi", age: 18 }, (item, key) => {
  return item + key;
});
export {};

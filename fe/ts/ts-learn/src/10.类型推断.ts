// 类型推断 inference infer 推断
// infer关键字 只能在条件类型中，用来提取类型的某一部分的类型，放在不同的位置，就可以帮我们取不同位置的类型
// infer就是推导条件中的某个部分
// 获取函数的返回值类型
function getUser(name: string, age: number) {
  return { name, age, address: {} };
}
type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;
type T1 = ReturnType<typeof getUser>;
// {
//   name: string;
//   age: number;
//   address: {};
// }

// 获取函数的参数类型
type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
type T2 = Parameters<typeof getUser>; // [name: string, age: number]

// 获取类的实例类型
class Person {
  constructor() {
    return { a: 1, b: 2 };
  }
}
type InstanceType<T extends new (...args: any[]) => any> = T extends {
  new (...args: any[]): infer I;
}
  ? I
  : never;
type T3 = InstanceType<typeof Person>;
type T4 = Person;
type ConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;
type T5 = ConstructorParameters<typeof Person>;

// 变化字面量类型的位置
type TailToHead<T extends any[]> = T extends [...infer B, infer C]
  ? [C, ...B]
  : any;
type x = TailToHead<["lisi", 1, 2, 3, "中国"]>; // ["中国", "lisi", 1, 2, 3]

// 将元组转换成联合类型
type ElementOf<T> = T extends Array<infer R> ? R : any;
type TupleToUnion = ElementOf<[string, number, boolean]>; // string | number | boolean

let r: Promise<number> = new Promise((resolve) => {
  resolve(123);
});

r.then((data) => {}); // data的类型 number

// 通过递归渠道Promise的返回值
type PromiseV<T> = T extends Promise<infer V> ? PromiseV<V> : T;
type PromiseReturnValue = PromiseV<Promise<Promise<Promise<number>>>>; // number

export {};

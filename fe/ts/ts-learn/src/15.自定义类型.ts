// 自己实现一些常见的类型
// 内置类型
//  基于条件类型的 Extract Exclude 集合类型
//  基于映射的类型 Partial Required Readonly 修饰
//  基于结构的类型 Pick Omit Record 结构处理
//  基于推断infer的类型 InstanceType ReturnType Parameters...  infer 模式匹配类型

type T1 = {
  name: string;
  age: number;
  address: string;
};
type T2 = {
  name: string;
  gender: number;
  address: number;
};

// 1.将类型类型的属性某个属性编程可选
type Compute<T extends object> = {
  [K in keyof T]: T[K];
};
type PartialPropsOptional<T extends object, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;
type PPO = Compute<PartialPropsOptional<T1, "name" | "address">>;
// {
//   age: number;
//   name?: string | undefined;
//   address?: string | undefined;
// }

// 2.期望去T1中取出值是string的类型
type isEqual<T, K, S, F> = T & {} extends K ? (K & {} extends T ? S : F) : F;

type ExtractKeysByValue<T extends object, U> = {
  [K in keyof T]: isEqual<T[K], U, K, never>;
}[keyof T]; // keyof 取出来的是联合类型
type PickKeysByValue<T extends object, K> = Pick<T, ExtractKeysByValue<T, K>>;
type ReturnPickKeysByValue = PickKeysByValue<T1, string>;
// {
//   name: string;
//   address: string;
// }

// 3.排除掉值为string的类型
type isEqual1<T, K, S, F> = T & {} extends K ? (K & {} extends T ? S : F) : F;

type ExtractKeysByValue1<T extends object, U> = {
  [K in keyof T]: isEqual1<T[K], U, K, never>;
}[keyof T]; // keyof 取出来的是联合类型
// 增加一个参数 O
type PickKeysByValue1<T extends object, K, O = true> = isEqual1<
  O,
  true,
  Omit<T, ExtractKeysByValue1<T, K>>,
  Pick<T, ExtractKeysByValue1<T, K>>
>;
type ReturnPickKeysByValue1 = PickKeysByValue1<T1, string, true>;

// 4. 简化
type isEqual2<T, K, S, F> = T & {} extends K ? (K & {} extends T ? S : F) : F;

type ExtractKeysByValue2<T extends object, U> = {
  [K in keyof T as isEqual2<T[K], U, K, never>]: T[K]; // 重映射
};
type ReturnPickKeysByValue2 = ExtractKeysByValue2<T1, string>;
export {};

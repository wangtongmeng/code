// 除了基于条件类型外，我们还有基于对象类型的
interface Person1 {
  handsome: string;
}
interface Person2 {
  high: string;
}
type Person3 = Person1 & Person2; // Person1 & Person2
// 显示出交集的所有类型
type Compute<T extends object> = {
  [x in keyof T]: T[x];
};
type Person4 = Compute<Person3>; // { handsome: string; high: string; }

// keyof 一些类型的结果
type Keys1 = keyof any; // string | number | symbol 使用场景比较多
type Keys2 = keyof unknown; // never

// 内置属性 partial required pick omit...
interface IPerson {
  name: string;
  age: number;
}
interface ICompany {
  name: string;
  age: number;
  address: string;
  person: IPerson;
}
type Partial<T> = {
  [x in keyof T]?: T[x];
};
type PartialRes = Partial<ICompany>;
// {
//   name?: string | undefined;
//   age?: number | undefined;
//   address?: string | undefined;
//   person?: IPerson | undefined;
// }
// 如果你想让name必填，可以组合使用
type PartialRes1 = Compute<Partial<ICompany> & { name: string }>;
// {
//   name: string;
//   age?: number | undefined;
//   address?: string | undefined;
//   person?: IPerson | undefined;
// }

// 实现一个深度递归的 Partial
type DeepPartial<T> = {
  [key in keyof T]?: T[key] extends object ? DeepPartial<T[key]> : T[key];
};
type DeepPartailRes = DeepPartial<ICompany>;
// {
//   name?: string | undefined;
//   age?: number | undefined;
//   address?: string | undefined;
//   person?: DeepPartial<IPerson> | undefined;
// }
let company: DeepPartailRes = {
  person: {}, // 这样可以支持{}的情况了
};

// 同理 Required
type Required<T> = {
  [x in keyof T]-?: T[x];
};
type DeepRequired<T> = {
  [key in keyof T]-?: T[key] extends object ? DeepRequired<T[key]> : T[key];
};
type DeepRequiredRes = DeepRequired<ICompany>;
let company1: DeepRequiredRes = {
  name: "x",
  age: 1,
  address: "x",
  person: {
    name: "x",
    age: 1,
  },
};
export {};

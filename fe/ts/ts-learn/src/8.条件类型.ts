// 条件类型 if / else 三元表达式 （extends 左边 和 右边的关系）
// 子类型 extends 父类 = true
type StatusCode<T> = T extends 200 | 201 | 204 | 304 ? "success" : "fail";
type IReturnMessage = StatusCode<200>;

// 类型级别 1)根据结构的角度来分析 2) 从类型角度来进行分析

// never 是任何类型的子类型
// 字面量类型
// 基础类型
// 包装类型
// any unknown

type T1 = never extends "str" ? true : false; // true
type T2 = "str" extends string ? true : false; // true
type T3 = string extends String ? true : false; // true
type T4 = string extends {} ? true : false; // false
type T5 = string extends any ? true : false; // true
type T6 = string extends unknown ? true : false; // true
type T7 = any extends unknown ? true : false; // true
type T8 = unknown extends any ? true : false; // true
// {} object Object，{} 和 object 可以看成字面量类型
// {} object 可以看成结构和类型两部分
type Temp1 = {} extends object ? true : false; // true
type Temp2 = object extends {} ? true : false; // true
type Temp3 = object extends Object ? true : false; // true 从类型的角度
type Temp4 = Object extends object ? true : false; // true  因为从结构的角度
type Temp5 = Object extends {} ? true : false; // true

// any 自带分发的机制
// never 如果通过泛型传入，此时只会返回 never
type T9 = any extends 1 ? true : false; // boolean (条件类型 是有分发机制的) 1 + 除了1的部分 true | false
type T10<T> = T extends 1 ? true : false;
type T11 = T10<never>; // never

// 通过条件类型 来进行类型的区分，条件语句也可以实现约束的效果
interface Fish {
  name: "鱼";
}
interface Bird {
  name: "鸟";
}
interface Water {
  name: "水";
}
interface Sky {
  name: "天空";
}
type GetType<T extends Fish | Bird> = T extends Fish ? Water : Sky;
// 分发导致的问题：什么时候会分发
// 1.联合类型通过泛型传递
// 2.且比较（extends）时会产生分歧
// 3.且类型需要是裸类型，T是裸的，没有其他搭配 [T] 不是裸的

type A1 = GetType<Fish | Bird>; // Water | Sky
// Fish | Bird 通过泛型传递给 Fish | Bird extends Fish ? Water : Sky 时 相当于
// 1. Fish extends Fish ? Water : Sky 结果是 Water
// 2. Bird extends Fish ? Water : Sky 结果是 Sky
// 3. 他们的结果的联合类型 是 Water | Sky

// T & {} 解决分发问题
type GetType1<T extends Fish | Bird> = T & {} extends Fish ? Water : Sky;
type A2 = GetType1<Fish | Bird>; // Sky

type UnionAssets<T, K> = T extends K ? true : false;
type U1 = UnionAssets<1 | 2, 1 | 2 | 3>; // true 分发机制 两个 true 是 true
type U2 = UnionAssets<1 | 2 | 3, 1 | 2>; // boolean 分发机制 两个true一个false 是 boolean
// 解决分发机制
// 分发机制有的需要有的不需要，看场景
type NoDistribute<T> = T & {};
type UnionAssets1<T, K> = NoDistribute<T> extends K ? true : false;
type U11 = UnionAssets1<1 | 2, 1 | 2 | 3>; // true
type U22 = UnionAssets1<1 | 2 | 3, 1 | 2>; // false

// 判断两个类型是否一致
type isEqual<T, K, S, F> = NoDistribute<T> extends K
  ? NoDistribute<K> extends T
    ? S
    : F
  : F;
type A3 = isEqual<1 | 2, 1 | 2, true, false>; // true

// 根据参数确定返回值
type FormatVal<T> = T extends string
  ? string
  : T extends number
  ? number
  : never;
function sum<T extends string | number>(a: T, b: T): FormatVal<T> {
  return a + (b as any);
}
let r = sum(1, 2); // number

// 内置类型中 有很多类型是基于条件类型的
// Extract Exclude NonNullable...
type Extract<T, U> = T extends U ? T : never;
type ExtractRes = Extract<1 | 2 | 3 | 4, 1 | 2>; //  1 | 2
type Exclude<T, U> = T extends U ? never : T;
type ExcludeRes = Exclude<1 | 2 | 3 | 4, 1 | 2>; //  3 | 4

const ele = document.getElementById("app");
// type NonNullable<T> = T extends null | undefined ? never : T;
type NonNullable<T> = T & {}; // T 和 {} 的交集，如果是 null 或 undefined 就是 never
type Ele = NonNullable<typeof ele>; // HTMLElement
type xxx = NonNullable<undefined>; // never
export {};

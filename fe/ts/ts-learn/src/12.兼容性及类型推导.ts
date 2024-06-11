// 类型兼容性
// ts兼容性分成两种 1. 类型层级 子 extends 父 2.从结构来考虑

let str: string = "a"; // 类型层级
let obj!: { toString(): string };
obj = str; // 结构考虑
// 考虑安全性，安全就能赋值
console.log(obj.toString());

// 函数的兼容性（参数和返回值的兼容性）
// 函数的兼容性，少的可以赋值给多的，参数少的是子类型;返回值同理，实际的类型也得是子类型
let sum1 = (a: number, b: number) => a + b;
let sum2 = (a: number) => a;
type Sum1 = typeof sum1;
type Sum2 = typeof sum2;
type X = Sum2 extends Sum1 ? true : false; // true

// 类的兼容性 比较的是实例
class A {}
class B {}
const b: B = new A();
// 如果类中的属性有private或protected，则两个值不能互相赋值
class A1 {
  private a = 1;
}
class B1 {
  private a = 1;
}
// const b1: B1 = new A1(); ts报错

// ts 把这种结构化类型，叫做标称类型
// 我们希望给相同结构的类型做区分
type withType<T, K> = T & [K];
type BTC = withType<number, "BTC">;
type USDT = withType<number, "USDT">;
const c1 = 100 as BTC;
const c2 = 100 as USDT;
function money(val: BTC) {}
money(c1);
// money(c2) // ts报错

// 逆变(在函数参数可以标记儿子传父亲)
// 协变(可以标记父亲返回儿子)

class Parent {
  car() {}
}
class Child extends Parent {
  house() {}
}
class Grandson extends Child {
  sleep() {}
}
// 从安全性考虑
// 1) 内部调用函数时，可以传递 Child 和 Grandson，但在使用属性时，只能认为最多是Child
// 2) 函数的返回值，需要返回子类，因为内部代码在访问属性时要保证访问到
function fn(callback: (ctr: Child) => Child) {
  let r = callback(new Grandson()); // 这里new 的 Grandson，能保证一定有Child上的方法
  r.house();
}
fn((child: Parent): Grandson => {
  return new Grandson();
});

// 基于函数参数的逆变
type Arg<T> = (arg: T) => void;
type ArgReturn = Arg<Parent> extends Arg<Child> ? true : false; // true 正常 Child extends Parent 是true，通过函数参数反过来了

// 返回值是协变的
type Return<T> = (arg: any) => T;
type ReturnReturn = Return<Grandson> extends Return<Child> ? true : false; // true

// 逆变带来的问题（我们写业务时，还是正常开启逆变）
interface MyArray<T> {
  // concat: (...args: T[]) => T[]
  concat(...args: T[]): T[]; // 这种写法不进行逆变检测，所有在描述对象中的方式全部采用这种方式
}
// 将 child 赋予给 parent 将 父返回儿子
let parentArr!: MyArray<Parent>;
let childArr!: MyArray<Child>;

parentArr = childArr;

// 枚举的兼容性，两个枚举之间不能兼容
enum E1 {}
enum E2 {}
let e1!: E1;
let e2!: E2;
// e2 = e1 // ts 报错

// 泛型兼容性，如果生成的结果一致 类型就兼容
type II<T> = { name?: T };
type X1 = II<string> extends II<string> ? true : false; // 生成的结构一致即可

// 对象的兼容性，多的属性可以赋值给少的
// 类型层级兼容性，never -> 字面量 -> 基础类型 -> 包装类型 -> any / unknown

// 子 extends 父，满足即可赋值

// 类型推导
// 1) 赋值推断，根据赋予的值推断类型(右->左)
let name = "lisi"; // string
// 2) 函数(左->右)
const sum: (a: string) => string = (a) => a;

// 3) 函数返回值为void，表示不关心返回值
function forEach1(arr: number[], callback: () => void) {
  callback();
}
forEach1([1, 2, 3], function () {
  return [];
});
export {};

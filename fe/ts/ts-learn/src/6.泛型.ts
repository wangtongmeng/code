// 泛型可以用于 函数、接口、类、type
// 使用时无法确定当时的类型，可以采用泛型来定义
// 泛型的使用场景 函数（参数、返回值）  对象（坑位） 类、泛型的默认值和约束

const createArr = <T>(times: number, val: T): T[] => {
  return Array.from({ length: times }).fill(val) as T[];
  // let arr = [];
  // for (let i = 0; i < times; i++) {
  //   arr.push(val);
  // }
  // return arr; // 这里的返回值通过类型推到能得到是T[]
};
function createArr1<T>(times: number, val: T) {}
createArr(3, 1);

// 写辅助函数时可以写 多个泛型用于保存值
// 值得交换
function swap<T, K>(tuple: [T, K]): [K, T] {
  return [tuple[1], tuple[0]];
}
swap([0, 1]);

// const forEach = <T>(arr: T[], callback: (val: T) => void) => {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
// };
// forEach(["A", 2, 3], function (val) {
//   console.log(val);
// });

// IForEach<T> 表示使用接口的时候确定类型
// <T>():void 在使用这个函数时传入类型
// interface IForEach {
//   <T>(arr: T[], callback: (val: T) => void): void;
// }
// type IForEach = <T>(arr: T[], callback: (val: T) => void) => void;

// 1. 抽离出 callback，函数执行时传入T
type ICallback = <T>(val: T) => void; // 错误写法 泛型的使用需要能正常推导，但是内部的callback没有真正的执行，还是认为arr:T[]
type IForEach = <T>(arr: T[], callback: ICallback) => void;

// 2. 使用接口时，传入T
// type ICallback<T> = (val: T) => void;
// type IForEach = <T>(arr: T[], callback: ICallback<T>) => void;
const forEach: IForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

forEach(["A", 2, 3], function (val) {
  console.log(val);
});

// 用在接口和类上
// ???
interface SpeakChinese {
  speakChinese(): void;
}
interface SpeakEnglish {
  speakEnglish(): void;
}
class Speak {
  public a!: string;
}
interface Speakable extends SpeakChinese, SpeakEnglish, Speak {
  speak(): void; // 实现的是原型方法
}

// 如何表示我要传入的是一个类（见5.接口）

// 接口的返回值可能是统一的
// code message data
interface APIResponse<T = any> {
  // 泛型的默认值来解决泛型的值默认情况
  error: number;
  data: T;
  message: string;
}
interface LoginInfo {
  username: string;
  token: string;
}

function login(): APIResponse<LoginInfo> {
  return {
    error: 1,
    data: {
      username: "张三",
      token: "xxx",
    },
    message: "成功",
  };
}
let r = login();

// 使用联合类型时
type IUnion<T = boolean> = T | number | string;
type t1 = IUnion;
type t2 = IUnion<string[] | number[]>;

// 泛型是用户传递的类型（用户随便传？） 在使用泛型时，都要添加约束，称之为**泛型约束**

// 我们在使用泛型时，不能直接做运算
function getVal<T>(val: T): T {
  // return val * val // 不能做运算，无法保证运算后的类型
  return val;
}

// 通过 extends 约束泛型，约束类型T 是 number | string的子类型
function getVal1<T extends number | string>(val: T): T {
  // return val * val // 不能做运算，无法保证运算后的类型
  return val;
}
getVal1(1);
getVal1("1");
// getVal1(boolean) // ts报错

function getLength<T extends { length: number }>(val: T) {
  return val.length;
}
getLength("123");
getLength({ length: 1 });
// getLength(13) // ts报错

let person = { name: "lisi", age: 18 };

// 这里的 target 类型是死的
function getObjVal(target: typeof person, key: keyof typeof person) {
  return target[key];
}
getObjVal(person, "age");

function getObjVal1<T extends object, K extends keyof T>(target: T, key: K) {
  return target[key];
}
getObjVal1(person, "name");

// 类的泛型
class MyList<T extends string | number> {
  private arr: T[] = [];
  add(val: T) {
    this.arr.push(val);
  }
  getMax(): T {
    let max = this.arr[0];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] > max) {
        max = this.arr[i];
      }
    }
    return max;
  }
}
const list = new MyList();
list.add(1);
list.add(200);
list.add(100);
list.getMax(); // 200

export {};

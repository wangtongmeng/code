// 泛型可以用于 函数、接口、类、type
// 使用时无法确定当时的类型，可以采用泛型来定义

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

const forEach = <T>(arr: T[], callback: (val: T) => void) => {
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

export {};

// 类型保护 基于 js+ts(收窄类型)
// 使用联合类型时，默认只能使用类型的公共方法，但通过js识别类型后，可以进行类型收窄确认
// 例如 js判断后 typeof(基础类型) instanceof(类类型) in(接口类型，可辨识类型)
function fn(a: string | number) {
  if (typeof a === "string") {
    console.log(a); // 类型是 string
  }
}

// 通过 instanceof 判断
class Cat {
  cry() {}
}
class Dog {
  eat() {}
}
// 正常可以通过泛型的方式 映射，这里只是举类型保护的例子
// function getInstance<T>(clazz: { new (...args: any[]): T }) {
function getInstance(clazz: { new (...args: any[]): Cat | Dog }) {
  return new clazz();
}
const instance = getInstance(Cat);
if (instance instanceof Cat) {
  instance.cry();
} else {
  instance.eat;
}

// 可辨识类型 通过 in 实现
interface Bird {
  kind: "鸟";
  fly: string;
}
interface Fish {
  kind: "鱼";
  swim: string;
}
function getAnimal(val: Bird | Fish) {
  if ("fly" in val) {
    val; // Bird
  } else {
    val; // Fish
  }
  if (val.kind === "鸟") {
    val; // Bird
  } else {
    val; // Fish
  }
}

// 通过各种判断来缩小范围
function ensureArray<T>(input: T | T[]) {
  if (Array.isArray(input)) {
    return input;
  } else {
    return [input];
  }
}
let r1 = ensureArray("abc"); // string[]
let r2 = ensureArray(["abc"]); // string[]

// 函数嵌套不识别的问题
// ? ! if 都有缩小范围的用途(基于上下文类型的推导，会因为作用域的变化而产生问题)
// ! 表示一定有 ? 处理了取值取不到的情况
function addType(val?: number) {
  val = val || 0;
  return function (type: string) {
    // return type + val?.toFixed(); // val的类型是 number | undefined ，并不会因为 val || 0 改变
    // return type + val!.toFixed();
    return type + (val as number).toFixed(); // ts 无法识别时，可以使用断言
  };
}
addType(100)("$");

function isBird(val: Bird | Fish): val is Bird {
  // 返回的布尔值，ts无法判断true还是false是 Bird
  return "fly" in val;
}
function getAnimal(val: Bird | Fish) {
  if (isBird(val)) {
    val; // Bird
  } else {
    val; // Fish
  }
}

export {};

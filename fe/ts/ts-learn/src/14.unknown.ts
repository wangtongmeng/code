// unknown 和 any 都是顶级的类型
type keys1 = keyof any; //  string | number | symbol
type keys2 = keyof unknown; // never
type unionUnknown = unknown | string | true | false; // unknown 任何类型都可以赋予给 unknown
type interUnknown = unknown & string; // string

// any 就是不校验 === 意味着可以调用，取值
// unknown 是 any 的安全类型
let a: unknown = 1;
// 如果标识为 unknown 类型，必须先类型保护再去使用(收窄类型再使用)
function isNumber(val: unknown): val is number {
  return typeof val === "number";
}
if (isNumber(a)) {
  a; // number
}
export {};

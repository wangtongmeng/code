// 基础类型
// string number boolean 数组 元组 枚举 null undefined void never any object symbol bigInt

// 基础类型 小写
let a: number = 1
let b: string = 'str'
let c: boolean = true

// 包装类型 首字母大写，大写用来描述实例类型
let a1: Number = new Number(1)
let b2: String = new String('str')
let b3: String = 'str' // 在赋值时，子级可赋值给父级


// 数组
// 声明数组的两种方式：类型[] 或 Array<类型>
// 数组要求的是存储的格式按照特定类型来存储，不关心位置
let arr1: number[] = [1,2,3]
let arr2: Array<number> = [1,2,3]
let arr3: (number | string)[] = [1,2,'3'] // 通过联合类型实现，数组项多类型

// 元组 tuple
// 关心固定位置类型的数组，元组新增内容时，不能增加额外类型的值，只能是已有的，而且增加后无法访问
let tuple: [number, string] = [1, '2']
// tuple.push(true) // 报错
tuple.push(1)
// tuple[2] // 报错

// 枚举：自带类型的对象
// 维护一组常量时使用
// 枚举没有值时会根据上面的索引自动累加
// 类型可以反举（值是数字时，可以反过来枚举）
// 异构枚举，枚举中不止有数字还有字符串，如果上一个是字符串，则下一个无法推导
// 常量枚举，不会额外编译成对象，更节约
// enum STATUS {
//   'OK',
//   'NOT_OK'
// }
// console.log(STATUS.OK); // 0
// console.log(STATUS[0]); // 反举 'OK'
// 异构枚举
// enum STATUS1 {
//   'OK' = 'OK',
//   'NOT_OK' // 报错，需要初始化值，无法自动推导
// }
// 常量枚举
const enum STATUS2 {
  'OK',
  'NOT_OK'
}
console.log(STATUS2.OK); // console.log(0 /* STATUS2.OK */);

// null undefined 基本类型
let u: undefined = undefined
let n: null = null
// 非严格模式在关闭时，null可以赋值给undefined(在tsconfig.json中，"strictNullChecks": false,)
// 如果禁用非严格null检测，null和undefined 可以赋值给任何类型（null,undefined是任何类型的子类型）
// u = null
// n = undefined
// let s: string = null

// void 空类型 一般表示函数的返回值
function func1():void {
  // undefined 可以赋予给 void，都代表空（undefined 是 void 的子类型）
  return undefined
}


// never 永远到达不了的地方
// 函数无法执行完毕
function whileTrue():never {
  while(true) {}
}
// 报错时
function throwError():never{
  throw Error()
}
// 如果 if/else 条件都走完了，没有遗漏的，后面的类型就是never（完整性保护）
// 111 => [1,1,1]
// '111' => ['1', '1', '1']
// true => ['t', 'r', 'u', 'e']
function validateCheck(v:never) {}
function toArray(val: number | string | boolean){
  if (typeof val === 'number') {
    return val.toString().split('').map(Number)
  }
  if (typeof val === 'string') {
    return val.split('')
  }
  if (typeof val === 'boolean') {
    return val.toString().split('').map(Number)
  }
  // never类型，只能被never类型赋值
  validateCheck(val) // 代码的完整性保护（注释掉前面的某个判断，会报错）
}


// any 任何类型，都不写就不写，会导致类型丧失检测
let any1: any = 1
any1 = '1'

// object 引用类型
function create (val: object) {

}
create({})
create(function(){})
create([])

// symbol bigInt
const symbol: symbol = Symbol()
const bigint:bigint = BigInt(Number.MAX_SAFE_INTEGER) // 配置 tsconfig.json  lib: ["ESNext", "DOM"] "DOM"是为了解决console.log报错

export {}

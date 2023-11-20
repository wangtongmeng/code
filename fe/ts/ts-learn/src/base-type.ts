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
u = null
n = undefined
let s: string = null




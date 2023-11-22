// 函数中的类型
// 1.函数的声明方式 2.函数的参数 3. 函数的返回值
// 可选参数，可选参数默认值，this的问题，函数重载

// 对于ts来说：函数关键字声明的函数，不能标注函数类型；
// 通过表达式声明的函数，必须赋予的值要满足定义的类型(要求兼容性)
// function sum(a, b) {
//   return a + b
// }

// 1.函数类型的的定义 (a: any, b: any) => any 或者  {(a: any, b: any) : any}
// const sum1: {(a: any, b: any) : any} = function (a,b) {
//   return a+b
// }
// type ISum = (a: any, b: any) => any
// const sum1: ISum = function (a: string,b: string) {
//   return a+b
// }
// sum1(1,1) // 如果标明函数的类型，在使用函数时以标明的为准（ISum为准）

// 2. 函数的参数
// 可选参数 ? 可以不传参(区别于 string | undefined，必须得传)
// 可选参数，位置只能放在参数列表中的后面
// const sum = function (a: string, b?: string = 'abc') { // 这里右面的值函数 可以参数是不能和默认值一起用的，但是在左边声明类型时可以
//   return a+b
// }
// type ISum = (a: string, b?: string) => string
// const sum: ISum = function (a: string, b: string = 'abc') { // 这里右面的值函数 可以参数是不能和默认值一起用的，但是在左边声明类型是可选参数，右边真值有默认值，这样左边兼容右边
//   return a+b
// }
// sum('1')

// 3. 参数 this的问题
// 尽量不采用 this 来作为函数的上下文，this的缺陷是类型推导问题
// function getValue(key) {
//   return this[key] // this 推导不出来
// }
// const person = {name: 'lisi', age: 18}
// getValue.call(person, 'name')

// 如果想限制 this 类型，那么需要手动指定 this 类型
function getValue(this: IPerson, key: IKeys) {
  return this[key]; // this 推导不出来
}
const person = {name: 'lisi', age: 18, address: 'beijing'}
type IPerson = typeof person // 通过 typeof 提取对象的类型，type类型会提升到顶部
type IKeys = keyof IPerson // 通过 keyof 获取对象key的类型，作为联合类型
getValue.call(person, 'name')

// 函数中有arguments，但不建议使用，可以通过...
function sum(...args: number[]): number {
  return args.reduce((memo, cur) => memo + cur, 0)
}

// 函数重载(类型的重载)，对于强类型语言可以一个函数写多遍(参数不同)，js实现重载靠的是 arguments
// 入参是 字符串或数字，返回值是['字符串']或 ['数字']
function toArray(value: string): string[];
function toArray(value: number): number[]; // 具体的某一个方案
// 上面的声明仅仅是类型的重载
function toArray(value: string | number): string[] | number[] { // 所有的实现
  return []
}
let arr1 = toArray(1) // let arr1: number[]
let arr2 = toArray('1') // let arr2: string[]
export {}
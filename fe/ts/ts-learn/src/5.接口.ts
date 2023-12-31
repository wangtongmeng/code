// 接口：抽象类（抽象的、非抽象的都有） 接口都是抽象的（没有具体的实现）
// 接口的概念：就是描述数据的结构、形状，定义好结构，再去实现
// type 和 interface 的区别
//    interface
//      一般情况下，描述对象、类，采用 interface 多一些
//    type 
//      可以快速声明类型 联合类型（interface 无法声明联合类型）
//      工具类型只能采用 type
//      type不能重名
//      type 用的更多，能用 type 就用 type，否则用 interface
//      复杂类型一般用 tpye

// 1) 接口可以描述对象结构(子可以赋值给父)
// 如何类型是声明的，则类型必须一致
interface IPerson {
  username: string
  age: number
}
let obj: IPerson = { // 声明并赋值一起时，值的类型必须和 IPerson 一致
  username: 'abc',
  age: 30,
  // address: '地址' // 多余的属性会报错
}
// 子类可以赋值给父类的类型
let obj1: IPerson
let someVal = {
  username: 'abc',
  age: 30,
  address: '地址'
}
let person: IPerson = someVal // 对于已经声明过的 someVal，再赋值给person，相当于子类赋值给父类(产生了兼容性)

// 2) 接口可以描述函数
interface ICounter {
  (): number // 函数的返回值
  count: number // 函数的属性 
}
// 这里只能用const ，用let会报错(let函数是可以被替换的，const不会)
const counter: ICounter = () => {
  return counter.count++
}
counter.count = 0

// 3）当值和接口类型不符时，如何处理
// 3.1）可以给接口属性增加? 表示可有可无
interface IVeg {
  name: string
  taste: string
  size: number
  color?: string
}
const veg: IVeg = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
  color: 'red'
}
const veg1: IVeg = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
}
// 3.2) 通过断言的方式进行赋值 as IVeg （这种方式用的最多）
interface IVeg1 {
  name: string
  taste: string
  size: number
}
const veg2: IVeg1 = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
  color: 'red' // 需要自己保证代码不出错
} as IVeg1
const veg3: IVeg1 = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
}
// 3.3）合并接口 同名的接口会合并，（自定义类型会使用，比如扩展库的类型，可以写一个同名的类型进行扩展；写业务时用的少）
interface IVeg2 {
  name: string
  taste: string
  size: number
}
interface IVeg2 {
  color?: string
}
const veg4: IVeg2 = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
  color: 'red'
}
const veg5: IVeg2 = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
}
// 3.4）通过 extends 扩展一个新类型
interface IVeg3 {
  name: string
  taste: string
  size: number
}
interface IVeg4 extends IVeg3 {
  color?: string
}

const veg6: IVeg4 = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
  color: 'red'
}
const veg7: IVeg4 = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
}
// 3.5) 任意类型 随机的属性  描述数字索引
interface IVeg5 {
  name: string
  taste: string
  size: number
  [key: string]: any // 任意 key（key的类型一般是 string, number， symbol），任意值
}
const veg8: IVeg5 = {
  name: 'tamato',
  taste: '酸甜',
  size: 10,
  color: 'red',
  1: 'xxx',
  [Symbol()]: 'abc'
}
interface IArray { // 索引接口
  [key: number]: any
}
let arr: IArray = [1,2,3]
let arr1: IArray = {
  0: 1,
  1: 1,
  2: 1,
}
// 3.6) 兼容性 、 交叉类型

// 4. 通过索引访问符，来获取内部类型
interface ResponseData {
  username: string
  token: string
}
interface ReturnVal {
  code: number,
  data: ResponseData
}
type ICode = ReturnVal['code']
type IUsername = ReturnVal['data']['username']
// 取接口所有key得类型
type IKeys = keyof ReturnVal
// 取接口所有value的类型（取值的类型）
type IVals = ReturnVal[keyof ReturnVal] // number | ResponseData

// 5. 接口的实现 都是通过类来实现的
// implements 实现
// 接口中的类 可以实现多个接口
// 一个接口可以继承多个接口
// 接口可以继承类
interface Speakable {
  speak(): void // 实现的原型方法
  // speak: () => void // 实现的是实例方法
}
interface SpeakChinese {
  speakChinese(): void
}
interface SpeakEnglish {
  speakEnglish(): void
}
// 一个类实现多个接口
class Speaker implements Speakable, SpeakChinese {
  speak(): void {
    throw new Error("Method not implemented.")
  }
  speakChinese() {
    return 100
  }
}
// 一个接口继承多个接口
interface Speakable1 extends SpeakChinese, SpeakEnglish {
  speak(): void
}
// 类实现接口(常见)
class Speaker1 implements Speakable1 {
  speak(): void {
    throw new Error("Method not implemented.")
  }
  speakChinese(): void {
    throw new Error("Method not implemented.")
  }
  speakEnglish(): void {
    throw new Error("Method not implemented.")
  }
}
// 接口继承类
class Speak {
  public a!: string
}
interface Speakable2 extends SpeakChinese, SpeakEnglish, Speak {
  speak(): void
}
class Speaker2 implements Speakable2 {
  public a!: string;
  speak(): void {
    throw new Error("Method not implemented.")
  }
  speakChinese(): void {
    throw new Error("Method not implemented.")
  }
  speakEnglish(): void {
    throw new Error("Method not implemented.")
  }
}
export {}
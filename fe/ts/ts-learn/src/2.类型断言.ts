
// 类型推断
// 声明为赋值的变量，默认值是 undefined，但类型是 any
let a
// const 是常量，意味着定义的值不会修改，所以类型是字面量类型，const声明变量必须赋值
// let 声明变量可以修改，所以类型推断范围会变大
const b: 1 = 1 // 类型是字面量类型 1
const str: 'abc' = 'abc'
// const c 报错，必须赋值
let b1 = 1 // 类型是 number


// 断言的问题
let strOrNum: string | number // 如果是联合类型，只能使用公共的方法提示
// 从安全性角度考虑，在使用联合类型时，可以先赋值，确定类型，再使用
// 1) 指定类型，再使用
// strOrNum = '1'
// strOrNum.endsWith('1')
// strOrNum = 1
// strOrNum.toFixed()

// 2) 断言后，再使用
// as 断言成某种类型（前提一定是联合类型中的某一个）
// ! （非空断言，表示这个值一定不是空的）
// "strictNullChecks": true,  检查空值
(strOrNum! as string).charCodeAt(0); // ！ 非空断言，不存在结果自己承担，ts不管了，你认为一定有值
(<number>strOrNum!).toFixed(3);
// 值 as xxx 或者<xxx>值，一般用于联合类型，将大范围的类型 断言为 子类型

// 双重断言
(strOrNum! as unknown as boolean); // 双重断言，一般不建议使用，会破坏原有关系

export {}
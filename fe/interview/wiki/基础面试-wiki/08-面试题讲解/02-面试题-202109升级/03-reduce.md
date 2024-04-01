# 数组求和

## 传统方式

```js
function sum(arr) {
    let res = 0
    arr.forEach(n => res = res + n)
    return res
}
const arr = [10, 20, 30]
console.log( sum(arr) )
```

## reduce 方法的使用

```js
// 累加器
const arr1 = [10, 20, 30, 40, 50]
const arr1Sum = arr1.reduce((sum, curVal, index, arr) => {
    console.log('reduce function ......')
    console.log('sum', sum)
    console.log('curVal', curVal)
    console.log('index', index)
    console.log('arr', arr)

    return sum + curVal // 返回值，会作为下一次执行的 sum
}, 0)
console.log('arr1Sum', arr1Sum)
```

## reduce 的其他用法

```js
// 计数
function count(arr, value) {
    // 计算 arr 中有几个和 value 相等的数
    return arr.reduce((c, item) => {
        return item === value ? c + 1 : c
    }, 0)
}
const arr2 = [10, 20, 30, 40, 50, 10, 20, 10]
console.log( count(arr2, 20) )
```

```js
// 数组输出字符串
const arr3 = [
    { name: 'xialuo', number: '100' },
    { name: 'madongmei', number: '101' },
    { name: 'zhangyang', number: '102' }
]
// // 普通做法 1（需要声明变量，不好）
// let arr3Str = ''
// arr3.forEach(item => {
//     arr3Str += `${item.name} - ${item.number}\n`
// })
// console.log(arr3Str)
// // 普通做法 2（map 生成数组，再进行 join 计算）
// console.log(
//     arr3.map(item => {
//         return `${item.name} - ${item.number}`
//     }).join('\n')
// )
// reduce 做法（只遍历一次，即可返回结果）
console.log(
    arr3.reduce((str, item) => {
        return `${str}${item.name} - ${item.number}\n`
    }, '')
)
```

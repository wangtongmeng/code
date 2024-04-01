# Set 和数组的区别

## Set 元素不能重复

```js
const arr = [10, 20, 30, 30, 40]
const set = new Set([10, 20, 30, 30, 40]) // 会去重
console.log(set) // Set(4) {10, 20, 30, 40}
```

```js
// 数组去重
function unique(arr) {
    const set = new Set(arr)
    return [...set]
}
unique([10, 20, 30, 30, 40])
```

## API 不一样

```js
// 初始化
const set = new Set([10, 20, 30, 30, 40]) 

// 新增（没有 push unshift ，因为 Set 是无序的，下文会讲）
set.add(50)

// 删除
set.delete(10)

// 判断
set.has(20)

// 长度
set.size

// 遍历
set.forEach(val => console.log(val))

// set 没有 index ，因为是无序的
```

## Set 是无序的，而数组是有序的 —— 这一点很少有人提到，却很关键！！！

先看几个测试

- 数组：前面插入元素 vs 后面插入元素
- 数组插入元素 vs Set 插入元素
- 数组寻找元素 vs Set 寻找元素

```js
// 构造一个大数组
const arr = []
for (let i = 0; i < 1000000; i++) {
    arr.push(i)
}

// 数组 前面插入一个元素
console.time('arr unshift')
arr.unshift('a')
console.timeEnd('arr unshift') // unshift 非常慢
// 数组 后面插入一个元素
console.time('arr push')
arr.push('a')
console.timeEnd('arr push') // push 很快

// 构造一个大 set
const set = new Set()
for (let i = 0; i < 1000000; i++) {
    set.add(i)
}

// set 插入一个元素
console.time('set test')
set.add('a')
console.timeEnd('set test') // add 很快

// 最后，同时在 set 和数组中，寻找一个元素
console.time('set find')
set.has(490000)
console.timeEnd('set find') // set 寻找非常快
console.time('arr find')
arr.includes(490000)
console.timeEnd('arr find') // arr 寻找较慢
```

什么是无序，什么是有序？参考 `x1-有序和无序.md`

- 无序：插入、查找更快
- 有序：插入、查找更慢

因此，如果没有**强有序**的需求，请用 Set ，会让你更快更爽！

## WeakSet

WeekSet 和 Set 类似，区别在于 —— 它不会对元素进行引用计数，更不容易造成内存泄漏。

```js
// 函数执行完，obj 就会被 gc 销毁
function fn() {
    const obj = {
        name: 'zhangsan'
    }
}
fn()
```

```js
// 函数执行完，obj 不会被销毁，因为一直被外面的 arr 引用着
const arr = []
function fn() {
    const obj = {
        name: 'zhangsan'
    }
    arr.push(obj)
}
fn()
```

```js
// 函数执行完，obj 会被销毁，因为外面的 WeakSet 是“弱引用”，不算在内
const wSet = new WeakSet()
function fn() {
    const obj = {
        name: 'zhangsan'
    }
    wSet.add(obj) // 注意，WeakSet 就是为了做弱引用的，因此不能 add 值类型！！！无意义
}
fn()
```

【注意】内存的垃圾回收机制，不是实时的，而且是 JS 代码控制不了的，因此这里不一定能直接看到效果。
WeekSet 没有 `forEach` 和 `size`，只能 `add` `delete` 和 `has`。因为垃圾回收机制不可控（js 引擎看时机做垃圾回收），那其中的成员也就不可控。

## 总结

- Set 值不能重复
- Set 是无序结构
- WeakSet 对元素若引用

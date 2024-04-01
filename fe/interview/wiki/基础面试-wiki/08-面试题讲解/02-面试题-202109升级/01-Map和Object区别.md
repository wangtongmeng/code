# Map 和 Object 的不同

## API 不同

```js
// 初始化
const m = new Map([
    ['key1', 'hello'],
    ['key2', 100],
    ['key3', { x: 10 }]
])

// 新增
m.set('name', '双越')

// 删除
m.delete('key1')

// 判断
m.has('key2')

// 遍历
m.forEach((value, key) => console.log(key, value))

// 长度（Map 是有序的，下文会讲，所有有长度概念）
m.size
```

## 以任意类型为 key

```js
const m = new Map()
const o = { p: 'Hello World' }

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

## Map 是有序结构

Object key 不能按照既定顺序输出

```js
// Object keys 是无序的
const data1 = {'1':'aaa','2':'bbb','3':'ccc','测试':'000'}
Object.keys(data1) // ["1", "2", "3", "测试"]

const data2 = {'测试':'000','1':'aaa','3':'ccc','2':'bbb'};
Object.keys(data2); // ["1", "2", "3", "测试"]
```

Map key 可以按照既定顺序输出

```js
const m1 = new Map([
    ['1', 'aaa'],
    ['2', 'bbb'],
    ['3', 'ccc'],
    ['测试', '000']
])
m1.forEach((val, key) => { console.log(key, val) })
const m2 = new Map([
    ['测试', '000'],
    ['1', 'aaa'],
    ['3', 'ccc'],
    ['2', 'bbb']
])
m2.forEach((val, key) => { console.log(key, val) })
```

## Map 很快

Map 作为纯净的 key-value 数据结构，它比 Object 承载了更少的功能。<br>
Map 虽然有序，但操作很快，和 Object 效率相当。

```js
// Map
const m = new Map()
for (let i = 0; i < 1000 * 10000; i++) {
    m.set(i + '', i)
}
console.time('map find')
m.has('2000000')
console.timeEnd('map find')
console.time('map delete')
m.delete('2000000')
console.timeEnd('map delete')
```

```js
// Object
const obj = {}
for (let i = 0; i < 1000 * 10000; i++) {
    obj[i + ''] = i
}
console.time('obj find')
obj['200000']
console.timeEnd('obj find')
console.time('obj delete')
delete obj['200000']
console.timeEnd('obj delete')
```

另外，Map 有序，指的是 key 能按照构架顺序输出，并不是说它像数组一样是一个有序结构 —— 否则就不会这么快了<br>
但这就足够满足我们的需求了。

## WeakMap

WeakMap 也是弱引用。但是，**WeakMap 弱引用的只是键名 key ，而不是键值 value**。

```js
// 函数执行完，obj 会被销毁，因为外面的 WeakMap 是“弱引用”，不算在内
const wMap = new WeakMap()
function fn() {
    const obj = {
        name: 'zhangsan'
    }
    // 注意，WeakMap 专门做弱引用的，因此 WeakMap 只接受对象作为键名（`null`除外），不接受其他类型的值作为键名。其他的无意义
    wMap.set(obj, 100) 
}
fn()
// 代码执行完毕之后，obj 会被销毁，wMap 中也不再存在。但我们无法第一时间看到效果。因为：
// 内存的垃圾回收机制，不是实时的，而且是 JS 代码控制不了的，因此这里不一定能直接看到效果。
```

另外，WeakMap 没有 `forEach` 和 `size` ，只能 `add` `delete` `has` 。因为弱引用，其中的 key 说不定啥时候就被销毁了，不能遍历。

WeakMap 可以做两个对象的关联关系，而不至于循环引用，例如：

```js
const userInfo = { name: '双越' }
const cityInfo = { city: '北京' }

// // 常规关联，可能会造成循环引用
// userInfo.city = cityInfo
// cityInfo.user = userInfo

// 使用 WeakMap 做关联，则无任何副作用
const user_to_city = new WeakMap()
user_to_city.set(userInfo, cityInfo)
```

## 总结

- key 可以是任意数据类型
- key 会按照构建顺序输出
- 很快
- WeakMap 弱引用

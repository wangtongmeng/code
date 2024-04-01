# Proxy Reflect 语法

## 代理对象

get set deleteProperty

```js
const obj = {
    a: 100,
    b: 200
}

const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        // 原型属性（如 toString ），不希望被监听到
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key) === true) {
            // console.log('get', target, key, receiver)
            console.log('get', key)
        }

        // 返回结果
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log('set', key, value)
        const res = Reflect.set(target, key, value, receiver) // 如果属性只读，则返回 false。如 object.defineProperty writable false
        console.log('set res', res)
        return res
    },
    // has(target, key) {
    //     console.log('has', key)
    //     const res = Reflect.has(target, key) // 可以用 key in target ，但并不是函数式的规范写法
    //     console.log('has res', res)
    //     return res
    // },
    deleteProperty(target, key) {
        console.log('deleteProperty', key)
        const res = Reflect.deleteProperty(target, key) // 如果用 delete target[key] ，但返回结果永远都是 true ，而且不是规范的函数式写法
        console.log('deleteProperty res', res)
        return res
    }
})

// 测试
objProxy.a
objProxy.b
objProxy.a = 101
delete objProxy.a
```

## 代理数组

```js
const arr = [10, 20, 30]
const arrProxy = new Proxy(arr, {
    get(target, key, receiver) {
        // 原型属性(如 toString push pop 等)，不希望被监听到
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key) === true) {
            // 获取 arrProxy[0] 应该触发
            // 获取 arrProxy.length 应该触发，可能需要将 length 显示到视图中
            console.log('get', key)
        }

        // 返回结果
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        // arrProxy.push(40) 时，会先设置 3:40 ，然后设置 length:4，即 set 两次。
        // 而 length:4 这次 set 是没必要监听到的。因为当设置 3:40 的时候，length 就已经是 4 了
        const curVal = Reflect.get(target, key, receiver)
        if (value === curVal) {
            // 值已相等，如上述 length 的情况
            return true
        }

        console.log('set', key, value)
        const res = Reflect.set(target, key, value, receiver)
        console.log('set res', res)
        return res
    },
    deleteProperty(target, key) {
        console.log('deleteProperty', key)
        const res = Reflect.deleteProperty(target, key)
        console.log('deleteProperty res', res)
        return res
    }
})

// 测试
arrProxy[1]
arrProxy.length
arrProxy.push(40)
```

## 思考 Proxy Reflect 的作用

Proxy 作用

- 代理属性和方法
- 监听变化
- 针对对象、数组，全方位

Reflect 作用

- API 和 Proxy 对应
- Reflect 能让编程规范化、标准化、函数式
- Reflect 会替代掉 Object 上的工具函数

```js
Reflect.has(target, key)
key in target

Reflect.deleteProperty(target, key)
delete target[key]

Reflect.ownKeys({a: 100})
Object.getOwnPropertyNames({a: 100})
```

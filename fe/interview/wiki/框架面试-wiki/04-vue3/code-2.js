const data = {
    name: 'zhangsan',
    info: {
        address: 'beijing'
    }
}

// 做响应式
function reactive(target) {
    if (typeof target !== 'object' || target == null) {
        return target
    }

    // proxy 配置
    const handler = {
        get(target, key, receiver) {
            // 原型属性（如 toString ），不希望被监听到
            const ownKeys = Reflect.ownKeys(target)
            if (ownKeys.includes(key) === true) {
                console.log('get', key)
            }

            // 返回结果
            const result = Reflect.get(target, key, receiver)
            if (typeof result === 'object' && result != null) {
                // 递归监听，深度监听！！！
                // 注意，虽然都是递归，这里和 Object.defineProperty 的深度监听不一样。
                // a. Object.defineProperty 是拿到数据之后，直接进行遍历、递归，一次性完成深度监听。
                // b. 而这里是什么时候属性被访问到，什么时候才会进行递归监听。计算没有那么集中，所以性能会好很多。
                return reactive(result)
            }
            return result
        },
        // set(target, key, value, receiver) {
        //     console.log('set', key, value)
        //     const res = Reflect.set(target, key, value, receiver)
        //     return res
        // },
    }

    // 代理，监听
    const observed = new Proxy(target, handler)
    return observed
}

// 测试
const objProxy = reactive(data)

objProxy.name // 'zhangsan'
objProxy.info // Proxy 对象
objProxy.info.address // 'beijing'
// 监听数据变化。步骤：**1. 对象监听；2. 深度监听（递归）；3. 监听数组；**

// 触发更新视图
function updateView() {
    console.log('视图更新')
}

// 3.2 数组方法处理，这里稍微复杂一点
const oldArrayPrototype = Array.prototype
const arrProto = Object.create(oldArrayPrototype); // 创建新对象，原型指向 oldArrayPrototype ，再扩展属性不会影响 oldArrayPrototype
['push', 'pop', 'shift', 'unshift', 'splice'].forEach(method => {
    // 重新定义这些新方法，监听数组变化
    arrProto[method] = function () {
        updateView() // 触发更新视图
        oldArrayPrototype[method].call(this, ...arguments) // 调用原有方法
    }
})


// 2.2 重新定义属性，监听起来
function defineReactive(target, key, value) {
    // 2.3 value 如果是对象，需要递归监听，即深度监听 —— 注意这里的递归，而且是在数据监听时，一次性递归完成！！！
    // （如果 value 不是对象，observer 中会做判断）
    observer(value)

    // 核心 API
    Object.defineProperty(target, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                // 2.3 设置的值，也需要监听起来，即深度监听
                observer(newValue)

                // 设置新值
                value = newValue // 注意，value 一直在闭包中，此处设置完之后，再 get 时也是会获取最新的值！！！

                // 触发更新视图
                updateView()
            }
        }
    })
}

// 2.1 监听对象属性
function observer(target) {
    if (typeof target !== 'object' || target === null) {
        // 不是对象或数组
        return target
    }

    if (Array.isArray(target)) {
        // 重写数组的原型
        target.__proto__ = arrProto
    }

    // 重新定义各个属性
    for (let key in target) { // 遍历对象或者数组
        defineReactive(target, key, target[key])
    }
}

// 1. 准备数据
const data = {
    name: 'zhangsan',
    info: {
        address: '北京'
    },
    nums: [10, 20, 30]
}

// 2. 监听数据
observer(data)

// 测试
data.name = 'lisi'
data.info.address = '上海' // 深度监听
data.x = '100' // 新增属性，监听不到 —— 所以有 Vue.set
delete data.name // 删除属性，监听不到 —— 所有已 Vue.delete
data.nums.push(4) // 监听数组
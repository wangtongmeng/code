# 认识 Hooks

为了照顾对 Hooks 不了解的同学，我们先来花点时间认识一下 React Hooks

先不要管 Hooks 的动机，即为何要使用。等学会了基本使用之后，后面再讲，现在讲估计也效果不好。

## 回顾函数组件

函数组件没有实例，也不能监听各个生命周期，也无法扩展属性和方法。只是输入 props ，输出 jsx ，纯函数。
也没有 state

```js
// class 组件
class List extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { list } = this.props

        return <ul>{list.map((item, index) => {
            return <li key={item.id}>
                <span>{item.title}</span>
            </li>
        })}</ul>
    }
}

// 函数组件
function List(props) {
    const { list } = this.props

    return <ul>{list.map((item, index) => {
        return <li key={item.id}>
            <span>{item.title}</span>
        </li>
    })}</ul>
}
```

## class 组件 vs 函数组件

class 组件有如下问题

- 大型组件很难拆分和重构，也很难测试。
- 业务逻辑分散在组件的各个方法之中，导致重复逻辑或关联逻辑。
- 组件类引入了复杂的编程模式，比如 render props 和高阶组件。

按照 React 函数式编程的思维来说，一个组件更像一个函数，而不像一个 class ，即 `view = fn(props)`
所以，函数组件会看起来更简洁、符合逻辑。

但函数组件没有 state ，没有生命周期，还无法取代 class 组件。所以，才有了 React Hooks 。

## state hook

函数组件，要求必需是**纯函数**，不能有副作用。因此，要在函数组件使用 state ，不能直接使用，而是要“钩”进来，这就是 Hooks

那如何把 state “钩”到函数组件呢？ —— `ClickCounter.js` 代码演示
（可以再对比一下 `ClickCounterClass.js` ，体会和 class 组件的区别）

代码总结

- useState(0) 传入初始值，返回一个数组
- 数组第一个元素，state 值
- 数组第二个元素，setState 函数

注意命名规范

- 规定所有 Hook 命名必须是 use 开头，如 useXxx
- 自定义的 Hook ，也要 use 开头
- 其他地方，不要乱用 useXxx 名字

## effect hook

有了 state 之后，还差一个常用的功能 —— 组件声明周期。例如，组件经常会在 didMount 里发请求

`LifeCycles.js` 代码演示

- 模拟 ComponentDidMount
- 模拟 ComponentDidUpdate
- 模拟 ComponentWillUnMount

effect 实现的是**副作用**，解释一下这个词

- 纯函数，输入参数，返回结果，不应该有副作用
- 副作用：对函数之外的干扰，如设置一个定时任务
- 而组件却需要副作用，所以用 effect hook 实现

继续讲一个知识点，其实上述“模拟 ComponentWillUnMount” 和 class 组件的 WillUnMount 还不一样。
以一个“监听好友在线状态”的组件为例子说明 —— `FriendStatusClass.js` 和 `FriendStatus.js` ，对比着看。

- 先用 class 组件演示，光有 WillUnmount 满足不了需求，需要结合 Update 声明周期
- 而用 effect Hook 一步就可以解决问题
- 所以这里的 “模拟 ComponentWillUnMount” 和 class 组件的 WillUnMount 不一样

## 小结

有了 state ，有了最基本的 3 个生命周期，日常见的功能也就都能做了

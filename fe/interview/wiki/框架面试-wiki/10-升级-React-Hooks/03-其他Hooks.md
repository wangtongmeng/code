# 其他 Hooks

下面这些 hooks 优先级并不高，不是那么常用。但是你至少要知道它是干嘛的，以便后面用到时再详细查询。
所以，下面我们就依次看看，这些 hooks 的介绍和基本使用，做一个大概的了解即可。

## useRef

可用于获取 DOM 元素，参考 `UseRefDemo.js` 中的代码

## useContext

（先回顾一下之前的 Context 知识，借用之前 ppt 和源码）

Hooks 中使用 `useContext` 来获取 context 的值

参考 `UseContextDemo.js` 代码。

## useReducer

（先回顾一下 redux 的流程，和各个概念）

参考 `UseReducerDemo.js` 代码

useReducer 和 redux 不同

- useReducer 是 useState 的代替方案，用于更复杂的 state 变化逻辑
- useReducer 还是单组件的状态管理，多组件通讯还是需要 props 传递数据
- redux 是全局的状态管理，多组件可共享数据

## useMemo

（先回顾一下之前的性能优化部分的知识，借用之前 ppt 和源码）

- React 默认更新所有子组件
- Class 组件使用 SCU 或者 PureComponent 进行优化
- Hooks 里使用 useMemo（但道理是一样的）

参考 `UseMemoDemo.js` 代码演示

## useCallback

在 useMemo 的基础上继续，如果是函数传递给子组件，怎么办？

- useMemo 封装数据
- useCallback 封装函数

参考 `UseCallbackDemo.js` 代码演示

# vue3 JSX

【注意】如果对 JSX 语法不熟悉，可以先去学习 React 部分。

## 开始

- vue3 中 JSX 的基本使用
- JSX 和 template 的区别
- JSX 和 slot
- JSX 和 作用域 slot

## vue3 中 JSX 的基本使用

- 基本使用
- 使用 `.jsx` 格式的文件，使用 `defineComponent` 
    - 可以传入一个配置
    - 也可以传入一个 `setup` 函数
- 引入子组件，传递属性

## JSX 和 template 的区别

语法的区别：
- JSX 就是 js 代码，它可以使用任何 js 的能力。
- template 是模板语法，目前只能插入一些简单的 js 表达式。逻辑则需要指令，如 `v-for` `v-if` 等。
- JSX 已经成为了 ES 规范语法，babel 支持。而 template 只是 vue 自家的语法规范。

但本质是相同的：他们都会被编译成 render 函数，用于渲染 vnode<br>
在 vue React 原理都讲过，这里不再重复

### 插值
- template 用 `{{xxx}}`
- JSX 用 `{xxx}`

### 自定义组件
- template 可用 `<custom-component></custom-component>` 或者 `<CustomComponent></CustomComponent>`
- JSX 必须使用 `<CustomComponent></CustomComponent>`

### 传递属性和事件
- template 中使用 `a="xx"` 或 `:a="xx"` ，`@xx="xx"`
- JSX 中全部使用 `a={xx}`

### 条件，循环
- template 使用指令 `v-for` `v-if` 等
- JSX 中使用 js 表达式

## JSX 和 slot

因为 template 只能内嵌简单的 js 表达式，无法内嵌组件，所以 vue 只能自造一个 `<slot>` 语法。

vue3 setup 中可以使用 `context.slots.default()` 获取子组件

使用 tabs 组件演示 JSX 如何操作 slot

## JSX 和作用域 slot

回顾作用域 slot ，就是：父组件想要获取子组件的信息，并渲染到 slot 中

作用域 slot 很难理解，一直是 vue 初学者的噩梦。但用 JSX 将会变的很好理解，因为它就是 js 代码逻辑。

代码的方式，在 react 中叫做“renderProps”

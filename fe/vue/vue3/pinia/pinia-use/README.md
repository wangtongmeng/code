# pinia-use

## 特点

- 弃用 mutation
- 对 ts 友好
- 无需要动态添加 Store，它们默认都是动态的
- 不再有嵌套结构的模块
- 不再有可命名的模块

## 安装

## Store

它有三个概念，state、getter 和 action，相当于组件中的 data、 computed 和 methods。

## 定义 Store

defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。

定义的 store 何时创建

store 结合 setup 组件
store 结合 options api 写法的组件

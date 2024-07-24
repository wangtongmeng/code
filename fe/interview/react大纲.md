
- jsx 的本质
- 合成事件机制
- setState 和 batchUpdate
- 组件更新和 diff 算法
- 组件之间如何通讯
- JSX 本质是什么
- context 是什么，如何应用？
- shouldComponentUpdate 的用途
- redux 单向数据流过程
- setState 场景题
## hooks
- 为什么要使用 React Hooks？解决了什么问题
- React Hooks 如何模拟组件生命周期
- 如何自定义 Hook
- React Hooks 性能优化
- React Hooks 有哪些坑？ —— 看你是否在实战中用过 Hooks ，还是仅仅看了一些文档
- Hooks 相比 HOC 和 Render Prop 有哪些优点
## 性能优化
## 遇到的坑
## 原理(和使用相关的)
- 函数式编程
- JSX本质是什么
- vdom 和 diff
- 合成事件机制
- setState 和 batchUpdate 机制 
- 组件渲染和更新的过程
- React-fiber如何优化性能


## 原理-解答
### 函数式编程
- 一种编程范式，概念比较多
- 纯函数
- 不可变值
回顾 SCU 和 redux 的案例
### JSX本质
- JSX 即 createElemengt 函数
- 执行生成vnode
- patch(elem, vnode) patch(elem, newVnode)

- babel编译jsx 为React.createElement ，返回 vnode
- createElement 第一个参数，可能是组件，也可能是 html tag
- 组件名，首字母必须大写(React 规定)
babeljs.cn 查看 jsx 转换成 createElement 的结果，参考baseUse/JSXCompoiler
### vdom 和 diff
- JSX 即 createElemengt 函数
- 执行生成vnode
- patch(elem, vnode) patch(elem, newVnode)
diff
- 只比较同一层级，不跨级比较
- tag 不相同，则直接删掉重建，不再深度比较
- tag 和 key，两者都相同，则认为是相同节点，不再深度比较
### 合成事件
- 所有事件挂载到 document(React>=17后，挂载到渲染根节点上) 上
- event 不是原生的，是 SyntheticEvent 合成事件对象
- 和 Vue 事件不同，和 DOM 事件也不同
为何要合成事件机制？
- 更好的兼容性和跨平台
- 挂载到 document (>=17后是根节点)，减少内存消耗，避免频繁解绑
- 方便事件的统一管理(如事务机制)
参考 eact-code-demo/src/components/baseUse/EventDemo.js
### setState 和 batchUpdate 机制
- setState 的表现(重要) 和主流程
- batchUpdate 机制
- transaction(事务)机制
### 组件渲染和更新
- 组件更新和渲染过程
- 更新的两个阶段：reconciliation commit
- React fiber
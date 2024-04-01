# Hooks 使用规范

已经初步认识了 React Hooks ，在继续深入学习之前，我们要说两个重要的规范。请大家一定要遵守。

## 规则

- 只在代码最顶层使用 Hook ，不要在循环、判断和嵌套函数中使用。（以及不要在 Hook 之前 return 掉）
- 只在 React 函数组件，或自定义 Hook 中使用
    - 不在 class 组件中使用
    - 不在普通函数中使用
- eslint 插件 eslint-plugin-react-hooks 可以帮你解决以上问题

安装 `npm install eslint-plugin-react-hooks --save-dev` ，然后修改 eslint 配置文件

```json
// ESLint 配置文件
{
  "plugins": [
    // ...此处省略 N 行...
    "react-hooks"
  ],
  "rules": {
    // ...此处省略 N 行...
    "react-hooks/rules-of-hooks": "error", // 检查 Hook 的规则
    "react-hooks/exhaustive-deps": "warn" // 检查 effect 的依赖
  }
}
```

## 关于 Hook 的调用顺序

第二条规则应该不难理解：Hooks 就是给 React 函数组件使用的，不能用在其他地方。

- 是一个函数
- import React from 'react' （普通函数，编译时不用引入 React ，也就不具备 Hooks 功能）
- 返回 JSX

那么第一条规则，为何必须放在顶层？我们需要一探究竟。如果面试时候问到，你也能从容作答。
（参考 `Teach.js` 代码演示）

- 无论 render 和 re-render ，所有 Hook （包括 useState useEffect 还有其他）都必须保证顺序一致，才能对应起来
- 如果某一个 Hook 出现在判断或者循环中，则无法保证顺序一致 （此处可代码展示一下，但不能运行）
- React Hook 严重依赖于 Hook 的调用顺序！重要！！！

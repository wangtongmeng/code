# todo list 设计

## 简单的（常考）

- 画原型图
- 组件设计
- 数据结构设计

代码参考 `react-demo` 中 `baseUse/PropsDemo` ，只是需要再把 Item 组件单独拆分一下。

## 复杂的，结合状态管理

回顾之前 `react-demo` 中 `reduxUse` 的代码，以及系统演示

可以先不看 Footer 过滤功能

- 运行演示功能
- 查看代码文件结构
- `app.js`
- `reducers`
    - `todos.js`
    - `visibilityFilter.js`
- `actions/index.js`
- `components/App.js` - 查看组件结构
- `containers/AddTodo.js`
- `containers/VisibleTodoList.js`
- `components/TodoList`
- `components/Footer.js`
- `containers/FilterLink.js`
- `components/Link`
- 总结：组件拆分，数据结构，数据操作（actions reducer 等）

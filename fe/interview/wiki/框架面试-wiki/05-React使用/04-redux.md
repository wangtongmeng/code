# redux

redux 一般用于大型项目的数据管理。
组件较多，数据较多，就把数据集中存储到一个地方，供所有组件共享访问。

## 基本概念和用法

- store state
- action
- reducer

看文档 https://www.redux.org.cn/ 中的示例（在 redux-demo.js 中）

## 单项数据流模型

redux 数据流和 redux-thunk 数据流

## react-redux

- Provider connect
- mapStateToProps
- mapDispatchToProps

查看代码 redux-demo
注意，这里只需要关心 redux 的使用。数据结构和 react 组件结构，后面再讲。

## 异步 action

action 是创造新数据的来源。异步获取新数据，是前端很常见的方式。

### 使用 redux-thunk

```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// 创建 store 时，作为中间件引入 redux-thunk
const store = createStore(rootReducer, applyMiddleware(thunk));
```

```js
// 同步 action
export const addTodo = text => {
  // 返回 action 对象
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

// 异步 action
export const addTodoAsync = text => {
  // 返回函数，其中有 dispatch 参数
  return (dispatch) => {
    // ajax 异步获取数据
    fetch(url).then(res => {
      // 执行异步 action
      dispatch(addTodo(res.text))
    })
  }
}
```

### 其他库

- redux-promise
- redux-saga

## 中间件

想要在 redux 的每一次 action 中都增加一段业务逻辑（如增加一个打印当前 action 的 logger 功能）

- reducer 是纯函数，只承担计算 state 的功能，不能在这里加
- View 是 state 的视觉层，根据 state 渲染，不能在这里加
- Action 是存放数据的对象，即消息的载体，只能被别人操作，自己不能进行任何操作

想来想去，只能在 dispatch 上搞搞事情。

```js
// 自己修改 dispatch ，增加 logger
let next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action);
  next(action);
  console.log('next state', store.getState());
}
```

```js
// 将这个能力拆分出来，作为中间件
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger) // 会按顺序执行
  //（此处，也可以想一下 redux-thunk 是如何实现的）
);
```

总结。说白了，redux 中间件，就是对 dispatch 的二次封装，就是 redux 允许用户自定义 dispatch 。

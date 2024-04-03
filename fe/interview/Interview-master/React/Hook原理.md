###[一篇文章](https://juejin.cn/post/6891577820821061646)

基于此文章+我的理解:
我们可以使用 Array 模拟 useState 的原理，正如文章[React hooks: not magic, just arrays](https://link.juejin.cn/?target=https%3A%2F%2Fmedium.com%2F%40ryardley%2Freact-hooks-not-magic-just-arrays-cd4f1857236e)所说，**Hooks 的本质是链表。保存在组件对应的 fiber 的 memoizedState 中**

#### 初步模拟

当调用 useState 的时候，会返回形如 (变量, 函数) 的一个元祖。并且 state 的初始值就是外部调用 useState 的时候，传入的参数。
理清楚了传参和返回值，再来看下 useState 还做了些什么。正如下面代码所示，当点击按钮的时候，执行 setNum，状态 num 被更新，并且**UI 视图更新**。显然，useState 返回的用于更改状态的函数，**自动调用了 render 方法来触发视图更新**, 这里我们可以类比 Vue defineProperty 里触发 Dep.notify 通知 watcher 更新视图。

```javascript
// 模拟实现useState
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

let state;

function useState(initialState) {
  state = state || initialState;

  function setState(newState) {
    state = newState;
    render();
  }

  return [state, setState];
}

render(); // 首次渲染
```

```javascript
// 模拟实现useState,更完善版
function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
  index = 0;
}

let stateArr = [];
let index = 0;

function useState(initialState) {
  const curIndex = index;
  stateArr[curIndex] = stateArr[curIndex] || initialState;

  function setState(newState) {
    stateArr[curIndex] = newState;
    render();
  }

  return [state, setState];
}

// 使用
const [count, setCount] = useState(1);
const [name, setName] = useState("张三");

render(); // 首次渲染
```

**初步模拟让我们发现了 Hooks 的第一个核心原理：闭包，是的 Hooks 返回的 state 和 setState 方法，在 hooks 内部都是利用闭包实现的**

#### 为什么不能在循环、判断内部使用 Hook

前面 useState 的简单实现里，初始的状态是保存在一个**全局变量**中的。以此类推，多个状态，应该是保存在一个专门的全局容器中。这个容器，就是一个朴实无华的 Array 对象。具体过程如下：

- 第一次渲染时候，根据 useState 顺序，逐个声明 state 并且将其放入全局 Array 中。每次声明 state，都要将 cursor 增加 1。
- 更新 state，触发再次渲染的时候。cursor 被重置为 0。按照 useState 的声明顺序，依次拿出最新的 state 的值，视图更新。

```javascript
import React from "react";
import ReactDOM from "react-dom";

const states = [];
let cursor = 0;

function useState(initialState) {
  const currenCursor = cursor;
  states[currenCursor] = states[currenCursor] || initialState; // 检查是否渲染过

  function setState(newState) {
    states[currenCursor] = newState;
    render();
  }

  cursor += 1; // 更新游标
  return [states[currenCursor], setState];
}

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <div>
      <div>count1: {count1}</div>
      <div>
        <button onClick={() => setCount1(count1 + 1)}>add1 1</button>
        <button onClick={() => setCount1(count1 - 1)}>delete1 1</button>
      </div>
      <hr />
      <div>num2: {num2}</div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>add2 1</button>
        <button onClick={() => setCount2(count2 - 1)}>delete2 1</button>
      </div>
    </div>
  );
}

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
  cursor = 0; // 重置cursor
}

render(); // 首次渲染
```

某 up 主讲的：一个核心原理=>代数效应：把副作用从函数式编程中的函数调用中剥离出去。这个太抽象了，估计面试官也不知道。

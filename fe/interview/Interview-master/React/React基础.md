<details>
  <summary>Hooks对比Class组件</summary>
  class组件的缺点
  
  1. 组件间的状态逻辑难以复用，虽然使用高阶组件可以解决问题，但会导致层级冗余
  2. 事件监听和timeout的添加和移除分别在两个生命周期里
  3. class组件有this指向问题，需要通过箭头函数或bind this来解决
</details>

<details>
  <summary>hooks 的两个面试问题</summary>

1. 只能在函数的最外层调用，不要在循环，条件判断或子函数中使用
   因为 state 的取值方式是单链表，顺序不能乱。详情可见手写 useState
2. 为什么 useEffect 的第二个参数是空数组，就相当于 componentDidMount，只执行一次
</details>

<details>
  <summary>React 组件通信方式</summary>
  <pre>
  1. 父子组件通过props和回调函数
  2. 兄弟组件可以通过父组件传值
  3. 跨层级用usecontext
  4. Redux
  5. Mobx
  </pre>
</details>

<details>
  <summary>React合成事件</summary>

    React 自己实现了这么一套事件机制，它在 DOM 事件体系基础上做了改进，减少了内存的消耗，并且最大程度上解决了 IE 等浏览器的不兼容问题
    React 上注册的事件最终会绑定在document这个 DOM 上，而不是 React 组件对应的 DOM(减少内存开销就是因为所有的事件都绑定在 document 上，其他节点没有绑定事件)，这基于事件委托

    React 自身实现了一套事件冒泡机制，所以这也就是为什么我们 event.stopPropagation() 无效的原因。

    React 通过队列的形式，从触发的组件向父组件回溯，然后调用他们 JSX 中定义的 callback

    React 有一套自己的合成事件 SyntheticEvent，不是原生的，这个可以自己去看官网

    React 通过对象池的形式管理合成事件对象的创建和销毁，减少了垃圾的生成和新对象内存的分配，提高了性能

</details>

<details>
  <summary>React Hoc高阶组件</summary>
    在React中，高阶组件（Higher-Order Component，HOC）是一种模式，用于通过包装另一个组件来增强其功能。HOC是一种重用组件逻辑并为组件提供额外props或行为的方式。

    1. Hoc的主要作用
    2. 抽离重复代码，实现组件复用
    3. 条件渲染，渲染拦截
    4. 拦截组件的生命周期
    5. 操作props
    6. 操作组件实例，反向继承，属性代理，渲染劫持(class组件才能做到)

    一个示例：


    ```javascript
    import React from 'react';

    // 高阶组件，用于添加身份验证功能
    const withAuthentication = (WrappedComponent) => {
      return class extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            isAuthenticated: false,
          };
        }

        componentDidMount() {
          // 模拟身份验证过程
          setTimeout(() => {
            this.setState({ isAuthenticated: true });
          }, 2000);
        }

        render() {
          const { isAuthenticated } = this.state;

          // 如果已认证，渲染被包装的组件，否则显示认证中消息
          return isAuthenticated ? (
            <WrappedComponent {...this.props} />
          ) : (
            <div>正在进行身份验证，请稍候...</div>
          );
        }
      };
    };

    // 需要进行身份验证的组件
    const ProtectedComponent = (props) => {
      return <div>受保护的组件</div>;
    };

    // 使用高阶组件对受保护组件进行身份验证增强
    const AuthenticatedComponent = withAuthentication(ProtectedComponent);

    // 应用程序中的其他组件
    const App = () => {
      return (
        <div>
          <h1>应用程序</h1>
          <AuthenticatedComponent />
        </div>
      );
    };
    ```

</details>

<details>
  <summary>PureComponent、React.memo</summary>
   在 React 工作流中，如果只有父组件发生状态更新，即使父组件传给子组件的所有 Props 都没有修改，也会引起子组件的 Render 过程。从 React 的声明式设计理念来看，如果子组件的 Props 和 State 都没有改变，那么其生成的 DOM 结构和副作用也不应该发生改变。当子组件符合声明式设计理念时，就可以忽略子组件本次的 Render 过程。PureComponent 和 React.memo 就是应对这种场景的，PureComponent 是对类组件的 Props 和 State 进行浅比较，React.memo 是对函数组件的 Props 进行浅比较。
</details>

<details>
  <summary>useMemo、useCallback 实现稳定的 Props 值</summary>

如果传给子组件的派生状态或函数，每次都是新的引用，那么 PureComponent 和 React.memo 优化就会失效。所以需要使用 useMemo 和 useCallback 来生成稳定值，并结合 PureComponent 或 React.memo 避免子组件重新 Render。

useCallback 是「useMemo 的返回值为函数」时的特殊情况，是 React 提供的便捷方式。在 React Server Hooks 代码 中，useCallback 就是基于 useMemo 实现的。尽管 React Client(客户端) Hooks 没有使用同一份代码，但 useCallback 的代码逻辑和 useMemo 的代码逻辑仍是一样的。

useMemo 用于缓存计算结果，避免重复计算，而 useCallback 用于缓存回调函数，避免重复创建。

</details>

<details>
  <summary>useReducer</summary>

```javascript
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```

</details>

<details>
  <summary>自定义Hooks</summary>

```javascript
import { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

// 在组件中使用自定义的计数器Hooks
const MyComponent = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
```

</details>

<details>
  <summary>React生命周期</summary>

1. componentDidMount
   componentDidMount 方法，React 将会在组件被添加到屏幕上 （挂载） 后调用它。这里是设置数据获取、订阅监听事件或操作 DOM 节点的常见位置。

2. componentWillUnmount
   componentWillUnmount 方法，React 会在你的组件被移除屏幕（卸载）之前调用它。此方法常常用于取消数据获取或移除监听事件。

</details>

<details>
  <summary>useEffect和useLayoutEffect</summary>

useEffect 和 useLayoutEffect 都是 React 中用于处理副作用（side effects）的 Hook。副作用是指在组件渲染过程之外进行的操作，例如数据获取、订阅事件、修改 DOM 等。

useEffect 是异步执行的，它会在组件渲染完成之后执行。这意味着它不会阻塞组件的渲染过程，而是在渲染完成后，通过将副作用代码添加到浏览器的任务队列中来执行。因此，如果副作用代码不需要立即执行，而是可以稍后执行，那么使用 useEffect 是一个不错的选择。

useLayoutEffect 与 useEffect 类似，也用于处理副作用，但它是同步执行的。它会在组件渲染完成后，但在浏览器布局更新之前立即执行。这使得它更适合于需要在 DOM 更新之前进行一些计算或操作的场景。

需要注意的是，由于 useLayoutEffect 是同步执行的，如果副作用代码中包含了一些耗时操作，可能会导致页面响应性下降。因此，在使用 useLayoutEffect 时，要确保副作用代码的执行时间尽可能短，并避免阻塞页面渲染。

useLayoutEffect 应该在以下情况下使用，而不是使用 useEffect：

1. 当你需要在 DOM 更新之前进行一些操作：useLayoutEffect 在组件渲染完成后立即执行，但在浏览器布局更新之前。这使得它适合于需要在浏览器计算布局之前进行某些操作的场景，例如测量 DOM 元素的尺寸或位置。

2. 当你需要在更新后立即访问 DOM：某些情况下，你可能需要在 DOM 更新完成后立即执行某些操作。例如，你希望在更新后滚动到特定的位置或执行其他与 DOM 相关的操作。在这种情况下，使用 useLayoutEffect 可以确保你的操作在 DOM 更新完成后立即执行。

</details>

<details>
  <summary>手写useState</summary>

```javascript
function render() {
  reactDom.render(<App />, document.getElementById("root"));
  stateIndex = 0;
}

let stateArr = [];
let stateIndex = 0;
function useState(initState) {
  stateArr[stateIndex] = stateArr[stateIndex] || initState;

  function setState(newState) {
    state = newState;
    render(); // 触发更新
  }

  stateIndex++;
  return [state, setState];
}

render();
```

</details>

<details>
  <summary>Vue和React的区别</summary>

1. 学习曲线和易用性：
   Vue 更容易上手，学习成本低
2. 数据绑定：
   Vue：Vue 使用双向数据绑定，通过 v-model 指令可以轻松实现数据的双向绑定。
   React：React 采用单向数据流的概念，数据流动是单向的，通过 props 向下传递数据，通过回调函数或状态管理库来管理数据的更新。
3. Template 和 Jsx 的区别
4. 响应式更新
   Vue 使用基于依赖追踪的观察者机制，能够自动追踪数据的变化，并在数据变化时更新相关的视图。
   React 使用虚拟 DOM 和高效的渲染算法，通过比较虚拟 DOM 的差异来最小化对实际 DOM 的操作。这种方式在大规模或复杂的应用程序中表现出色，能够提供更高的性能。
5. React 生态系统庞大且成熟，有丰富的第三方库和组件可供选择。

</details>

import { makeObservable, autorun, observable, computed, action } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";

class ObservableTodoStore {
  todos = [];
  pendingRequests = 0;

  constructor() {
    makeObservable(this, {
      // 设置注解
      todos: observable,
      pendingRequests: observable,
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
    });
    autorun(() => console.log(this.report)); // 包含的可观测数据发生变化，会自动制定
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) return "<无>";
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `下一个待办："${nextTodo ? nextTodo.task : "<无>"}"。 ` +
      `进度：${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}

const observableTodoStore = new ObservableTodoStore();

const TodoList = observer(({ store }) => { // observer包裹react组件   observer 高阶组件包装器通过（简而言之）把 React 组件用 autorun 包装起来
  const onNewTodo = () => {
    store.addTodo(prompt("输入新的待办：", "请来杯咖啡"));
  };

  return (
    <div>
      {store.report}
      <ul>
        {store.todos.map((todo, idx) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <marquee>正在加载……</marquee> : null}
      <button onClick={onNewTodo}>新待办</button>
      <small>（双击待办进行编辑）</small>
      {/* <RenderCounter /> */}
    </div>
  );
});

const TodoView = observer(({ todo }) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  };

  const onRename = () => {
    todo.task = prompt("任务名称", todo.task) || todo.task;
  };

  return (
    <li onDoubleClick={onRename}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggleCompleted}
      />
      {todo.task}
      {todo.assignee ? <small>{todo.assignee.name}</small> : null}
      {/* <RenderCounter /> */}
    </li>
  );
});

ReactDOM.render(
  <TodoList store={observableTodoStore} />,
  document.getElementById("root")
);

import { makeObservable, autorun, observable, computed, action } from "mobx";

class ObservableTodoStore {
  todos = [];
  pendingRequests = 0;

  constructor() {
    makeObservable(this, { // 设置注解
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

// 修改可观测数据自动触发打印
observableTodoStore.addTodo("阅读 MobX 教程");
observableTodoStore.addTodo("试用 MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "在自己的项目中试用 MobX";
observableTodoStore.todos[0].task = "理解 MobX 教程"; // 没改变结果，report的结果所以未打印


/* 


下一个待办："阅读 MobX 教程"。 进度：0/1
2.变成响应式.js:15 下一个待办："阅读 MobX 教程"。 进度：0/2
2.变成响应式.js:15 下一个待办："试用 MobX"。 进度：1/2
2.变成响应式.js:15 下一个待办："在自己的项目中试用 MobX"。 进度：1/2

*/

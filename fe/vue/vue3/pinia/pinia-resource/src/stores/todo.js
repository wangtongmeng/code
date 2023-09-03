import { defineStore } from "../pinia";
export const useTodoStore = defineStore("todo", {
  state: () => ({ todos: [], todo: "" }),
  actions: {
    addTodo() {
      this.todos.push(this.todo);
    },
  },
});

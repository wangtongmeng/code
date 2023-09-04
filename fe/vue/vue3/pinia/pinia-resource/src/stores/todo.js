// import { defineStore } from "../pinia";
import { defineStore } from "pinia";
import { ref } from "vue";

// export const useTodoStore = defineStore("todo", {
//   state: () => ({ todos: [], todo: "" }),
//   actions: {
//     addTodo() {
//       this.todos.push(this.todo);
//     },
//   },
// });

export const useTodoStore = defineStore("todo", () => {
  // setup方法
  const todo = ref("");
  const todos = ref([]);
  function addTodo() {
    todos.value.push(todo.value);
  }
  return { todo, todos, addTodo };
});

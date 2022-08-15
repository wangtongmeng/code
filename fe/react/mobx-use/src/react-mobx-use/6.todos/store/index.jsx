import todosStore from "./todos";
export { TodoStore } from "./todos/todo";
import userStore from "./user";

export const store = { todosStore, userStore };
export default store;

import { makeAutoObservable } from "mobx";

class TodosStore {
  list = [];
  get unCompletedCount() {
    return this.list.filter((todo) => !todo.completed).length;
  }
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  add(todo) {
    this.list.push(todo);
  }
}
const todosStore = new TodosStore();
export default todosStore;

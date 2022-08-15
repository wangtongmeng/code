import { observer } from "mobx-react";
import { useRef } from "react";
import { useContext } from "react";
import StoreContext from "./context";
import { TodoStore } from "./store";

const AddTodo = observer(() => {
  const { todosStore } = useContext(StoreContext);
  const ref = useRef(null);
  return (
    <>
      <input ref={ref} type="text" />
      <button
        onClick={() => {
          const item = new TodoStore(ref.current.value);
          todosStore.add(item);
        }}
      >
        新增
      </button>
    </>
  );
});

const Todo = observer(({ todo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => todo.toggle()}
      />
      {todo.text}
    </li>
  );
});

const TodoList = observer(() => {
  const { todosStore } = useContext(StoreContext);
  return (
    <div>
      <ul>
        {todosStore.list.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
      </ul>
    </div>
  );
});
const TodoLeft = observer(() => {
  const { todosStore } = useContext(StoreContext);
  return <>未完成：{todosStore.unCompletedCount}</>;
});

export default observer(function () {
  return (
    <>
      <AddTodo />
      <TodoList />
      <TodoLeft />
    </>
  );
});

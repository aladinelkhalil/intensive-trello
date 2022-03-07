import { Todo } from "../types/Todo";

interface Props {
  todos: Todo[];
}

function TodoList({ todos }: Props) {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>
          {todo.title} -- {todo.description}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

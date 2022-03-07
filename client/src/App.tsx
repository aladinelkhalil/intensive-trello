import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
import { getTodos } from "./services/todoService";
import { addTodo } from "./services/todoService";
import { Todo } from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
    addTodo(todo);
  };

  const loadTodos = async () => {
    const { data: todos } = await getTodos();
    setTodos(todos);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

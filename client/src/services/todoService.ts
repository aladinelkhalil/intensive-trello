import axios from "axios";
import { Todo } from "../types/Todo";

const apiEndpoint = "http://localhost:8080/api/todos";

export function getTodos() {
  return axios.get<Todo[]>(apiEndpoint);
}

export function addTodo(todo: Todo) {
  return axios.post<Todo>(apiEndpoint, todo);
}

export function deleteTodo(id: string) {
  return axios.delete<Todo>(`${apiEndpoint}/${id}`);
}

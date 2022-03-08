import axios from "axios";
import { Todo } from "../types/Todo";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://intensive-trello.herokuapp.com"
    : "http://localhost:8080";

console.log(process.env.NODE_ENV);

const apiEndpoint = `${baseUrl}/api/todos`;

export function getTodos() {
  return axios.get<Todo[]>(apiEndpoint);
}

export function addTodo(todo: Todo) {
  return axios.post<Todo>(apiEndpoint, todo);
}

export function deleteTodo(id: string) {
  return axios.delete<Todo>(`${apiEndpoint}/${id}`);
}

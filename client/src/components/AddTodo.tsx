import React, { useState } from "react";
import { Todo } from "../types/Todo";

interface Props {
  onAddTodo: (todo: Todo) => void;
}

function AddTodo({ onAddTodo }: Props) {
  const emptyForm = { title: "", description: "" };
  const [formData, setFormData] = useState<Todo>(emptyForm);

  const handleChange = (field: keyof Todo, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    onAddTodo(formData);
    setFormData(emptyForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
      <button>Add Todo</button>
    </form>
  );
}

export default AddTodo;

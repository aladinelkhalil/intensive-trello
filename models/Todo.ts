import Joi from "joi";
import mongoose from "mongoose";
import { Todo } from "types/Todo";

const schema = new mongoose.Schema({
  title: String,
  description: String,
});

const Todo = mongoose.model("Todo", schema);

function validateTodo(todo: Todo) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

  return schema.validate(todo);
}

export { Todo, validateTodo as validate };

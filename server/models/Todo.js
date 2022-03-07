const Joi = require("joi");
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  description: String,
});

const Todo = mongoose.model("Todo", schema);

function validateTodo(todo) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
  });

  return schema.validate(todo);
}

exports.Todo = Todo;
exports.validate = validateTodo;

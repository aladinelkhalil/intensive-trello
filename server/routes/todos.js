const express = require("express");
const { Todo, validate } = require("../models/Todo");
const router = express.Router();

router.get("/", async (req, res) => {
  const todos = await Todo.find();
  return res.send(todos);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  let todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });

  todo = await todo.save();

  return res.send(todo);
});

router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  return res.send(todo);
});

module.exports = router;

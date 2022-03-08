import express, { Request, Response } from "express";
import { Todo, validate } from "models/Todo";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const todos = await Todo.find();
  return res.send(todos);
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.message);

  let todo = new Todo({
    title: req.body.title,
    description: req.body.description,
  });

  todo = await todo.save();

  return res.send(todo);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);
  return res.send(todo);
});

export default router;

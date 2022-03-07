const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todos = require("./routes/todos");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/todos", todos);

mongoose
  .connect("mongodb://localhost/intensive-trello")
  .then(() => console.log("Connected to Mongodb..."))
  .catch((err) => console.error("Could not connect to Mongodb", err));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));

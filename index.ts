import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import todos from "routes/todos";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/todos", todos);

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/intensive-trello")
  .then(() => console.log("Connected to Mongodb..."))
  .catch((err) => console.error("Could not connect to Mongodb", err));

const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => console.log(`Server started on port ${port}`));

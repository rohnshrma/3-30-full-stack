import express from "express";
import { config } from "dotenv";
import taskRoutes from "./routes/taskRoutes.js";

import { connectDB } from "./config/db.js";

const app = express();

config();

connectDB();

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log("server started on port : ", PORT);
});

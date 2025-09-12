import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true, minLength: 4 },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
});

const Task = new mongoose.model("task", taskSchema);

export default Task;

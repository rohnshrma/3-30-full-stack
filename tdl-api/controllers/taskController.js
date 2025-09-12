import Task from "../models/task.js";

export const GET_TASKS = (req, res) => {
  res.json({ message: "Homepage" }).status(200);
};
export const POST_TASK = async (req, res) => {
  try {
    const { title, status } = req.body;

    console.log(title, status);

    const existingTask = await Task.findOne({ title });

    console.log(existingTask);

    if (existingTask) {
      return res.json({ message: "Task Already Exists" }).status(400);
    }

    const newTask = new Task({
      title,
      status,
    });

    await newTask.save();
    console.log(newTask);

    res.json({ message: "Task Added to DB", task: newTask }).status(201);
  } catch (err) {
    console.log(err);
    return res.json({ message: "Failed to Add Task", error: err }).status(400);
  }
};

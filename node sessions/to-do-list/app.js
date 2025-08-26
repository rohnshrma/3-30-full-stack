// Loads Express, a tool that helps create a web server to handle requests
import express from "express";

// Loads Mongoose, a tool to connect and work with MongoDB (a database)
import mongoose, { mongo } from "mongoose";

// Creates a new web server app using Express
const app = express();

// Sets the port number (like a channel) where the server will listen for requests
const PORT = 3000;

// Connects to a MongoDB database called 'abcToDoListDB' running on your computer
mongoose
  .connect("mongodb://localhost:27017/abcToDoListDB")
  // If connection works, prints the database server's address (like 'localhost')
  .then((res) => {
    console.log("Connected to DB :", res.connection.host);
  })
  // If there's an error (like database not running), prints the error
  .catch((err) => {
    console.log(err);
  });

// Defines the structure (schema) for a task in the database
const taskSchema = new mongoose.Schema({
  // Each task has a 'title' (text), which must be at least 3 characters, required, and unique
  title: { type: String, minLength: 3, required: true, unique: true },
});

// Creates a 'Task' model to interact with the 'tasks' collection in the database
const Task = new mongoose.model("Task", taskSchema);

// Tells the server to serve files like style.css from a folder called 'public'
app.use(express.static("public"));

// Allows the server to understand data sent from forms (like when you add a task)
app.use(express.urlencoded({ extended: true }));

// Tells the server to use EJS for creating dynamic web pages
app.set("view engine", "ejs");

// Sets up routes for the main page ('/')
app
  .route("/")
  // Handles requests to view the to-do list (GET request)
  .get(async (req, res) => {
    try {
      // Gets all tasks from the database
      const tasks = await Task.find({});

      // If tasks exist, show the 'home' EJS page (the to-do list)
      if (tasks) {
        res.render("home", {
          // Sends today's date (e.g., '8/26/2025') to the EJS file
          today: new Date().toLocaleDateString(),
          // Sends the list of tasks, reversed so newest tasks show first
          data: tasks.reverse(),
        });
      }
    } catch (err) {
      // Prints any errors (like database issues)
      console.log(err);
    }
  })
  // Handles requests to add a new task (POST request from the form)
  .post(async (req, res) => {
    try {
      // Gets the new task text from the form (named 'new_item')
      const item = req.body.new_item;

      // Creates a new task with the entered text
      const task = new Task({
        title: item,
      });

      // Saves the task to the database
      await task.save();

      // Reloads the main page to show the updated list
      res.redirect("/");
    } catch (err) {
      // Prints errors (e.g., if the task title is too short or already exists)
      console.log(err);
    }
  });

// Commented-out code for deleting tasks (not currently used)
// app.route("/delete/:id").get((req, res) => {
//   // Gets the task index from the URL (e.g., '/delete/0')
//   const deleteId = parseInt(req.params.id);

//   // Removes the task at that index from an array (old way, not using database)
//   tasks = tasks.filter((item, index) => {
//     return index !== deleteId;
//   });
//   console.log(`after deleting item on ${deleteId} index`, tasks);

//   // Reloads the main page
//   res.redirect("/");
// });

// Starts the server on port 3000 and prints a message
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});

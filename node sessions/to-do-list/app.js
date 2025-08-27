// Loads Express, a tool (library) that helps create a web server to handle HTTP requests (like visiting a webpage or submitting a form)
import express from "express";
// Concept: Express is a popular Node.js framework that simplifies building web servers by providing tools to handle routes, requests, and responses.

// Loads Mongoose, a library that makes it easier to work with MongoDB, a NoSQL database for storing data
import mongoose, { mongo } from "mongoose";
// Concept: Mongoose provides a way to define data structures (schemas) and interact with MongoDB using JavaScript code.
// Note: The `{ mongo }` part is unused in this code and can be removed to avoid confusion.

// Creates a new web server application using Express
const app = express();
// Concept: `app` is an instance of Express, which we use to define routes (URLs) and handle requests.

// Sets the port number where the server will listen for incoming requests (like a specific radio channel)
const PORT = 3000;
// Concept: A port is a number assigned to a service on a computer. Web servers commonly use ports like 3000 for development.

// Connects to a MongoDB database named 'abcToDoListDB' running on your computer (localhost)
mongoose
  .connect("mongodb://localhost:27017/abcToDoListDB")
  // If the connection is successful, print the database server's address (e.g., 'localhost')
  .then((res) => {
    console.log("Connected to DB :", res.connection.host);
  })
  // If there's an error (e.g., MongoDB isn't running), print the error message
  .catch((err) => {
    console.log(err);
  });
// Concept: MongoDB is a database that stores data in a flexible, JSON-like format. The `connect` method links your app to the database.
// `localhost:27017` is the default address and port for MongoDB on your computer.
// `.then` and `.catch` handle promises (a way to deal with asynchronous operations like connecting to a database).

// Defines the structure (schema) for a task in the database, like a blueprint for what each task looks like
const taskSchema = new mongoose.Schema(
  {
    // Each task has a 'title' field, which is a string (text)
    title: {
      type: String, // Specifies that the title must be text
      minLength: 3, // Ensures the title is at least 3 characters long
      required: true, // Makes the title mandatory
      unique: true, // Ensures no two tasks can have the same title
    },
    // Each task has a 'status' field, which can only be "Pending" or "Completed"
    status: {
      type: String, // Status is also text
      enum: ["Pending", "Completed"], // Restricts status to these two values
      default: "Pending", // Sets "Pending" as the default value if none is provided
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' fields to track when tasks are created/updated
  }
);
// Concept: A schema defines the structure of data in MongoDB. Here, each task has a title and status, with rules to enforce data quality.

// Creates a 'Task' model to interact with the 'tasks' collection in the MongoDB database
const Task = new mongoose.model("Task", taskSchema);
// Concept: A model is like a tool that lets you create, read, update, or delete tasks in the database based on the schema.

// Tells the server to serve static files (like style.css or images) from a folder called 'public'
app.use(express.static("public"));
// Concept: Static files are files like CSS, JavaScript, or images that don’t change dynamically. The 'public' folder holds these files.

// Allows the server to understand data sent from HTML forms (e.g., when you submit a new task)
app.use(express.urlencoded({ extended: true }));
// Concept: `express.urlencoded` processes form data so the server can read it. `extended: true` allows complex data (like arrays).

// Tells the server to use EJS (Embedded JavaScript) to create dynamic web pages
app.set("view engine", "ejs");
// Concept: EJS is a templating engine that lets you mix JavaScript with HTML to create dynamic web pages (e.g., displaying a list of tasks).

// Sets up routes for the main page (the root URL, '/')
app
  .route("/")
  // Handles GET requests (when someone visits the main page)
  .get(async (req, res) => {
    try {
      // Gets all tasks from the database using the Task model
      const tasks = await Task.find({});
      // Concept: `find({})` retrieves all documents (tasks) from the 'tasks' collection. `await` waits for the database response.

      // If tasks are found, render the 'home' EJS template (a webpage)
      if (tasks) {
        res.render("home", {
          // Sends today's date (e.g., '8/26/2025') to the EJS template
          today: new Date().toLocaleDateString(),
          // Sends the list of tasks, reversed so the newest tasks appear first
          data: tasks.reverse(),
        });
        // Concept: `res.render` generates an HTML page from the 'home.ejs' file, passing data (like tasks) to display.
      }
    } catch (err) {
      // Prints any errors (e.g., database connection issues)
      console.log(err);
    }
  })
  // Handles POST requests (when someone submits a form to add a new task)
  .post(async (req, res) => {
    try {
      // Gets the form data (the 'new_item' field for the task title and 'status' for task status)
      const { new_item, status } = req.body;
      // Concept: `req.body` contains the form data sent to the server.

      // Creates a new task with the provided title and status
      const task = new Task({
        title: new_item,
        status: status,
      });

      // Saves the task to the database
      await task.save();
      // Concept: `save()` adds the new task to the MongoDB 'tasks' collection.

      // Redirects the user back to the main page to see the updated task list
      res.redirect("/");
      // Concept: `res.redirect` sends the user to another URL (here, the main page).
    } catch (err) {
      // Prints errors (e.g., if the title is too short or already exists)
      console.log(err);
    }
  });

// Commented-out code for deleting tasks (not currently active but included for reference)
// Defines a route to handle DELETE requests for a specific task (e.g., '/delete/123')
app.route("/delete/:id").get(async (req, res) => {
  try {
    // Gets the task ID from the URL (e.g., '123' from '/delete/123')
    const deleteId = req.params.id;
    // Concept: `req.params` captures dynamic parts of the URL (like the task ID).

    // Checks if the ID is a valid MongoDB ObjectId
    if (!mongoose.isValidObjectId(deleteId)) {
      console.log("Invalid object id");
      return res.redirect("/");
      // Concept: MongoDB uses special IDs (ObjectIds) for each document. This checks if the ID is valid.
    }

    // Prints the ID for debugging
    console.log(deleteId);

    // Checks if a task with the given ID exists
    const exisitingItem = await Task.findOne({ _id: deleteId });
    // Concept: `findOne` looks for a single document matching the query (here, by ID).

    // If no task is found, log a message and redirect to the main page
    if (!exisitingItem) {
      console.log("Item Not Found");
      return res.redirect("/");
    }

    // Deletes the task with the given ID
    const deletedItem = await Task.findByIdAndDelete(deleteId);
    // Concept: `findByIdAndDelete` removes a document from the database by its ID.

    // Prints the deleted task for debugging
    console.log("deleted item => ", deletedItem);

    // Redirects to the main page to show the updated list
    res.redirect("/");
  } catch (err) {
    // Prints any errors (e.g., database issues)
    console.log(err);
  }
});

// Defines a route to filter tasks by status (e.g., '/filter/Pending' or '/filter/Completed')
app.route("/filter/:status").get(async (req, res) => {
  try {
    // Gets the status from the URL (e.g., 'Pending' from '/filter/Pending')
    const { status } = req.params;

    // Gets all tasks from the database
    const tasks = await Task.find({});

    // If tasks are found, render the 'home' EJS template
    if (tasks) {
      res.render("home", {
        // Sends today's date to the EJS template
        today: new Date().toLocaleDateString(),
        // Filters tasks to only show those matching the requested status (case-insensitive), then reverses the list
        data: tasks
          .filter((task) => task.status.toLowerCase() === status.toLowerCase())
          .reverse(),
        // Concept: The `filter` method creates a new array with only tasks where the status matches.
      });
    }
  } catch (err) {
    // Prints any errors (e.g., database issues)
    console.log(err);
  }
});

// Starts the server on the specified port (3000) and prints a message when it’s running
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
// Concept: `app.listen` makes the server start listening for requests on the specified port (3000).
// When you run the app, you can visit 'http://localhost:3000' in a browser to see it.

// Import the Express framework, a popular Node.js library for building web servers and APIs.
// Express simplifies handling HTTP requests, routing, and middleware.
import express from "express";

// Initialize an Express application instance.
// 'app' is the main object used to define routes, middleware, and start the server.
const app = express();

// Define the port number where the server will listen for incoming HTTP requests.
// 3000 is a common choice for local development.
const PORT = 3000;

// Create an empty array to store tasks (the to-do list items).
// This array acts as an in-memory "database" for this simple application.
var tasks = [];

// ---- Middleware Setup ----
// Middleware are functions that process requests before they reach route handlers.

// Serve static files (e.g., CSS, JavaScript, images) from the "public" directory.
// For example, a file at "public/style.css" can be accessed at "/style.css" in the browser.
app.use(express.static("public"));

// Parse incoming request bodies with URL-encoded data (e.g., form submissions).
// 'extended: true' allows parsing of nested objects in the request body.
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS (Embedded JavaScript), a templating engine.
// EJS allows embedding JavaScript in HTML to dynamically generate web pages.
app.set("view engine", "ejs");

// ---- Route Definitions ----
// Routes define how the server responds to specific HTTP requests (e.g., GET, POST).

// Define a route for the root URL ("/") that handles both GET and POST requests.
app
  .route("/")
  // Handle GET requests to "/".
  // This renders the "home" EJS template, passing data to display.
  .get((req, res) => {
    // Render the "home.ejs" template, passing two variables:
    // - 'today': The current date formatted as a string (e.g., "8/25/2025").
    // - 'data': The tasks array, reversed to show the newest tasks first.
    res.render("home", {
      today: new Date().toLocaleDateString(),
      data: tasks.reverse(),
    });
  })
  // Handle POST requests to "/".
  // This is triggered when a form is submitted to add a new task.
  .post((req, res) => {
    // Extract the value of the "new_item" field from the form data in the request body.
    const item = req.body.new_item;
    // Add the new task to the 'tasks' array.
    tasks.push(item);
    // Log the updated tasks array to the console for debugging.
    console.log(tasks);
    // Redirect the user back to the root URL ("/"), triggering a GET request to refresh the page.
    res.redirect("/");
  });

// Define a route for DELETE functionality at "/delete/:id".
// The ":id" is a URL parameter representing the index of the task to delete.
app.route("/delete/:id").get((req, res) => {
  // Extract the "id" parameter from the URL and convert it to an integer.
  const deleteId = parseInt(req.params.id);

  // Filter the 'tasks' array to remove the task at the specified index.
  // The filter method creates a new array, keeping only elements where the condition is true.
  // Here, we keep all tasks where the index does not match 'deleteId'.
  tasks = tasks.filter((item, index) => {
    return index !== deleteId;
  });
  // Log the updated tasks array after deletion for debugging.
  console.log(`after deleting item on ${deleteId} index`, tasks);

  // Redirect the user back to the root URL ("/"), refreshing the page to show the updated task list.
  res.redirect("/");
});

// ---- Start the Server ----
// Start the Express server, making it listen for incoming requests on the specified port.
app.listen(PORT, () => {
  // This callback runs once the server starts successfully.
  // Log a message to confirm the server is running and on which port.
  console.log("Server started on port", PORT);
});

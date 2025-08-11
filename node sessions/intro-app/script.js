// Import the Express.js framework, a popular web framework for Node.js used to build web applications and APIs
import express from "express";

// Create an instance of an Express application, which will be used to define routes and handle HTTP requests
const app = express();

// Define a constant for the port number (3000) where the server will listen for incoming requests
const PORT = 3000;

// Define routes for the application

// Define a route for the root URL ("/") that handles HTTP GET requests
app.route("/").get((req, res) => {
  // Log the absolute file path of the index.html file to the console for debugging
  console.log(process.cwd() + "/pages/index.html");
  // Send the index.html file located in the "pages" directory as the response to the client
  res.sendFile(process.cwd() + "/pages/index.html");
});

// Define a route for the "/about" URL that handles HTTP GET requests
app.route("/about").get((req, res) => {
  // Log the absolute file path of the about.html file to the console for debugging
  console.log(process.cwd() + "/pages/about.html");
  // Send the about.html file located in the "pages" directory as the response to the client
  res.sendFile(process.cwd() + "/pages/about.html");
});

// Define a route for the "/contact" URL that handles HTTP GET requests
app.route("/contact").get((req, res) => {
  // Log the absolute file path of the contact.html file to the console for debugging
  console.log(process.cwd() + "/pages/contact.html");
  // Send the contact.html file located in the "pages" directory as the response to the client
  res.sendFile(process.cwd() + "/pages/contact.html");
});

// Define a catch-all route for any URL that doesn't match the above routes, using a dynamic parameter ":page"
app.route("/:page").get((req, res) => {
  // Send a plain text response "Page Not Found" for any unmatched routes
  res.send("Page Not Found");
});

// Start the Express server, making it listen for incoming requests on the specified PORT (3000)
app.listen(PORT, () => {
  // Log a message to the console indicating that the server has started and is listening on the specified port
  console.log("Server started on port", PORT);
});

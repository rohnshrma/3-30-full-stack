// Import the Express.js framework to create a web server
import express from "express";

// Import the database connection function from a configuration file
import connectDB from "./config/db.js";

// Import the User model to interact with the 'user' collection in MongoDB
import User from "./model/user.js";

// Create an instance of an Express application
const app = express();

// Define the port number where the server will listen for requests
const PORT = 3000;

// Call the connectDB function to establish a connection to the MongoDB database
connectDB();

// Middleware to serve static files (e.g., CSS, images) from the 'public' directory
app.use(express.static("public"));

// Middleware to parse incoming URL-encoded form data (e.g., from HTML forms)
// 'extended: true' allows parsing of nested objects
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS, a templating engine for rendering dynamic HTML pages
app.set("view engine", "ejs");

// Define a route for the root URL ("/")
// GET request: Renders the 'home' EJS template when the user visits the root URL
app.route("/").get((req, res) => {
  res.render("home");
});

// Define a route for the "/login" URL
app
  .route("/login")
  // GET request: Renders the 'login' EJS template when the user visits "/login"
  .get((req, res) => {
    res.render("login");
  })
  // POST request: Handles login form submission
  .post(async (req, res) => {
    try {
      // Destructure 'username' and 'password' from the form data in the request body
      const { username, password } = req.body;

      // Query the database to find a user with the provided username
      const existingUser = await User.findOne({ username: username });

      // Log the found user (or null if not found) for debugging
      console.log(existingUser);

      // If no user is found, redirect to the registration page
      if (!existingUser) {
        console.log("User not found");
        return res.redirect("/register");
      }

      // Log a message before comparing passwords for debugging
      console.log("before running match ");

      // Call the comparePassword method (defined in the User model) to verify the provided password
      const match = await existingUser.comparePassword(password);

      // Log the result of the password comparison (true/false) for debugging
      console.log(match);

      // If the password doesn't match, redirect back to the login page
      if (!match) {
        console.log("Invalid password");
        return res.redirect("/login");
      }

      // If the password matches, render the 'secrets' EJS template (e.g., a protected page)
      res.render("secrets");
    } catch (err) {
      // Log any errors that occur during the login process
      console.log("failed to login user");
    }
  });

// Define a route for the "/register" URL
app
  .route("/register")
  // GET request: Renders the 'register' EJS template when the user visits "/register"
  .get((req, res) => {
    res.render("register");
  })
  // POST request: Handles registration form submission
  .post(async (req, res) => {
    try {
      // Destructure 'username' and 'password' from the form data in the request body
      const { username, password } = req.body;

      // Log the username and password for debugging
      console.log(username, password);

      // Create a new User instance with the provided username and password
      const new_user = new User({
        username: username,
        password: password,
      });

      // Save the new user to the database (password will be hashed by the User model's pre-save hook)
      await new_user.save();

      // Log the newly created user for debugging
      console.log("new user => ", new_user);

      // Render the 'secrets' EJS template after successful registration
      res.render("secrets");
    } catch (err) {
      // Log any errors that occur during the registration process
      console.log("failed to save user to db", err);
    }
  });

// Start the Express server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message to confirm the server is running
  console.log("Server started on port ", PORT);
});

// Import the Express.js framework to create a web server
import express from "express";

// Import the database connection function from a configuration file
import connectDB from "./config/db.js";

// Import the User model to interact with the 'user' collection in MongoDB
import User from "./model/user.js";

import passport from "passport";

import { Strategy as LocalStrategy } from "passport-local";

import session from "express-session";

import { config } from "dotenv";

config();

// Create an instance of an Express application
const app = express();

// Define the port number where the server will listen for requests
const PORT = process.env.PORT;

// Call the connectDB function to establish a connection to the MongoDB database
connectDB();

function isAuthenticated(req, res, next) {
  console.log("checking auth");
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/login");
  }
}

// Middleware to serve static files (e.g., CSS, images) from the 'public' directory
app.use(express.static("public"));

// Middleware to parse incoming URL-encoded form data (e.g., from HTML forms)
// 'extended: true' allows parsing of nested objects
app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS, a templating engine for rendering dynamic HTML pages
app.set("view engine", "ejs");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, cb) => {
    try {
      console.log("local strategy running");
      const user = await User.findOne({ username });
      console.log("local strategy running =>", user);

      if (!user) {
        return cb(null, false, { message: "incorrect username" });
      }
      console.log("checking password");

      const isMatch = await user.comparePassword(password);
      console.log("checking password ? ", isMatch);

      if (!isMatch) {
        return cb(null, false, { message: "incorrect password" });
      }
      return cb(null, user);
    } catch (err) {
      return cb(err);
    }
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findById(id);
    cb(null, user);
  } catch (err) {
    cb(err);
  }
});

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
  .post(
    passport.authenticate("local", {
      successRedirect: "/secrets",
      failureRedirect: "/login",
    })
  );

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

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.redirect("/login");
      }

      // Create a new User instance with the provided username and password
      const new_user = new User({
        username,
        password,
      });

      // Save the new user to the database (password will be hashed by the User model's pre-save hook)
      await new_user.save();

      req.login(new_user, (err) => {
        if (err) return next(err);
        // Log the newly created user for debugging
        console.log("new user => ", new_user);
        res.redirect("/secrets");
      });
    } catch (err) {
      // Log any errors that occur during the registration process
      console.log("failed to save user to db", err);
    }
  });

app.route("/secrets").get(isAuthenticated, (req, res) => {
  res.render("secrets");
});

// Start the Express server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message to confirm the server is running
  console.log("Server started on port ", PORT);
});

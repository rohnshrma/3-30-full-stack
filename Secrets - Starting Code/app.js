// Import the Express.js framework to create a web server
import express from "express";
// Concept: Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web servers and APIs. The 'import' syntax is used in ES modules to bring in the Express library.

// Import the database connection function from a configuration file
import connectDB from "./config/db.js";
// Concept: The 'connectDB' function (assumed to be defined in './config/db.js') establishes a connection to a MongoDB database. Modularizing the database connection logic keeps the code organized.

// Import the User model to interact with the 'user' collection in MongoDB
import User from "./model/user.js";
// Concept: The User model is a Mongoose schema/model that defines the structure of user documents in the MongoDB 'user' collection and provides methods to interact with it (e.g., saving, querying).

// Import Passport.js for authentication
import passport from "passport";
// Concept: Passport.js is a middleware for Node.js that simplifies authentication (e.g., username/password, Google OAuth). It supports various "strategies" for different authentication methods.

// Import specific authentication strategies for Passport
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// Concept: Passport strategies define how authentication is performed. 'LocalStrategy' handles username/password authentication, while 'GoogleStrategy' enables OAuth-based login with Google accounts.

// Import express-session to manage user sessions
import session from "express-session";
// Concept: Sessions allow the server to store user data (e.g., login state) across requests. 'express-session' creates a session middleware to manage this.

// Import dotenv to load environment variables from a .env file
import { config } from "dotenv";
// Concept: The 'dotenv' package loads environment variables (e.g., API keys, database URLs) from a '.env' file into 'process.env', keeping sensitive data out of the codebase.

// Load environment variables by calling the config function
config();
// Concept: This initializes dotenv, making variables like PORT, SESSION_SECRET, GOOGLE_CLIENT_ID, etc., available via 'process.env'.

// Create an instance of an Express application
const app = express();
// Concept: The 'express()' function creates a new Express application instance, which is used to define routes, middleware, and server behavior.

// Define the port number where the server will listen for requests
const PORT = process.env.PORT;
// Concept: The port is retrieved from environment variables (e.g., set in '.env'). If not set, it could default to a value like 3000, but here it’s assumed to be defined.

// Call the connectDB function to establish a connection to the MongoDB database
connectDB();
// Concept: This executes the database connection logic (likely using Mongoose) to connect to MongoDB. It’s called early to ensure the database is ready before handling requests.

// Middleware to check if a user is authenticated
function isAuthenticated(req, res, next) {
  console.log("checking auth");
  // Concept: This logs a message for debugging to track when authentication checks occur.
  console.log(req.isAuthenticated());
  // Concept: 'req.isAuthenticated()' is a Passport.js method that returns true if the user is logged in (has a valid session).
  if (req.isAuthenticated()) {
    return next();
    // Concept: If authenticated, 'next()' passes control to the next middleware or route handler.
  } else {
    res.redirect("/login");
    // Concept: If not authenticated, the user is redirected to the '/login' route to log in.
  }
}
// Concept: This is a custom middleware function used to protect routes by ensuring only authenticated users can access them.

// Middleware to serve static files (e.g., CSS, images) from the 'public' directory
app.use(express.static("public"));
// Concept: 'express.static' serves static files (e.g., HTML, CSS, images) from the specified directory ('public'). For example, a file at 'public/style.css' can be accessed at '/style.css'.

// Middleware to parse incoming URL-encoded form data (e.g., from HTML forms)
app.use(express.urlencoded({ extended: true }));
// Concept: This middleware parses form data sent via POST requests (e.g., from <form> submissions). 'extended: true' allows parsing of nested objects in the form data.

// Set the view engine to EJS, a templating engine for rendering dynamic HTML pages
app.set("view engine", "ejs");
// Concept: EJS (Embedded JavaScript) is a templating engine that allows embedding JavaScript in HTML to generate dynamic content. This sets EJS as the default view engine for rendering templates.

// Configure session middleware for managing user sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    // Concept: The 'secret' is a key used to sign the session ID cookie, ensuring security. It’s stored in an environment variable for safety.
    resave: false,
    // Concept: Prevents resaving the session to the store if it hasn’t changed, improving performance.
    saveUninitialized: false,
    // Concept: Prevents saving a session that is new but not modified, reducing unnecessary storage.
  })
);
// Concept: This middleware creates and manages sessions, storing user data (e.g., authentication state) in memory or a session store.

// Initialize Passport.js middleware
app.use(passport.initialize());
// Concept: This sets up Passport.js to handle authentication within the Express app.

// Enable Passport to use session-based authentication
app.use(passport.session());
// Concept: This allows Passport to manage user sessions, enabling persistent login sessions across requests.

// Configure Passport's LocalStrategy for username/password authentication
passport.use(
  new LocalStrategy(async (username, password, cb) => {
    // Concept: LocalStrategy authenticates users based on a username and password provided in a form.
    try {
      console.log("local strategy running");
      // Concept: Debugging log to confirm the strategy is being executed.
      const user = await User.findOne({ username });
      // Concept: Queries the MongoDB 'user' collection for a user with the provided username.
      console.log("local strategy running =>", user);
      // Concept: Debugging log to inspect the retrieved user object.

      if (!user) {
        return cb(null, false, { message: "incorrect username" });
        // Concept: If no user is found, authentication fails, and a message is passed to Passport’s callback.
      }
      console.log("checking password");
      // Concept: Debugging log to track password verification.

      const isMatch = await user.comparePassword(password);
      // Concept: Assumes the User model has a 'comparePassword' method (e.g., using bcrypt) to check if the provided password matches the stored hashed password.
      console.log("checking password ? ", isMatch);
      // Concept: Debugging log to confirm the password comparison result.

      if (!isMatch) {
        return cb(null, false, { message: "incorrect password" });
        // Concept: If the password doesn’t match, authentication fails with an error message.
      }
      return cb(null, user);
      // Concept: If authentication succeeds, the user object is passed to Passport for session management.
    } catch (err) {
      return cb(err);
      // Concept: If an error occurs (e.g., database issue), it’s passed to Passport’s callback.
    }
  })
);

// Configure Passport’s GoogleStrategy for OAuth-based authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      // Concept: The Google OAuth client ID, stored in an environment variable, identifies the app to Google.
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // Concept: The client secret authenticates the app with Google’s OAuth servers.
      callbackURL: "/auth/google/callback",
      // Concept: The URL Google redirects to after authentication, handled by the app.
    },
    async (accessToken, refreshToken, profile, cb) => {
      // Concept: This callback is executed after Google authenticates the user, providing tokens and profile data.
      console.log("Google Callback Triggered");
      // Concept: Debugging log to confirm the Google OAuth callback is running.
      try {
        let user = await User.findOne({
          $or: [
            { googleId: profile.id },
            { username: profile.emails[0].value },
          ],
        });
        // Concept: Queries the database for a user with either the Google ID or email from the Google profile.

        if (!user) {
          user = new User({
            googleId: profile.id,
            username: profile.emails[0].value,
            name: profile.displayName,
          });
          // Concept: If no user exists, create a new user with Google’s profile data (ID, email, name).
          await user.save();
          // Concept: Save the new user to the MongoDB database.
        } else if (!user.googleId) {
          user.googleId = profile.id;
          user.name = user.name || profile.displayName;
          await user.save();
          // Concept: If a user exists with the email but no Google ID, link the Google ID and update the name if missing.
        }

        return cb(null, user);
        // Concept: Pass the user object to Passport for session management.
      } catch (err) {
        console.log("Error in google callback =>", err);
        // Concept: Debugging log for errors during Google authentication.
        return cb(err);
        // Concept: Pass any errors to Passport’s callback.
      }
    }
  )
);

// Serialize user data into the session
passport.serializeUser((user, cb) => {
  cb(null, user._id);
  // Concept: Serialization converts the user object into a unique identifier (here, MongoDB’s '_id') stored in the session.
});

// Deserialize user data from the session
passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findById(id);
    // Concept: Retrieves the full user object from the database using the '_id' stored in the session.
    cb(null, user);
    // Concept: Passes the user object to Passport for use in 'req.user'.
  } catch (err) {
    cb(err);
    // Concept: Passes any errors (e.g., database issues) to Passport.
  }
});

// Define a route for the root URL ("/")
app.route("/").get(isAuthenticated, (req, res) => {
  res.render("home");
  // Concept: If the user is authenticated (via 'isAuthenticated' middleware), render the 'home.ejs' template.
});

// Define a route for the "/login" URL
app
  .route("/login")
  // GET request: Renders the 'login' EJS template
  .get((req, res) => {
    res.render("login");
    // Concept: Displays the login page (login.ejs) when the user visits '/login'.
  })
  // POST request: Handles login form submission
  .post(
    passport.authenticate("local", {
      successRedirect: "/secrets",
      // Concept: If authentication succeeds, redirect to the '/secrets' route.
      failureRedirect: "/login",
      // Concept: If authentication fails, redirect back to the '/login' route.
    })
  );
// Concept: The 'passport.authenticate("local")' middleware uses the LocalStrategy to verify the username and password.

// Define a route for the "/register" URL
app
  .route("/register")
  // GET request: Renders the 'register' EJS template
  .get((req, res) => {
    res.render("register");
    // Concept: Displays the registration page (register.ejs) when the user visits '/register'.
  })
  // POST request: Handles registration form submission
  .post(async (req, res) => {
    try {
      // Destructure 'username' and 'password' from the form data in the request body
      const { username, password } = req.body;
      // Concept: 'req.body' contains form data parsed by 'express.urlencoded' middleware.

      // Log the username and password for debugging
      console.log(username, password);
      // Concept: Debugging to verify the received form data.

      const existingUser = await User.findOne({ username });
      // Concept: Check if a user with the provided username already exists in the database.
      if (existingUser) {
        return res.redirect("/login");
        // Concept: If the username is taken, redirect to the login page.
      }

      // Create a new User instance with the provided username and password
      const new_user = new User({
        username,
        password,
      });
      // Concept: Instantiate a new User document. The password is assumed to be hashed by a pre-save hook in the User model (e.g., using bcrypt).

      // Save the new user to the database
      await new_user.save();
      // Concept: Persist the new user to MongoDB. The pre-save hook likely hashes the password before saving.

      req.login(new_user, (err) => {
        // Concept: Programmatically log in the newly registered user using Passport’s 'req.login' method.
        if (err) return next(err);
        // Concept: Handle any errors during login.
        // Log the newly created user for debugging
        console.log("new user => ", new_user);
        res.redirect("/secrets");
        // Concept: Redirect to the '/secrets' route after successful registration and login.
      });
    } catch (err) {
      // Log any errors that occur during the registration process
      console.log("failed to save user to db", err);
      // Concept: Debugging log for errors (e.g., database issues).
    }
  });

// Define a route for initiating Google OAuth authentication
app
  .route("/auth/google")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));
// Concept: When the user visits '/auth/google', Passport’s GoogleStrategy redirects them to Google’s OAuth login page, requesting access to their profile and email.

// Define a route for handling the Google OAuth callback
app.route("/auth/google/callback").get(
  passport.authenticate("google", {
    successRedirect: "/secrets",
    // Concept: If Google authentication succeeds, redirect to '/secrets'.
    failureRedirect: "/login",
    // Concept: If authentication fails, redirect to '/login'.
  })
);
// Concept: This route handles the callback from Google after the user authenticates, completing the OAuth flow.

// Define a route for the "/secrets" URL
app.route("/secrets").get(isAuthenticated, (req, res) => {
  res.render("secrets");
  // Concept: If the user is authenticated, render the 'secrets.ejs' template (a protected page).
});

// Define a route for logging out
app.route("/logout").get((req, res, next) => {
  req.logout((err) => {
    // Concept: 'req.logout' is a Passport method that terminates the user’s session, logging them out.
    if (err) {
      return next(err);
      // Concept: Handle any errors during logout.
    }
    res.redirect("/login");
    // Concept: After logout, redirect to the login page.
  });
});

// Start the Express server and listen for incoming requests on the specified port
app.listen(PORT, () => {
  // Log a message to confirm the server is running
  console.log("Server started on port ", PORT);
  // Concept: The server starts listening on the specified port, and this callback confirms it’s running.
});

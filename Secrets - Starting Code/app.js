import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import bcrypt from "bcryptjs";

const app = express();
const PORT = 3000;

// connect to local db
connectDB();

// user schema (blueprint)
const userSchema = new mongoose.Schema({
  username: { type: "String", required: true, unique: true, minLength: 8 },
  password: { type: "String", required: true, minLength: 6 },
});

// model (collection)
const User = new mongoose.model("user", userSchema);

// middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// routes

app.route("/").get((req, res) => {
  res.render("home");
});
app
  .route("/login")
  .get((req, res) => {
    res.render("login");
  })
  .post(async (req, res) => {
    try {
      const { username, password } = req.body;

      // comparing hashed password with the incoming password
      const existingUser = await User.findOne({ username: username }); // returns true or false

      if (!existingUser) {
        console.log("User not found");
        return res.redirect("/register");
      }

      const match = await bcrypt.compare(password, existingUser.password);

      if (!match) {
        console.log("Invalid password");
        return res.redirect("/login");
      }
      res.render("secrets");
    } catch (err) {
      console.log("failed to login user");
    }
  });

app
  .route("/register")
  .get((req, res) => {
    res.render("register");
  })
  .post(async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(username, password);

      // use bcrypt to hash password
      var hash = await bcrypt.hash(password, 11);

      const new_user = new User({
        username: username,
        password: hash,
      });

      await new_user.save();

      console.log("new user => ", new_user);

      res.render("secrets");
    } catch (err) {
      console.log("failed to save user to db", err);
    }
  });

app.listen(PORT, () => {
  console.log("Server started on port ", PORT);
});

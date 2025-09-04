import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import md5 from "md5";

const app = express();
const PORT = 3000;

console.log(md5("hello world"));

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

      const existingUser = await User.findOne({ username: username });

      if (!existingUser) {
        console.log("User not found");
        return res.redirect("/register");
      }

      if (existingUser.password === md5(password)) {
        res.render("secrets");
      }
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

      const new_user = new User({
        username: username,
        password: md5(password),
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

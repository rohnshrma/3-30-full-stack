import express from "express";

const app = express();

const PORT = 3000;

// middlewares

// load static files e.g., css , images
app.use(express.static("public"));

// read incoming json data
app.use(express.urlencoded({ extended: true }));

// creating your own middlewares
app.use((req, res, next) => {
  console.log("middlware running");
  console.log(req.url);
  next();
});

// Routes

app.route("/").get((req, res) => {
  res.sendFile(process.cwd() + "/pages/index.html");
});

app.route("/about").get((req, res) => {
  res.sendFile(process.cwd() + "/pages/about.html");
});

app
  .route("/contact")
  .get((req, res) => {
    res.sendFile(process.cwd() + "/pages/contact.html");
  })
  .post((req, res) => {
    console.log(req.body);
    res.send(`Thanx for submitting the form , ${req.body.email_address}`);
  });

app.route("/:page").get((req, res) => {
  res.send("Page Not Found");
});

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});

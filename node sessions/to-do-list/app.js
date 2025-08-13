import express from "express";
const app = express();
const PORT = 3000;

const tasks = [];

// middlwares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// routes

app
  .route("/")
  .get((req, res) => {
    res.render("home", {
      today: new Date().toLocaleDateString(),
      data: tasks,
    });
  })
  .post((req, res) => {
    const item = req.body.new_item;
    tasks.push(item);
    console.log(tasks);
    res.redirect("/");
  });

// localhost

app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});

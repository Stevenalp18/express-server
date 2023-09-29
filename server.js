const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(200);
  // res.download("server.js");
  // res.json({ message: "Error" });
  res.render("index", { text: "world" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});

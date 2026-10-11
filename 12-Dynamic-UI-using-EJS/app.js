//core module
const path = require("path");

//external module
const express = require("express");

//local module
const userRouter = require("./router/userRouter");
const { hostRouter } = require("./router/hostRouter");
const rootDir = require("./utils/pathUtils");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());

app.use(express.static(path.join(rootDir, "public")));

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "page not found" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});

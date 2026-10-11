//core module
const path = require("path");

//external module
const express = require("express");

//local module
const userRouter = require("./router/userRouter");
const hostRouter = require("./router/hostRouter");
const rootDir = require("./utils/pathUtils");

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use("/host", hostRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});

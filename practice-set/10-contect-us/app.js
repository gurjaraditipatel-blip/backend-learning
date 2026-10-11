//external module
const express = require("express");

//core module
const path = require("path");

//local module
const rootDir = require("./utils/pathUtils");
const homeRouter = require("./routes/homeRouter");
const contectRouter = require("./routes/contectRouter");

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contectRouter);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});

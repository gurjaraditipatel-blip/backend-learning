//external module
const express = require("express");

//core module
const path = require("path");

//local module
const rootDir = require("../utils/pathUtils");

const contectRouter = express.Router();

contectRouter.get("/contect-us", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contect-us.html"));
});
contectRouter.post("/contect-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contect-success.html"));
});

module.exports = contectRouter;

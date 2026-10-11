//core module
const path = require("path");

//external module
const express = require("express");
const hostRouter = express.Router();

//local module
const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.render("addHome", { pageTitle: "add home to airbnb" });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("homeAdded", { pageTitle: "home Added succesfully" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;

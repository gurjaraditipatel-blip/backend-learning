//core module
//const http = require("http");

//External module
const express = require("express");

//local module
const requestHandler = require("./user");

const app = express();

app.get("/", (req, res, next) => {
  console.log("Came in 1st middleware", req.url, req.method);
  //res.send("<p>Welcome to 1st middleware</p>");//error send means end
  next();
});

app.post("/submit-details", (req, res, next) => {
  console.log("Came in 2nd middleware", req.url, req.method);
  res.send("<p>Welcome to coplete coding node js</p>");
});

app.use("/", (req, res, next) => {
  console.log("Came in another middleware", req.url, req.method);
  res.send("<p>Welcome to another middleware</p>");
});

//const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server runnig on address http://localhost:${PORT}`);
});

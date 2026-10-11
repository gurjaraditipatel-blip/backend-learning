const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("2nd dummy middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("3rd dummy middleware", req.url, req.method);
//   res.send("<h1>welcome to complete coding</h1>");
// });

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to complete coding</h1>`);
});

app.get("/contect-us", (req, res, next) => {
  console.log("Handling /contect-us for GET", req.url, req.method);
  res.send(`
    <h1>plz give your details here</h1>
    <form action="/contect-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name"/>
      <input type="email" name="email" placeholder="Enter your email"/>
      <input type="Submit"/>
    </form>
    `);
});

app.post("/contect-us", (req, res, next) => {
  console.log("Handling/contect-us for POST", req.url, req.method);

  res.send(`<h1>We will contect you</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
});

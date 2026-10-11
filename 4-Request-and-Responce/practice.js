const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/home") {
    res.write("<h1>welcome home</h1>");
    return res.end();
  } else if (req.url === "/Men") {
    res.write("<h1>welcome Men</h1>");
    return res.end();
  } else if (req.url === "/Women") {
    res.write("<h1>welcome Women</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>welcome kids</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>welcome cart</h1>");
    return res.end();
  }

  res.write(`
      <html lang="en">
  <head>
    <title>Myntra</title>
  </head>
  <body>
    <head>
      <nav>
        <li><a href="/home">home</a></li>
        <li><a href="/Men">Men</a></li>
        <li><a href="/Women">Women</a></li>
        <li><a href="/kids">kids</a></li>
        <li><a href="/cart">cart</a></li>
      </nav>
    </head>
  </body>
</html>`);
  res.end();
});
server.listen(3000, () => {
  console.log("server running on addres http://localhost:3000");
});

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "Text/html");
    res.write("</html>");
    res.write("<head><title>Complite coding</title></head>");
    res.write("<body><h1>welcome to home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "Text/html");
    res.write("</html>");
    res.write("<head><title>Complite coding</title></head>");
    res.write("<body><h1>checkout produts</h1></body>");
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-Type", "Text/html");
  res.write("</html>");
  res.write("<head><title>Complite coding</title></head>");
  res.write("<body><h1>Like/share/subscribe</h1></body>");
  res.write("</html>");
  return res.end();
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
}); //listen krega req ko  3000 is port no.

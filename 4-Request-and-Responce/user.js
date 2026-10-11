const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "Text/html");
    res.write("</html>");
    res.write("<head><title>Complite coding</title></head>");
    res.write("<body><h1>Enter your details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter name"><br>',
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<br><input type="submit" value="submit">');
    res.write("</form>");

    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user.txt", "aditi patel");
    res.statusCode = 302;
    res.setHeader("Location", "/");
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

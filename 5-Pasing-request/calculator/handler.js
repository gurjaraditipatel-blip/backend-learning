const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "Text/html");
    res.write(`<html>
         <head><title>practice set</title></head>
         <body>
            <h1>Welcome to calculator:</h1>
             <a href="/calculator">Go to calculator</a>
      </body>
     </html> `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "Text/html");
    res.write(`<html>
         <head><title>practice set</title></head>
         <body>
            <h>here is the calculator:</h1>
            <form action="/calculator-result" method="POST">
              <input type ="text" placeholder="first num" name="first"/>
              <input type ="text" placeholder="second num" name="second"/>
              <input type="submit" value="sum"/>
            </form>
      </body>
     </html> `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculator-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }
  res.setHeader("Content-Type", "Text/html");
  res.write(`<html>
         <head><title>practice set</title></head>
         <body>
            <h1>404 page does not exist:</h1>
             <a href="/calculator">Go to home</a>
      </body>
     </html> `);
  return res.end();
};
exports.requestHandler = requestHandler;

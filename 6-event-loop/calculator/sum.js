const sumRequestHandler = (req, res) => {
  console.log("in sum req handler", req.url);
  console.log("1");
  const body = [];
  let result;
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2");
  });

  req.on("end", () => {
    console.log("3");
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log(result);

    return res.end();
  });
  res.setHeader("Content-Type", "Text/html");
  console.log("4");
  res.write(`<html>
         <head><title>practice set</title></head>
         <body>
            <h1>your sum is: ${result}</h1>
             
      </body>
     </html> `);
};
exports.sumRequestHandler = sumRequestHandler;

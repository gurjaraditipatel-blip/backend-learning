const http = require("http");

const server = http.createServer((req, res) => {
  //server is objest that fuction return
  console.log(req);
  process.exit(); //stops event loop
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on address http://localhost:${PORT}`);
}); //listen krega req ko  3000 is port no.

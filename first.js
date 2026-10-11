console.log("aditi is the best");
const fs = require("fs");
fs.writeFile("output,txt", "writing File", (err) => {
  if (err) console.log("erroe occurred");
  else console.log("File written successfully");
});

const http = require("http");

const server = http
  .createServer((req, res) => {
    console.log("server running!");
    res.end("<h1>Everything working!</h1>");
  })
  .listen(5000);

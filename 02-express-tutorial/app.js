const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Everything working!</h1>");
    res.end();
  })
  .listen(5000);

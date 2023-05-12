const http = require("http");
const { readFileSync } = require("fs");

//content
//1 - home
const homeHTML = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogo = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
//2 - contants
const contatsHTML = readFileSync("./sections/contats.html");

const server = http
  .createServer((req, res) => {
    const url = req.url;
    //we can also add more type of files to be sent to the user's browser, we can send scripts, css text, logos and so on... (example below)
    //this happens because we reference this files in our html file but the same has to be sent individually
    if (url === "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homeHTML);
      res.end();
    } else if (url === "/styles.css") {
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyles);
      res.end();
    } else if (url === "/logo.svg") {
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(homeLogo);
      res.end();
    } else if (url === "/browser-app.js") {
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeLogic);
      res.end();
    } else if (url === "/contats") {
      res.writeHead(200, { "content-type": "text/html" });
      res.write(contatsHTML);
      res.end();
    } else {
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>This page does not exists!</h1>");
      res.end();
    }
  })
  .listen(5000, () => {
    console.log("project running on: http://localhost:5000");
  });

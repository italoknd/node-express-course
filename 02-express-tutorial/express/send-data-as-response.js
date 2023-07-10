const express = require("express");
const path = require("path");
const app = express();

app.use(express.static('./public'))

app.get("/contacts", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../sections/contats.html'))
});

app.get("/navbar", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
});

app.all("*", (req, res) => {
  res
    .status(404)
    .sendFile(path.resolve(__dirname, '../sections/error-page.html'));
});

app.listen(5000, () => {
  console.log("server running on http://localhost:5000");
});

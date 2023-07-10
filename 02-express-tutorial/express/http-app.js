const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>This is a home page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>This is an about page</h1>");
});

app.all("*", (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>')
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`server running on: http://localhost:${PORT}`);
});

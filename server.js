const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/upload", (req, res) => {
  res.send("Upload your videos here");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});

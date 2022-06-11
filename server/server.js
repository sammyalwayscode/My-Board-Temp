const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
require("./config/db");

app.get("/", (req, res) => {
  res.status(200).send("Server Up... 😊");
});

app.listen(PORT, () => {
  console.log(`Server Port: ${PORT}`);
});

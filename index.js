require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Welcome Node.js เวิร์ล!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

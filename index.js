const express = require("express");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.listen(port, () => {
  console.log("listening on port", port);
});

app.get("/", (req, res) => {
  res.status(200).send("Random User API server is running");
});

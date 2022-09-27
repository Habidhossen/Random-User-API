// Import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;
const usersRouter = require("./routers/users.route");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Listening Server
app.listen(port, () => {
  console.log("listening on port", port);
});

// Home Route
app.get("/", (req, res) => {
  res.status(200).send("Random User API server is running");
});

// User Route
app.use("/user", usersRouter);

// If Route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// if Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

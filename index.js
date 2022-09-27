const express = require("express");
const cors = require("cors");
require("dotenv").config();

// DECLARE PORT
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(cors());

const userDate = [
  {
    id: "1",
    name: "John",
    gender: "male",
    contact: "01245",
    address: "XYZ Street",
    photoURL: "http://example.com",
  },
  {
    id: "2",
    name: "John",
    gender: "male",
    contact: "01245",
    address: "XYZ Street",
    photoURL: "http://example.com",
  },
  {
    id: "3",
    name: "John",
    gender: "male",
    contact: "01245",
    address: "XYZ Street",
    photoURL: "http://example.com",
  },
];

// LISTENING SERVER
app.listen(port, () => {
  console.log("listening on port", port);
});

// HOME ROUTE
app.get("/", (req, res) => {
  res.status(200).send("Random User API server is running");
});

// IF ROUTE NOT FOUND
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// IF SERVER ERROR
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

app.get("/user", (req, res) => {
  res.status(200).json(userDate);
});

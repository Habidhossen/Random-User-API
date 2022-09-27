let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

// get random user
const getRandomUser = (req, res) => {
  let randomUser = users[Math.floor(Math.random() * users.length)]; // create random user from users array
  res.status(200).json(randomUser);
};

// get all user
const getAllUser = (req, res) => {
  res.status(200).json(users);
};

// create a new user
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    gender: req.body.gender,
    contact: req.body.contact,
    address: req.body.address,
    photoURL: req.body.photoURL,
  };
  users.push(newUser);
  res.status(200).json(newUser);
};

module.exports = { getRandomUser, getAllUser, createUser };

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
  res.status(201).json(newUser);
};

// update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, gender, contact, address, photoURL } = req.body;
  users
    .filter((user) => userId === user.id)
    .map((selectedUser) => {
      selectedUser.name = name;
      selectedUser.gender = gender;
      selectedUser.contact = contact;
      selectedUser.address = address;
      selectedUser.address = address;
      selectedUser.photoURL = photoURL;
    });
  res.status(200).json(users);
};

// update multiple user
const updateMultipleUser = (req, res) => {
  res.status(200).json(users);
};

// delete user
const deleteUser = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);
  res.status(200).json(users);
};

module.exports = {
  getRandomUser,
  getAllUser,
  createUser,
  updateUser,
  updateMultipleUser,
  deleteUser,
};

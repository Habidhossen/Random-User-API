const { v4: uuidv4 } = require("uuid");

let users = [
  {
    id: uuidv4(),
    name: "John",
    gender: "male",
    contact: "01245",
    address: "XYZ Street",
    photoURL: "http://example.com",
  },
  {
    id: uuidv4(),
    name: "Doe",
    gender: "male",
    contact: "01245",
    address: "XYZ Street",
    photoURL: "http://example.com",
  },
  {
    id: uuidv4(),
    name: "Jack",
    gender: "male",
    contact: "01245",
    address: "XYZ Street",
    photoURL: "http://example.com",
  },
];

module.exports = users;

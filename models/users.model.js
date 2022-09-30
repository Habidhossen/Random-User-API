const { v4: uuidv4 } = require("uuid");

let users = [
  {
    id: uuidv4(),
    name: "John",
    gender: "Male",
    contact: "01245",
    address: "XYZ Street",
    photoURL: "http://example.com",
  },
  {
    id: uuidv4(),
    name: "Eliana",
    gender: "Female",
    contact: "88524",
    address: "ABC Street",
    photoURL: "http://example.com",
  },
];

module.exports = users;

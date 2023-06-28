const { User } = require('../models');

const userData = [
  {
    username: "TestTesterson",
    email: "test@email.com",
    password: "password1234"
  },
  {
    username: "UserUsererson",
    email: "user@email.com",
    password: "password1234"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

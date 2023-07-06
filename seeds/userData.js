const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: "TestTesterson",
    email: "test@email.com",
    password: "password1234"
  },
  {
    id: 2,
    username: "UserUsererson",
    email: "user@email.com",
    password: "password1234"
  },
];

const seedUser = () => User.bulkCreate(userData , {individualHooks: true, returning: true} );

module.exports = seedUser;

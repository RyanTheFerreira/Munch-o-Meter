const sequelize = require('../config/connection');

const seedFood = require('./foodData');
const seedUser = require('./userData');

/*
const userData = require('./userData.json');
const { User } = require('../models');
*/

const seedAll = async () => {
  await sequelize.sync({ force: true });
  /*
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  */
 
  await seedUser();
  await seedFood();

  process.exit(0);
};

seedAll();
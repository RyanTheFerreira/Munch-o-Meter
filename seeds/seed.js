const sequelize = require('../config/connection');

const seedFood = require('./foodData');

const userData = require('./userData.json');
const { User } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedFood();

  process.exit(0);
};

seedAll();
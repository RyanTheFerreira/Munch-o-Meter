const { FoodInfo } = require('../models');

const foodData = [
  {
    name: 'Apple',
    serving_amount: '1 medium',
    date_time: '2022/02/01',
    meal_type: 'Breakfast',
    user_id: 1,
  },
  {
    name: 'Chicken Breast',
    serving_amount: '4 oz',
    date_time: '2022/02/01',
    meal_type: 'Lunch',
    user_id: 1,
  },
  {
    name: 'Salmon',
    serving_amount: '6 oz',
    date_time: '2022/02/01',
    meal_type: 'Dinner',
    user_id: 1,
  },
  {
    name: 'Oatmeal',
    serving_amount: '1 cup',
    date_time: '2022/02/02',
    meal_type: 'Breakfast',
    user_id: 2,
  },
  {
    name: 'Greek Salad',
    serving_amount: '2 cups',
    date_time: '2022/02/02',
    meal_type: 'Lunch',
    user_id: 2,
  },
  {
    name: 'Grilled Steak',
    serving_amount: '8 oz',
    date_time: '2022/02/02',
    meal_type: 'Dinner',
    user_id: 1,
  },
  {
    name: 'Banana',
    serving_amount: '1 medium',
    date_time: '2022/02/02',
    meal_type: 'Snack',
    user_id: 1,
  },
  {
    name: 'Pasta',
    serving_amount: '2 cups',
    date_time: '2022/02/03',
    meal_type: 'Dinner',
    user_id: 1,
  },
  {
    name: 'Oatmeal',
    serving_amount: '1 cup',
    date_time: '2023-06-21',
    meal_type: 'Breakfast',
    user_id: 2,
  },
  {
    name: 'Greek Salad',
    serving_amount: '2 cups',
    date_time: '2023-06-22',
    meal_type: 'Lunch',
    user_id: 2,
  },
  {
    name: 'Pasta',
    serving_amount: '2 cups',
    date_time: '2023-06-23',
    meal_type: 'Dinner',
    user_id: 2,
  },
  {
    name: 'Yogurt',
    serving_amount: '1 cup',
    date_time: '2023-06-24',
    meal_type: 'Snack',
    user_id: 2,
  },
  {
    name: 'Chicken Wrap',
    serving_amount: '1 wrap',
    date_time: '2023-06-25',
    meal_type: 'Lunch',
    user_id: 2,
  },
  {
    name: 'Salmon',
    serving_amount: '6 oz',
    date_time: '2023-06-26',
    meal_type: 'Dinner',
    user_id: 2,
  },
  {
    name: 'Fruit Smoothie',
    serving_amount: '1 cup',
    date_time: '2023-06-27',
    meal_type: 'Snack',
    user_id: 2,
  },
];

const seedFood = () => FoodInfo.bulkCreate(foodData);

module.exports = seedFood;

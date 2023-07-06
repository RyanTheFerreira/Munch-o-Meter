const router = require('express').Router();
const fetch = require('node-fetch');
const { FoodInfo } = require('../../models');
const { response } = require('express');

router.get('/nutrition', async (req, res) => {
  
  const { query } = req.query;
  let response = {};
  console.log(query);
  try {

    response = await fetch('https://api.calorieninjas.com/v1/nutrition?query=' + query,{
      headers: {
        'X-Api-Key': process.env.CNINJA_API
      },
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  };
  const result = await response.json();
  res.status(200).json(result);
});

router.post('/addfood', async (req, res) => {
  try {
    const { name, serving_amount, date_time, meal_type } = req.body;
    const foodData = await FoodInfo.create({name, serving_amount, date_time, meal_type, user_id: req.session.user_id});

    res.status(200).json(foodData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/history/:id', async (req, res) => {
  try {
    userId = req.params.id;
    const foodData = await FoodInfo.findAll({
      where: {user_id: userId},
      attributes: { exclude: ['id'] },
      order: [['date_time', 'DESC']],
    });

    res.status(200).json(foodData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
const router = require('express').Router();
const fetch = require('node-fetch');
const { FoodInfo } = require('../../models');

router.get('/nutrition', async (req, res) => {
  
  const { query } = req.query;
  const result = {};

  try {

    fetch({
      url: 'https://api.calorieninjas.com/v1/nutrition?query=' + query,
      headers: {
        'X-Api-Key': process.env.CNINJA_APIgit
      },
    }, function (error, response, body) {
      if (error) return console.error('Request failed:', error);
      else if (response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
      else result = body;
    })

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  };
  console.log(result)
  return result;
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
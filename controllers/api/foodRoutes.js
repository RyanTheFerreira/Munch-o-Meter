const router = require('express').Router();
const fetch = require('node-fetch');

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

module.exports = router;
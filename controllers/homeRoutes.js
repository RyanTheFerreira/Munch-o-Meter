const router = require('express').Router();
const { FoodInfo, User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const foodData = await FoodInfo.findAll({
      where: {user_id: req.session.user_id},
      attributes: { exclude: ['id'] },
      order: [['date_time', 'DESC']],
    });

    const userData = await User.findAll({
      where: {id: req.session.user_id},
    });

    const foods = foodData.map((project) => project.get({ plain: true }));
    const users = userData.map((project) => project.get({ plain: true }));

    const user = users[0];

    res.render('nutrition', {
      foods,
      user,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



router.get('/register', (req, res) => {
  // If a session exists, redirect the request to the homepage

  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');

});

// Add a new route for the nutrition page
router.get('/nutrition', withAuth, async (req, res) => {
  try {
    const foodData = await FoodInfo.findAll({
      where: {user_id: req.session.user_id},
      attributes: { exclude: ['id'] },
      order: [['date_time', 'DESC']],
    });

    const userData = await User.findAll({
      where: {id: req.session.user_id},
    });

    const foods = foodData.map((project) => project.get({ plain: true }));
    const users = userData.map((project) => project.get({ plain: true }));

    const user = users[0];

    res.render('nutrition', {
      foods,
      user,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Add a new route for the about page
router.get('/about', withAuth, (req, res) => {
  res.render('about', {
    // Pass any necessary data to the nutrition template
    logged_in: req.session.logged_in,
  });
});


module.exports = router;
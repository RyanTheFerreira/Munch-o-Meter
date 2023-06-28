const router = require('express').Router();
const { User } = require('../../models');

/// this is a test in this page


router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);
    // Code to create a new user in the database
    const newUser = await User.create({ name, email, password });
    console.log(newUser);
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });

    
    // res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to register user.' });
  }
});



router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


router.post

// Route for user profile page
router.get('/profile', async (req, res) => {
  try {
    const userId = req.userId; // Assuming you have a middleware to extract the authenticated user's ID
    
    // Code to retrieve user data from the database
    const user = await User.findByPk(userId);
    
    if (!user) {
      res.status(404).json({ message: 'User not found.' });
      return;
    }

    res.status(200).json({ username: user.username, email: user.email });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch user profile.' });
  }
});
module.exports = router;

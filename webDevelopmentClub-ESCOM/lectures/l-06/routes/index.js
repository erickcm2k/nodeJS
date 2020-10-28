const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('login', (req, res) => {
  res.render('login');
});

// localhost:3000/new_user
router.get('/new_user', (req, res) => {
  res.render('new_user');
});

module.exports = router;

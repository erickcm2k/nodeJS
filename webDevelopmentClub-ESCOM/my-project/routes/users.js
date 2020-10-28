// localhost:8080/users/
const { Router } = require('express');
const { User } = require('../models/user');

const router = Router();

// localhost:8080/users/register
router.post('/register', (req, res) => {
  const user = new User({
    Nombre: req.body.Nombre,
    Password: req.body.Password,
    Email: req.body.Email,
  });
  user.save((error, obj) => {
    if (error) {
      console.log(String(error));
      res.redirect('/new_user');
    } else {
      console.log('Usuario registrado');
      console.log(obj);
      res.redirect('/');
    }
  });
});

module.exports = router;

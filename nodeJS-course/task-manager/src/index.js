const express = require('express');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000; // Port for Heroku deployment

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);
  user.save().then((result) => {
    res.send(result);
  }).catch((error) => {
    res.send(error);
  });
});

app.listen(port, () => {
  console.log('Server running at port', port);
});

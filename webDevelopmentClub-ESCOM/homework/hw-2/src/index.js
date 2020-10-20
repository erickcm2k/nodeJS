const express = require('express');

// Creating express app
const app = express();

// Requiring port
const { PORT } = process.env;

// Setting view engines
app.set('views', './views');
app.set('view engine', 'pug');

// Home directory
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Login',
  });
});

app.listen(PORT);
console.log(`Listening on localhost:${PORT}`);

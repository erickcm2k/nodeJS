const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = process.env;
// Creating express app
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Requiring port

// Setting view engines
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', require('../routes/index.js'));
app.use('/users', require('../routes/users.js'));

app.use((req, res) => {
  res.status(404);
  res.render('404');
});

app.listen(PORT);
console.log(`Listening on localhost:${PORT}`);

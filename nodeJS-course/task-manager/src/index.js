const express = require('express');
require('./db/mongoose');
const bcrypt = require('bcrypt');
const usersRouter = require('./routers/users');
const tasksRouter = require('./routers/tasks');

const app = express();
const port = process.env.PORT || 3000; // Port for Heroku deployment

app.use(express.json());
app.use(usersRouter);
app.use(tasksRouter);

app.listen(port, () => {
  console.log('Server running at port', port);
});

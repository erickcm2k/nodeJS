const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
});

const User = mongoose.model('user', {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid.');
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error("'Password can not contain the word 'password'. Choose a new one.");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number.');
      }
    },
  },

});

// const me = new User({
//   name: '    Erick  Castañeda Martínez',
//   password: 'comepassword',
//   email: 'erickce40@gmail.com',
//   age: '20',
// });

// me.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// });

const Task = mongoose.model('task', {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const myTask = new Task({
  description: 'Go to party',
  completed: true,
});

myTask.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});

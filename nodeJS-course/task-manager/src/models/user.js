const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Task = require('./task');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    unique: true,
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
        throw new Error(
          "'Password can not contain the word 'password'. Choose a new one.",
        );
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
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
}, {
  timestamps: true,
});

userSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'owner',
});
/**
 *
 * Methods are accesible on the model INSTANCES.
 * Usually called 'instance methods'.
 *
 */
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'thisisacourse');
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};
/**
 *
 * Static are accesible on the MODEL.
 * Usually called 'model methods'.
 *
 * Custom methos for find user by email and password
 *
 */
userSchema.statics.findByCredentials = async (email, password) => {
  // FindOe finds by object matches instead of id.
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Unable to login.');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Unable to login.');
  }
  return user;
};

// Hashes the plain text password before saving it.
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  // If 'next' not included, the application will not continue.
  next();
});

// Deletes all tasks asociated with a user when deleted.
userSchema.pre('remove', async function (next) {
  const user = this;
  await Task.deleteMany({
    owner: user._id,
  });
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;

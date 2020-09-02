const express = require('express');

const router = new express.Router();
const User = require('../models/user');

router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save(user);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Router for sign in users
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    res.send(user);
  } catch (error) {
    res.status(404).send();
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users, 'loged in!');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedModifications = ['name', 'email', 'password', 'age'];
  const isValidUpdate = updates.every((update) => allowedModifications.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send();
  }

  try {
    // Use instead of findByIdAndUpdate
    const user = await User.findById(req.params.id);
    // Overwriting the previous user with new fields from request
    updates.forEach((update) => user[update] = req.body[update]);
    await user.save();
    // const user = await User.findByIdAndUpdate(
    //   req.params.id, req.body,
    //   { new: true, runValidators: true },
    // );
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

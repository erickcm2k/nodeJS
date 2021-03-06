const express = require('express');
const auth = require('../middleware/auth');

const router = new express.Router();
const Task = require('../models/task');

/**
 *
 *
 * Creates a new task asociated with a user.
 *
 *
 */
router.post('/tasks', auth, async (req, res) => {
  // const task = new Task(req.body);
  // Linking task to a user.
  const task = new Task({
    ...req.body,
    owner: req.user.id,
  });
  try {
    await task.save(task);
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 *
 *
 * Gets all the tasks of a user.
 *
 *
 */

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc

router.get('/tasks', auth, async (req, res) => {
  const match = {};
  const sort = {};

  if (req.query.completed) {
    match.completed = req.query.completed === 'true';
  }

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
    console.log(parts);
  }

  try {
    // Another way
    // const tasks = await Task.find({
    //   owner: req.user._id,
    // });
    // res.send(tasks);
    // Another way to do the same.
    await req.user.populate('tasks').execPopulate({
      path: 'tasks',
      match, // match: match
      options: {
        limit: parseInt(req.query.limit, 10),
        skip: parseInt(req.query.skip, 10),
        sort,
      },
    });
    res.send(req.user.tasks);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 *
 *
 * Gets task by id. Only if user is loged in.
 *
 *
 */
router.get('/tasks/:id', auth, async (req, res) => {
  const _id = req.params.id;

  try {
    // const task = await Task.findById(_id);
    const task = await Task.findOne({
      _id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (error) {
    return res.status(500).send();
  }
});
/**
 *
 *
 * Modifies a task.
 *
 *
 */
router.patch('/tasks/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedModifications = ['completed', 'description'];
  const isValidUpdate = updates.every((update) => allowedModifications.includes(update));

  if (!isValidUpdate) {
    res.status(400).send();
  }

  try {
    // const task = await Task.findByIdAndUpdate(
    //   req.params.id, req.body, { new: true, runValidators: true },
    // );
    // const task = await Task.findById(req.params.id);
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!task) {
      return res.status(404).s;
    }
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 *
 *
 * Deletes a task
 *
 *
 */
router.delete('/tasks/:id', auth, async (req, res) => {
  try {
    // const task = await Task.findByIdAndDelete(req.params.id);
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

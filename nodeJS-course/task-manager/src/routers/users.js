const express = require('express');
const multer = require('multer');
const auth = require('../middleware/auth');

const router = new express.Router();
const User = require('../models/user');
/**
 *
 *
 * Creates a new user
 *
 *
 */
router.post('/users', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save(user);
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 *
 *
 * Login route for user
 *
 *
 */
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(404).send();
  }
});
/**
 *
 *
 * Logout route for user
 *
 *
 */
router.post('/users/logout', auth, async (req, res) => {
  try {
    // Filter the array to only one token
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});
/**
 *
 *
 * Logout from all devices route for user
 *
 *
 */
router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    // Filter the array to only one token
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});
/**
 *
 *
 * Get all the users
 *
 *
 */
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});
/**
 *
 *
 * Gets user by id
 *
 *
 */
// router.get('/users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).send();
//     }
//     res.send(user);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
/**
 *
 *
 * Modifies user by id
 *
 *
 */
router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedModifications = ['name', 'email', 'password', 'age'];
  const isValidUpdate = updates.every((update) => allowedModifications.includes(update));

  if (!isValidUpdate) {
    return res.status(400).send();
  }

  try {
    // Use instead of findByIdAndUpdate
    // const req.user = await User.findById(req.user._id);
    // Overwriting the previous user data with new fields from request
    updates.forEach((update) => req.user[update] = req.body[update]);
    await req.user.save();
    // const user = await User.findByIdAndUpdate(
    //   req.params.id, req.body,
    //   { new: true, runValidators: true },
    // );
    if (!req.user) {
      return res.status(404).send();
    }
    res.send(req.user);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 *
 *
 * Deletes user by id
 *
 *
 */
router.delete('/users/me', auth, async (req, res) => {
  try {
    // const user = await User.findByIdAndDelete(req.params.id);
    // if (!user) {
    //   return res.status(404).send();
    // }
    await req.user.remove();
    res.send(req.user);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 *
 *
 * Route for adding a user profile picture
 *
 *
 */
const Mb = 1000000;
const upload = multer({
  // dest: 'avatar',
  limits: {
    fileSize: Mb,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
      return cb(new Error('File must be a PNG, JPG or JPEG.'));
    }
    cb(undefined, true);
  },
});

router.post('/users/me/avatar', auth, upload.single('upload'), async (req, res) => {
  req.user.avatar = req.file.buffer;
  await req.user.save();
  res.send();
}, (error, req, res, next) => {
  res.status(400).send({ error: error.message });
});

router.delete('/users/me/avatar', auth, async (req, res) => {
  req.user.avatar = undefined;
  await req.user.save();
  res.status.send();
});
module.exports = router;

const User = require("../models/user").User();

module.exports = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    User.findById(req.session.user_id, (err, user) => {
      if (err) {
        console.log(err);
        res.redirect("/login");
      } else {
        res.locals = { user: user };
        next();
      }
    });
  }
};

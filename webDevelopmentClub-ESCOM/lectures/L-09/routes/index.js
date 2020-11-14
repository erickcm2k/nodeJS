const { Router } = require('express');
const router = Router();

router.get("/", function(req,res){ //Metodo Principal 
   if(String(req.session.user_id) == "undefined"){

      res.render("index");

   } else{

      res.redirect("/users");
  }
});

router.get("/login", function(req,res){ //Metodo GET que se invocara cuando entre la directiva Login
   res.render("login");
});

router.get("/new_user", function(req,res){ //Metodo GET que se invocara cuando entre la directiva Login
   res.render("new_user");
});

router.get("/home", function(req,res){ //Metodo GET que se invocara cuando entre la directiva Login
   res.render("users/home");
});

module.exports = router;